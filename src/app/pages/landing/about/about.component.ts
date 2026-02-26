import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TeamMember {
  name: string;
  role: string;
  image?: string; // optional for blank (Monalisa)
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [CommonModule],
  standalone: true,
})
export class AboutComponent implements OnInit {
  teamMembers: TeamMember[] = [
    {
      name: 'D S Lavanya',
      role: 'Developer',
      image: '/assets/team/lavanya.jpg',
    },
    {
      name: 'Deepak M',
      role: 'Developer',
      image: '/assets/team/deepak.jpg',
    },
    {
      name: 'H S Varun',
      role: 'Developer',
      image: '/assets/team/varun.jpg',
    },
    {
      name: 'Monalisa S',
      role: 'Developer',
      image: '/assets/team/monalisa.jpeg'
    },
  ];

  ngOnInit() {
    this.setupScrollAnimations();
  }

  private setupScrollAnimations() {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-in');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      );

      document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    }
  }
}
