import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ slug }) => {
      //rout-dan paramsi goturub methoda gonderirik
      this.getArticle(slug);
    });
  }

  getArticle(slug: string) {
    this.articleService.getArticleBySlug(slug).subscribe((articleData) => {
      this.article = articleData.article;
    });
  }

  deleteArticle() {
    this.articleService.deleteArticle(this.article.slug).subscribe((data) => {
      this.router.navigate(['/']);
    });
  }
}
