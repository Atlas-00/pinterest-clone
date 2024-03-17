import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DownloadImageDirective } from '../../directive/download-image.directive';
import {
  PinterestPublication,
  TypePiterestPublication,
} from '../../model/pinterest-publication.model';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DownloadImageDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  mediaData = [...PinterestPublication];
  input!: string;
  listResultOfSearch!: any;
  dataShare: TypePiterestPublication[] = [...this.dataService.shareData()];

  constructor(private router: Router, private dataService: DataService) {}

  getDetails(idPublication: number) {
    this.router.navigate(['detail-publication', idPublication]);
  }
}
