import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css',
})
export class BookComponent implements OnInit {
  books: Book[] = [];
  bookTitle: string = '';
  bookAuthor: string;

  ngOnInit(): void {
    let savedBooks = localStorage.getItem('books');
    this.books = savedBooks ? JSON.parse(savedBooks) : [];
  }

  addBook() {
    if (this.bookAuthor.trim && this.bookTitle.trim) {
      let b: Book = {
        id: Date.now(),
        title: this.bookTitle,
        author: this.bookAuthor,
      };
      this.books.push(b);
      localStorage.setItem('books', JSON.stringify(this.books));
    }
  }

  deleteBook(index: number) {
    this.books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(this.books));
  }
}
