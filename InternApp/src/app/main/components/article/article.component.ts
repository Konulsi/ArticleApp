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
  //ya article object kimi chagiririq ya da hisseki shekilde
  // @Input() title: string = '';
  // @Input() authorImage: string = '';
  // @Input() description: string = '';
  // @Input() authorUsername: string = '';
  // @Input() authorBio: string = '';

  constructor(
    private articlesService: ArticleService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  deleteArticle() {
    this.articlesService.deleteArticle(this.article.slug).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/']);
    });
  }
}
