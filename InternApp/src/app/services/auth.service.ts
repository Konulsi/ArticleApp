import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../interfaces/loginResponse';
import { LoginDto } from '../interfaces/loginDto';
import { Observable } from 'rxjs';
import { Urls } from '../enums/url';
import { RegisterDto } from '../interfaces/registerDto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl: string = 'https://api.realworld.io/api/';

  constructor(private http: HttpClient) {}

  register(registerDto: RegisterDto): Observable<RegisterDto> {
    return this.http.post<RegisterDto>(this.baseUrl + Urls.USER, registerDto);
  }

  login(loginDto: LoginDto): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.baseUrl + Urls.LOGIN, loginDto);
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
