import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
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
    return this.httpClient
    .get<{ config: any; data: IBook[]; usage: any }>(
      `https://${projectId}-default-rtdb.firebaseio.com/Books.json`)
    .pipe(
      tap((response) => {
        this.booksData = response.data;
      })
    );
  }

  // loadBooks() {
  //   const projectId = 'book-library-fb8bd'
  //   return this.httpClient.get<IBook[]>(`https://${projectId}-default-rtdb.firebaseio.com/Books.json`)
  // }
}
