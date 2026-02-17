
import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Skills } from './pages/skills/skills';
import { Projects } from './pages/projects/projects';
import { Contact } from './pages/contact/contact';
import { AdminDashboard } from './pages/admin-dashboard/admin-dashboard';
import { AdminLogin } from './pages/admin-login/admin-login';
import { authGuard } from './core/guards/auth.guard';
export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About},
  { path: 'skills', component: Skills },
  { path: 'projects', component: Projects },
  { path: 'contact', component: Contact },
   { path: 'admin-login', component: AdminLogin },
   { path: 'admin-dashboard', component: AdminDashboard, canActivate: [authGuard] }

];
