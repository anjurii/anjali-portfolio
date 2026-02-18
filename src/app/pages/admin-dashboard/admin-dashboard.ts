import { Component, OnInit } from '@angular/core';
import { NgFor, DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../core/service/auth.service';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [NgFor, DatePipe],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.scss',
})
export class AdminDashboard implements OnInit {

  messages: any[] = [];

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

 ngOnInit() {
  this.http.get<any[]>(`${environment.apiUrl}/api/contacts`)
    .subscribe(data => {
      console.log('Loaded messages:', data);
      this.messages = data;

      // 👇 Force Angular to detect changes
      this.cdr.detectChanges();
    });
}
trackById(index: number, item: any) {
  return item._id;
}
 

  logout() {
    this.authService.logout();
    this.router.navigate(['/admin-login']);
  }
}
