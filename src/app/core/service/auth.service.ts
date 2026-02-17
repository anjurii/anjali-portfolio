import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/api/admin/login';

  constructor(private http: HttpClient) {}

  login(credentials: any) {
    return this.http.post<any>(this.apiUrl, credentials)
      .pipe(
        tap(response => {
          localStorage.setItem('adminToken', response.token);
        })
      );
  }

  logout() {
    localStorage.removeItem('adminToken');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('adminToken');
  }

  getToken() {
    return localStorage.getItem('adminToken');
  }
}
