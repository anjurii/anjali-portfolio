import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [NgFor],
  templateUrl: './skills.html',
  standalone: true,
  styleUrl: './skills.scss',
})
export class Skills {
skillCategories = [
    {
      title: 'Frontend',
      skills: ['Angular', 'TypeScript', 'RxJS', 'JavaScript', 'HTML5', 'CSS3', 'Micro Frontend']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js']
    },
    {
      title: 'DevOps & CI/CD',
      skills: ['GitHub Actions', 'GitLab CI/CD', 'Azure DevOps', 'Git']
    },
    {
      title: 'Databases & Tools',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Postman', 'Swagger', 'Jira']
    }
  ];
}
