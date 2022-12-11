import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBook } from '../interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: IBook[]= [];

  get booksData () {
    return this.books;
  }

  set booksData (booksData) {
    this.books = booksData;
  }

  constructor(private httpClient: HttpClient) { }

  fetchBooksData() {
    const projectId = 'book-library-fb8bd';
    return this.httpClient.get(`https://${projectId}-default-rtdb.firebaseio.com/Books.json`
    );
  }

  
}
