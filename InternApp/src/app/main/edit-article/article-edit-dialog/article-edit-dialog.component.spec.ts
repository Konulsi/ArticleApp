import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleEditDialogComponent } from './article-edit-dialog.component';

describe('ArticleEditDialogComponent', () => {
  let component: ArticleEditDialogComponent;
  let fixture: ComponentFixture<ArticleEditDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleEditDialogComponent]
    });
    fixture = TestBed.createComponent(ArticleEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
