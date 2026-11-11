import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCard } from './profile-card/profile-card';

@Component({
  imports: [RouterOutlet, ProfileCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App {
  fullName = 'Alexie T. Maglalang';
  location = 'Angeles City, Pampanga';
  email = 'alexiemaglalang13@gmail.com';
  phone = '0918 035 7724';
  education = 'Bachelor of Science in Information Technology';
  school = 'Holy Angel University';
  schoolLocation = 'Angeles City, Pampanga';
  educationYears = '2024 - 2028';

  profile = 'Aspiring front-end developer with hands-on experience in HTML, CSS, JavaScript, TypeScript, and Angular. Detail-oriented, with a focus on building clean, responsive web pages. Ultimately, I am seeking an opportunity to apply my skills in a real-world setting and grow as a developer.';

  skills = [
    'HTML and CSS',
    'JavaScript',
    'TypeScript',
    'Angular'
  ];

  projects = [
    'Hain Na - Restaurant Ordering and Reservation System',
    'Dineamics - Multi-Cuisine Restaurant Website',
    'Digify - Digital Services Website'
  ];

  message = 'Welcome to my profile!';
  clickCount = 0;

  showMessage() {
    this.clickCount++;
    this.message = `You clicked the button ${this.clickCount} time(s).`;

  }
}
