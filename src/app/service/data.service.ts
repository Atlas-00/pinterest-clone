import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  PinterestPublication,
  TypePiterestPublication,
} from '../model/pinterest-publication.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private listPublication: TypePiterestPublication[] = PinterestPublication;
  private resultSearch!: TypePiterestPublication | TypePiterestPublication[];

  private inputValueSource = new BehaviorSubject('');
  currentInputValue = this.inputValueSource.asObservable();

  changeInputValue(inputValue: string) {
    this.inputValueSource.next(inputValue);
  }

  searchInput(inputValue: string) {
    const resultSearch = (this.resultSearch = this.listPublication.filter(
      (_element) => _element.title.toLowerCase().includes(inputValue)
    ));

    console.log(resultSearch);
    return resultSearch;
  }
}
