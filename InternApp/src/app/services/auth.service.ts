import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../interfaces/loginResponse';
import { LoginDto } from '../interfaces/loginDto';
import { Observable } from 'rxjs';
import { Urls } from '../enums/url';
import { RegisterDto } from '../interfaces/registerDto';
import { Env } from '../enums/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(registerDto: RegisterDto): Observable<RegisterDto> {
    return this.http.post<RegisterDto>(Env.BASEURL + Urls.USER, registerDto);
  }

  login(loginDto: LoginDto): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(Env.BASEURL + Urls.LOGIN, loginDto);
  }

  setToken(token: string) {
    localStorage.setItem('authToken', token);
  }

  get token() {
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      return null;
    }
    return authToken;
  }
}
