import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleDetailRoutingModule } from './article-detail-routing.module';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [ArticleDetailComponent],
  imports: [CommonModule, ArticleDetailRoutingModule, MaterialModule],
})
export class ArticleDetailModule {}
