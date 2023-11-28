import { Component } from '@angular/core';

@Component({
  selector: 'app-article-dialog',
  templateUrl: './article-dialog.component.html',
  styleUrls: ['./article-dialog.component.sass'],
})
export class ArticleDialogComponent {
  // isSaved: boolean = false;
  // constructor(
  //   @Inject(MAT_DIALOG_DATA) private data: any,
  //   private dialogRef: MatDialogRef<ArticleDialogComponent>,
  //   private router: Router,
  //   private formBuilder: FormBuilder,
  //   private articleService: ArticleService
  // ) {
  //   if (data.isSaved) {
  //     this.isSaved = true;
  //   }
  //   this.newArticleForm = this.formBuilder.group({
  //     body: ['', Validators.required],
  //     title: ['', Validators.required],
  //     tag: ['', Validators.required],
  //     description: ['', Validators.required],
  //   });
  // }
  // newArticleForm!: FormGroup;
  // save() {
  //   const data: NewArticle = {
  //     article: this.newArticleForm.value,
  //   };
  //   this.articleService.postArticle(data).subscribe((resp) => {
  //     this.router.navigate(['/']);
  //   });
  // }
  // dontSave() {
  //   this.dialogRef.close();
  // }
  // close() {
  //   this.dialogRef.close();
  // }
}
