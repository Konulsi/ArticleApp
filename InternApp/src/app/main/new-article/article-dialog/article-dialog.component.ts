import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-article-dialog',
  templateUrl: './article-dialog.component.html',
  styleUrls: ['./article-dialog.component.sass'],
})
export class ArticleDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<ArticleDialogComponent>
  ) {}
  save() {
    this.dialogRef.close(true);
  }
  dontSave() {
    this.dialogRef.close();
  }
  closeIcon() {
    this.dialogRef.close();
  }
}
