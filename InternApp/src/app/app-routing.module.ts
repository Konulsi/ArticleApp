import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./main/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'newarticle',
    loadChildren: () =>
      import('./main/new-article/new-article.module').then(
        (m) => m.NewArticleModule
      ),
  },
  {
    path: 'articledetail',
    loadChildren: () =>
      import('./main/article-detail/article-detail.module').then(
        (m) => m.ArticleDetailModule
      ),
  },
  {
    path: 'editarticle',
    loadChildren: () =>
      import('./main/edit-article/edit-article.module').then(
        (m) => m.EditArticleModule
      ),
  },
  // { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
