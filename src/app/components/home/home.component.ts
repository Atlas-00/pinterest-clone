import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { DownloadImageDirective } from '../../directive/download-image.directive';
import { PiterestPublication } from '../../model/pinterest-publication.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DownloadImageDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  mediaData = [...PiterestPublication];

  router = inject(Router);

  getDetails(idPublication: number) {
    this.router.navigate(['detail-publication', idPublication]);
  }
}
