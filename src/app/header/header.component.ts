import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() searchValue = new EventEmitter<string>();

  /**
   * pass the search item from child to parent
   * @param search store the search value
   */
  searchBook(search: string): void {
    this.searchValue.emit(search);
  }
}
