import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleEditDto, article } from 'src/app/interfaces/article';
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
  isEdit = false;
  slug!: article;

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
    private router: Router,
    private articleService: ArticleService,
    public dialog: MatDialog
  ) {
    if (this.editArticleForm.valid)
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
  }

  ngOnInit(): void {}

  editArticleBtn() {
    const formData = {
      // article: this.editArticleForm.value,
      title: this.editArticleForm.get('title')?.value,
      body: this.editArticleForm.get('body')?.value,
      description: this.editArticleForm.get('description')?.value,
      tag: this.editArticleForm.get('tag')?.value,
    };

    this.articleService.putArticle(this.slug, formData).subscribe((res) => {});
  }

  openDialog() {
    const dialogRef = this.dialog.open(ArticleEditDialogComponent, {
      //1ci hansi komponenti achiriq, ikincisi icherisine ne gonderirik yeni hansi datani
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        //dialogun close-unda result true -dirse
        this.editArticleBtn();
        this.router.navigate(['/']);
      }
    });
  }
}
