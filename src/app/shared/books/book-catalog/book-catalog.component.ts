import { Component, OnInit } from '@angular/core';
import { IBook } from '../../interfaces/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-catalog',
  templateUrl: './book-catalog.component.html',
  styleUrls: ['./book-catalog.component.css']
})
export class BookCatalogComponent implements OnInit {

  booksData: IBook[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.booksData = this.bookService.booksData;

    if(!this.booksData?.length) {
      this.bookService.fetchBooksData().subscribe((response) => {
        console.log(response);
      })
    }

}

}
