import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { IBook } from '../../interfaces/book';
 
@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {
  loadedBooks: IBook[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // this.fetchBooks();
  }


  onSubmit(form: NgForm) {
    
    console.log(form.value)
  }


  onFetchBooks() {
    this.fetchBooks();
  }

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
