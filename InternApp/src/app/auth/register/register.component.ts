import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterDto } from '../../interfaces/registerDto';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {}

  register() {
    this.authService
      .register({
        user: {
          username: this.registerForm.value.username,
          email: this.registerForm.value.email,
          password: this.registerForm.value.password,
        },
      } as RegisterDto)
      .subscribe((res) => {
        this.authService.setToken(res.user.token);
        this.router.navigate(['/']);
      });
  }
}
