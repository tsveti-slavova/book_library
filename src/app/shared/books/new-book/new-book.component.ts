import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { IBook } from '../../interfaces/book';
import { BookService } from '../../services/book.service';
 
@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {
  loadedBooks: IBook[] = [];

  constructor(private http: HttpClient, private bookService: BookService) { }

  ngOnInit(): void {
    // this.fetchBooks();
  }


  // onSubmit(form: NgForm) {
    
  //   console.log(form.value)
  // }


  onCreateBook = this.bookService.onCreateBook;
  
  }

  


