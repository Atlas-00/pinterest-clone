import { Injectable } from '@angular/core';
import {
  PinterestPublication,
  TypePiterestPublication,
} from '../model/pinterest-publication.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private listPublication: TypePiterestPublication[] = PinterestPublication;
  resultSearch!: TypePiterestPublication[];
  dataSearch!: string;

  searchInput() {
    const resultSearch = (this.resultSearch = this.listPublication.filter(
      (_element) => _element.title.toLowerCase().includes(this.dataSearch)
    ));

    return resultSearch;
  }

  shareData() {
    return [...this.searchInput()];
  }
}
