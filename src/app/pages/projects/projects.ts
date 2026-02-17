import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [NgFor],
  templateUrl: './projects.html',
  standalone: true,
  styleUrl: './projects.scss',
})
export class Projects {
  projects = [
    {
      title: 'Insurance Self-Service Portal',
      description: 'Built and maintained a portal used by 50K+ active users for claims, renewals, document uploads, and real-time tracking.',
      highlights: [
        'Multi-step Reactive Forms with rule-based validations',
        'Secure authentication & role-based access',
        'Centralized error handling with interceptors',
        'Improved form success rate by 35%'
      ]
    },
    {
      title: 'Analytics Dashboard / Reporting Tool',
      description: 'Developed enterprise dashboards delivering KPIs and operational insights for leadership teams.',
      highlights: [
        'Micro Frontend architecture using Module Federation',
        'Reusable directives and UI utilities',
        'Improved rendering performance by 30%',
        'Multi-environment CI/CD deployments'
      ]
    },
    {
      title: 'Home Network Platform (Telecom)',
      description: 'Built real-time device and network monitoring features consuming high-frequency REST APIs.',
      highlights: [
        'Optimized change detection strategies',
        'Caching and lazy loading implementation',
        'Improved diagnostic recommendation tracking'
      ]
    },
    {
      title: 'TV Shop Subscription Management',
      description: 'Owned end-to-end frontend development of subscription lifecycle management platform.',
      highlights: [
        'Subscription activation, upgrade, downgrade, cancellation flows',
        'Reliable API orchestration',
        'Real-time pricing updates',
        'Production stability & hotfix ownership'
      ]
    }
  ];
}
