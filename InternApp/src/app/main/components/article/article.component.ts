import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { article } from 'src/app/interfaces/article';
import { ArticleService } from 'src/app/services/articles.service';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.sass'],
})
export class ArticleComponent implements OnInit {
  @Input() article!: article;
  // articles!: article[];
  @Output() articlesList = new EventEmitter<article[]>(); //parente qaytaracagimiz datani articlesList e beraberlesdiririk.
  //ya article object kimi chagiririq ya da hisseki shekilde
  // @Input() title: string = '';
  // @Input() authorImage: string = '';

  constructor(
    private articleService: ArticleService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {}

  openDialog() {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      //1ci hansi komponenti achiriq, ikincisi icherisine ne gonderirik yeni hansi datani
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteArticle();
        this.router.navigate(['/']);
      }
    });
  }

  deleteArticle() {
    this.articleService.deleteArticle(this.article.slug).subscribe((data) => {
      this.getArticlesList();
    });
  }

  getArticlesList() {
    this.articleService.getArticles().subscribe((result) => {
      this.articlesList.emit(result.articles);
    });
  }
}
