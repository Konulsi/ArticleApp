import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ArticleDto,
  ArticleEditDto,
  Articles,
  NewArticle,
  article,
  articleDto,
} from '../interfaces/article';
import { Urls } from '../enums/url';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  baseUrl: string = 'https://api.realworld.io/api/';

  constructor(private http: HttpClient) {}

  getArticles() {
    return this.http.get<Articles>(this.baseUrl + Urls.ARTICLE);
  }

  getArticleBySlug(slug: string) {
    return this.http.get<articleDto>(this.baseUrl + Urls.ARTICLE + '/' + slug);
  }

  postArticle(data: NewArticle) {
    return this.http.post<NewArticle>(this.baseUrl + Urls.ARTICLE, data);
  }

  deleteArticle(slug: string) {
    return this.http.delete(this.baseUrl + Urls.ARTICLE + '/' + slug);
  }

  putArticle(slug: string, dto: Partial<ArticleEditDto>) {
    return this.http.put(this.baseUrl + Urls.ARTICLE + '/' + slug, dto);
  }
}
