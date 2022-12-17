import { Component, OnInit } from '@angular/core';
import { IBook } from '../../interfaces/book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {

  // books: IBook[] = [
  //   {
  //     title: 'Pride and Prejudice',
  //     author: 'Jane Austen',
  //     genre: 'Classic',
  //     description: 'Pride and Prejudice is an 1813 novel of manners by Jane Austen. The novel follows the character development of Elizabeth Bennet, the dynamic protagonist of the book who learns about the repercussions of hasty judgments and comes to appreciate the difference between superficial goodness and actual goodness',
  //     image: 'https://almabooks.com/wp-content/uploads/2016/10/9781847493699.jpg'
  //   },
  //   {
  //     title: 'The Great Gatsby',
  //     author: 'F. Scott Fitzgerald',
  //     genre: 'Classic',
  //     description: 'The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraways interactions with mysterious millionaire Jay Gatsby and Gatsbys obsession to reunite with his former lover, Daisy Buchanan.',
  //     image: 'https://149352626.v2.pressablecdn.com/wp-content/uploads/2018/02/CK-3-684x1024.jpg'
  //   },
  // ]
    
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
