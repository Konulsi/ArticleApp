import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewArticle, article } from 'src/app/interfaces/article';
import { ArticleService } from 'src/app/services/articles.service';
import { ArticleDialogComponent } from '../article-dialog/article-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.sass'],
})
export class NewArticleComponent {
  newArticleForm!: FormGroup;
  articles!: article[];
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private articleService: ArticleService,
    public dialog: MatDialog
  ) {
    this.newArticleForm = this.formBuilder.group({
      body: ['', Validators.required],
      title: ['', Validators.required],
      tag: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  create() {
    const data: NewArticle = {
      article: this.newArticleForm.value,
    };

    this.articleService.postArticle(data).subscribe((resp) => {
      this.router.navigate(['/']);
    });
  }

  // openDialog(element: any, yesOrNo: any) {
  //   const dialogRef = this.dialog.open(ArticleDialogComponent, {
  //     //1ci hansi komponenti achiriq, ikincisi icherisine ne gonderirik yeni hansi datani
  //     data: {
  //       blog: element,
  //       isUpdate: yesOrNo,
  //     },
  //   });

  //   dialogRef.afterClosed().subscribe((result) => {
  //     this.getArticlesList();
  //   });
  // }

  // getArticlesList() {
  //   this.articleService.getArticles().subscribe((result) => {
  //     this.articles = result.articles;
  //   });
  // }

  ///

  ///
  ///
  // create() {
  //   this.articleService
  //     .getPostArticle({
  //       article: {
  //         description: this.newArticleForm.value.description,
  //         title: this.newArticleForm.value.title,
  //         tag: this.newArticleForm.value.tag,
  //         body: this.newArticleForm.value.body,

  //       },
  //     } as unknown as articles)
  //     .subscribe((res) => {
  //       this.router.navigate(['/']);
  //     });
  // }
}
