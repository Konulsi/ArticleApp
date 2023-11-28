import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoginDto } from '../../interfaces/loginDto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    // this.loginForm.get('password')?.valueChanges.subscribe((res) => {
    //   console.log(this.loginForm.get('password')?.errors);
    // });
  }

  login() {
    if (this.loginForm.valid) {
      const data: LoginDto = {
        user: this.loginForm.value,
      };

      this.authService.login(data).subscribe((resp) => {
        this.authService.setToken(resp.user.token);
        this.router.navigate(['/']);
      });
    }
  }
}
