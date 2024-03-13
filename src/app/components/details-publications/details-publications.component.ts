import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  PiterestPublication,
  TypePiterestPublication,
} from '../../model/pinterest-publication.model';
import { DownloadImageDirective } from '../../directive/download-image.directive';

@Component({
  selector: 'app-details-publications',
  standalone: true,
  imports: [DownloadImageDirective],
  templateUrl: './details-publications.component.html',
  styleUrl: './details-publications.component.scss',
})
export class DetailsPublicationsComponent implements OnInit {
  id!: number;
  listPublications: TypePiterestPublication[] = PiterestPublication;
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
        console.log(publication);
      }
    }
  }
}
