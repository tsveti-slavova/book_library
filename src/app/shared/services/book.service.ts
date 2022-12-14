import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { IBook } from '../interfaces/book';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class BookService {
  loadedBooks: IBook[] = [];
  // private books: IBook[]= [];

  // get booksData () {
  //   return this.books;
  // }

  // set booksData (booksData) {
  //   this.books = booksData;
  // }

  constructor(private http: HttpClient) { }


// onFetchBooks() {
//   this.fetchBooks();
// }

onClearBooks() {

}

fetchBooks() {
  this.http
    .get<{ [key: string]: IBook}>('https://book-library-fb8bd-default-rtdb.firebaseio.com/Books.json')
    .pipe(
      map(responseData => {
        const booksArray: IBook[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            booksArray.push({ ...responseData[key], id: key });
          }
        }
        return booksArray;
      })
    )
    .subscribe(books => {
      // ...
      this.loadedBooks = books;
    });
}
}
