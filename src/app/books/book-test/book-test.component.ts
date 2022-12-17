import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { IBook } from 'src/app/shared/interfaces/book';
import { BookService } from 'src/app/shared/services/book.service';

@Component({
  selector: 'app-book-test',
  templateUrl: './book-test.component.html',
  styleUrls: ['./book-test.component.css']
})
export class BookTestComponent implements OnInit {

  // loadedBooks = this.bookService.loadedBooks;

  constructor(private http: HttpClient, private bookService: BookService) {}

   loadedBooks = this.bookService.loadedBooks;
  ngOnInit() {
    this.bookService.fetchBooks();
    
  }

  // onCreateBook(postData: IBook) {
  //   // Send Http request
  //   this.http.post<{ name: string }>('https://book-library-fb8bd-default-rtdb.firebaseio.com/Books.json', postData)
  //   .subscribe(responseData => {
  //     console.log(responseData);
  //   })
  // }

  // onFetchBooks() {
  //   // Send Http request
  //   this.fetchBooks();
  // }

  // onClearBooks() {
  //   // Send Http request
  // }

  // private fetchBooks() {
  //   this.http.get<{ [key: string]: IBook}>('https://book-library-fb8bd-default-rtdb.firebaseio.com/Books.json')
  //   .pipe(map(responseData => {
  //     const booksArray: IBook[] = [];
  //     for(const key in responseData) {
  //       if(responseData.hasOwnProperty(key)) {
  //         booksArray.push({... responseData[key], id: key })
  //       }
  //     }
  //     return booksArray;
  //   }))
  //   .subscribe(books => {
  //     this.loadedBooks = books;
  //   })
  // }
}
