import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.css'
})
export class ProfileCard {
  cardTitle = 'A Little About Me';
  description = 'I am an Information Technology student majoring in Web Development at Holy Angel University. I enjoy exploring new technologies and designing functional and user-friendly applications. I am continuously working on improving my skills through hands-on projects and new learning experiences.';
}
