import { Component } from '@angular/core';
import { PiterestPublication } from '../../model/pinterest-publication.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  mediaData = [...PiterestPublication];
}
