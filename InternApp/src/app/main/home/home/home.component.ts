import { Component, OnInit } from '@angular/core';
import { Articles, article } from 'src/app/interfaces/article';
import { ArticleService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  articles: article[] = [];

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.getArticlesList();
  }

  getArticlesList() {
    this.articleService.getArticles().subscribe((articles) => {
      this.articles = articles.articles;
    });
  }
  getUpdatedListArticle(event: any) {
    this.articles = event;
  }
}
