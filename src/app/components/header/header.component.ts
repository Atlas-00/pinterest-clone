import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  inputValue!: string;

  constructor(private dataService: DataService) {}

  fakeButton() {
    alert(
      "Il s'agit d'un clone fictif de pinterest cette action est impossible !"
    );
  }

  searchValue() {
    this.dataService.dataSearch = this.inputValue;
  }

  onSearch() {
    this.searchValue();
    this.dataService.searchInput();
  }
}
