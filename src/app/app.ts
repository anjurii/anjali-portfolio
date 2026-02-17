import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Navbar } from './shared/navbar/navbar';
import { NgIf, NgTemplateOutlet } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
constructor(private router: Router) {}
  isAdminRoute(): boolean {
    return this.router.url.includes('admin');
  }
}