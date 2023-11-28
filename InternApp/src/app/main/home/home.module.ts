import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from '../components/article/article.component';

@NgModule({
  declarations: [HomeComponent, ArticleComponent],
  imports: [CommonModule, HomeRoutingModule, MaterialModule],
})
export class HomeModule {}
