import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavOutComponent } from "../../components/nav-out/nav-out.component";
import { RouterOutlet } from '@angular/router';
import { FouteerComponent } from 'src/app/components/fouteer/fouteer.component';

@Component({
  selector: 'app-outh-layout',
  standalone: true,
  imports: [CommonModule, NavOutComponent , RouterOutlet , FouteerComponent],
  templateUrl: './outh-layout.component.html',
  styleUrls: ['./outh-layout.component.scss']
})
export class OuthLayoutComponent {

}
