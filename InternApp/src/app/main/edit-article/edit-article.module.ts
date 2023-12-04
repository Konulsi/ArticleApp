import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditArticleRoutingModule } from './edit-article-routing.module';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ArticleEditDialogComponent } from './article-edit-dialog/article-edit-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditArticleComponent, ArticleEditDialogComponent],
  imports: [
    CommonModule,
    EditArticleRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class EditArticleModule {}
