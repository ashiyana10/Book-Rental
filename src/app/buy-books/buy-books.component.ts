import { Component } from '@angular/core';
import { IBookData } from './buy-books.service';
import bookData from './data.json';
@Component({
  selector: 'app-buy-books',
  templateUrl: './buy-books.component.html',
  styleUrls: ['./buy-books.component.scss'],
})
export class BuyBooksComponent {
  bookData: IBookData[] = bookData;
  searchValue!: string;

  ngOnInit(): void {
    // default book sorted by title
    this.getDataBySortField('title');
  }

  /**
   * perform the sorting as selected category
   * @param field store the category
   */
  getDataBySortField(field: string): void {
    // type assertion to tell TypeScript that the propertyToSortBy variable is a keyof the type of the first element of the array.
    let propertyToSortBy = field as keyof typeof bookData[0];
    this.bookData = this.bookData.sort((a, b) =>
      a[propertyToSortBy] < b[propertyToSortBy] ? -1 : 1
    );
  }

  /**
   * search the book by title
   * @param value store search value
   */
  searchBook(value: string) :void{   
    const searchValue = value.toLowerCase();
    let propertyToSortBy = 'title' as keyof typeof bookData[0];
    this.bookData = bookData.filter((item) =>
      Object.keys(item).some((key) =>
        item[propertyToSortBy].toString().toLowerCase().includes(searchValue)
      )
    );
  }
}
