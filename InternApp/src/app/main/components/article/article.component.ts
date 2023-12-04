import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { Articles, article } from 'src/app/interfaces/article';
import { ArticleService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.sass'],
})
export class ArticleComponent implements OnInit {
  @Input() article!: article;
  articles!: article[];

  //ya article object kimi chagiririq ya da hisseki shekilde
  // @Input() title: string = '';
  // @Input() authorImage: string = '';
  // @Input() description: string = '';
  // @Input() authorUsername: string = '';
  // @Input() authorBio: string = '';

  disabled = false;

  constructor(private articleService: ArticleService, private router: Router) {}

  ngOnInit(): void {
    this.getArticlesList();
  }

  deleteArticle() {
    this.articleService.deleteArticle(this.article.slug).subscribe((data) => {
      this.getArticlesList();
    });
  }

  getArticlesList() {
    this.articleService.getArticles().subscribe((result) => {
      this.articles = result.articles;
    });
  }
}
