import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() searchValue = new EventEmitter<string>();
  searchBook(search:string){
    this.searchValue.emit(search)
  }
}
