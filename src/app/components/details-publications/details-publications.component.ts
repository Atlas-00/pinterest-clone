import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DownloadImageDirective } from '../../directive/download-image.directive';
import {
  PinterestPublication,
  TypePiterestPublication,
} from '../../model/pinterest-publication.model';

@Component({
  selector: 'app-details-publications',
  standalone: true,
  imports: [DownloadImageDirective],
  templateUrl: './details-publications.component.html',
  styleUrl: './details-publications.component.scss',
})
export class DetailsPublicationsComponent implements OnInit {
  id!: number;
  listPublications: TypePiterestPublication[] = PinterestPublication;
  publication!: TypePiterestPublication;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const routeId = this.route.snapshot.paramMap.get('id');

    if (routeId) {
      this.id = +routeId;
      const publication = this.listPublications.find(
        (publicationId) => publicationId.id === this.id
      );

      if (publication) {
        this.publication = publication;
      }
    }
  }
}
