import { Component } from '@angular/core';
import { Articles, article } from 'src/app/interfaces/article';
import { ArticleService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent {
  articles: article[] = [];

  constructor(private articleService: ArticleService) {
    this.articleService.getArticles().subscribe((articles) => {
      this.articles = articles.articles;
    });
  }
}
