import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.sass'],
})
export class DeleteDialogComponent {
  constructor(
    // @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<DeleteDialogComponent>
  ) {}
  deleteBtn() {
    this.dialogRef.close(true);
  }
  dontDelete() {
    this.dialogRef.close();
  }
  closeIcon() {
    this.dialogRef.close();
  }
}
