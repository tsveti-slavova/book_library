import { Component, OnInit } from '@angular/core';
import { IBook } from '../../interfaces/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-catalog',
  templateUrl: './book-catalog.component.html',
  styleUrls: ['./book-catalog.component.css']
})
export class BookCatalogComponent implements OnInit {

  loadedBooks: IBook[] = [];


  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.fetchBooks();
}

}
