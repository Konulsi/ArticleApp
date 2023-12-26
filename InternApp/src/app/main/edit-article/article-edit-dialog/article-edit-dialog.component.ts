import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-article-edit-dialog',
  templateUrl: './article-edit-dialog.component.html',
  styleUrls: ['./article-edit-dialog.component.sass'],
})
export class ArticleEditDialogComponent {
  constructor(private dialogRef: MatDialogRef<ArticleEditDialogComponent>) {}
  update() {
    this.dialogRef.close(true);
  }
  dontUpdate() {
    this.dialogRef.close();
  }
  closeIcon() {
    this.dialogRef.close();
  }
}
