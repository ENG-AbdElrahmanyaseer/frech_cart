import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-out',
  standalone: true,
  imports: [CommonModule , RouterLink ,RouterLinkActive],
  templateUrl: './nav-out.component.html',
  styleUrls: ['./nav-out.component.scss']
})
export class NavOutComponent {

}
