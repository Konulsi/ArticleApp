import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewArticleRoutingModule } from './new-article-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NewArticleComponent } from './new-article/new-article.component';
import { ArticleDialogComponent } from './article-dialog/article-dialog.component';

@NgModule({
  declarations: [NewArticleComponent, ArticleDialogComponent],
  imports: [
    CommonModule,
    NewArticleRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class NewArticleModule {}
