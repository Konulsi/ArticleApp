import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { article } from 'src/app/interfaces/article';
import { ArticleService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.sass'],
})
export class ArticleDetailComponent implements OnInit {
  article!: article;

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ slug }) => {
      this.getArticle(slug);
    });
  }

  getArticle(slug: article) {
    this.articleService.getArticleBySlug(slug).subscribe((articleData) => {
      console.log(articleData);

      this.article = articleData.article;
    });
  }
}
