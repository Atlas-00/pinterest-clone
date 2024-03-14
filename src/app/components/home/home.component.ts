import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DownloadImageDirective } from '../../directive/download-image.directive';
import { PinterestPublication } from '../../model/pinterest-publication.model';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DownloadImageDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  mediaData = [...PinterestPublication];
  input!: string;
  listResultOfSearch!: any;

  constructor(private data: DataService, private router: Router) {}

  ngOnInit() {
    this.listResultOfSearch = this.data.currentInputValue.subscribe(
      (inputValue: string) => (this.input = inputValue)
    );
  }

  getDetails(idPublication: number) {
    this.router.navigate(['detail-publication', idPublication]);
  }
}
