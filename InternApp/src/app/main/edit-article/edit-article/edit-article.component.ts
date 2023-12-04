import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ArticleEditDto,
  article,
  articleDto,
} from 'src/app/interfaces/article';
import { ArticleService } from 'src/app/services/articles.service';
import { ArticleEditDialogComponent } from '../article-edit-dialog/article-edit-dialog.component';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.sass'],
})
export class EditArticleComponent implements OnInit {
  // editArticleForm!: FormGroup;
  articles!: article[];
  article!: articleDto;

  isEdit = false;
  slug!: string;

  title: string = '';
  body: string = '';
  description: string = '';
  tag: string = '';

  editArticleForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    tag: new FormControl('', [Validators.required]),
  });

  constructor(
    private activatedRoute: ActivatedRoute, //params ile url e nese elave etdikde
    private route: Router,
    private articleService: ArticleService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ slug }) => {
      this.slug = slug;

      this.articleService
        .getArticleBySlug(this.slug)
        .subscribe(({ article }) => {
          console.log(article);

          this.editArticleForm.patchValue({
            title: article.title,
            body: article.body,
            description: article.description,
            tag: article.tagList.join(','),
          });
        });
    });
  }

  editArticleBtn(slug: string) {
    const formData = {
      article: this.editArticleForm.value,
    } as Partial<ArticleEditDto>;

    this.articleService.putArticle(this.slug, formData).subscribe(() => {
      this.route.navigate(['/']);
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(ArticleEditDialogComponent, {
      //1ci hansi komponenti achiriq, ikincisi icherisine ne gonderirik yeni hansi datani
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        //dialogun close-unda result true -dirse
        this.editArticleBtn(result.article);
        this.route.navigate(['/']);
      }
    });
  }
}
