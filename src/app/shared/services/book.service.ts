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
  isFetching = false;

 
  constructor(private http: HttpClient) { }

  onCreateBook(postData: IBook) {
    // Send Http request
    this.http.post<{ name: string }>('https://book-library-fb8bd-default-rtdb.firebaseio.com/Books.json', postData)
    .subscribe(responseData => {
      console.log(responseData);
    })
  }

  onFetchBooks() {
    // Send Http request
    this.fetchBooks();
  }

  

  fetchBooks() {
    this.http.get<{ [key: string]: IBook}>('https://book-library-fb8bd-default-rtdb.firebaseio.com/Books.json')
    .pipe(map(responseData => {
      const booksArray: IBook[] = [];
      for(const key in responseData) {
        if(responseData.hasOwnProperty(key)) {
          booksArray.push({... responseData[key], id: key })
        }
      }
      return booksArray;
    }))
    .subscribe(books => {
      this.isFetching = false;
      this.loadedBooks = books;
    })
  }



}
