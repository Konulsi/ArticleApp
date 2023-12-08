import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ArticleEditDto,
  Articles,
  NewArticle,
  articleDto,
} from '../interfaces/article';
import { Urls } from '../enums/url';
import { of, switchMap } from 'rxjs';
import { Env } from '../enums/environment';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  getArticles() {
    return this.http.get<Articles>(Env.BASEURL + Urls.ARTICLE);
  }

  getArticleBySlug(slug: string) {
    return this.http.get<articleDto>(Env.BASEURL + Urls.ARTICLE + '/' + slug);
  }

  postArticle(data: NewArticle) {
    return this.http.post<NewArticle>(Env.BASEURL + Urls.ARTICLE, data);
  }

  deleteArticle(slug: string) {
    return this.http.delete(Env.BASEURL + Urls.ARTICLE + '/' + slug);
  }

  putArticle(slug: string, dto: Partial<ArticleEditDto>) {
    return this.http.put(Env.BASEURL + Urls.ARTICLE + '/' + slug, dto);
  }
}
