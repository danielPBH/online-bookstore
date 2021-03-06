import { Component, OnInit } from '@angular/core';
import { Book } from '../../common/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  //templateUrl: './book-list.component.html',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[] = [];

  constructor(private _bookService: BookService) { }

  ngOnInit(): void {
    this.listBooks();
  }

  listBooks(){
    // this.searchMode = this._activatedRoute.snapshot.paramMap.has('keyword');

    // if(this.searchMode){
    //   //do search work
    //   this.handleSearchBooks();
    // }else {
    //   //display books based on category
    //   this.handleListBooks();
    // }

    this._bookService.getBooks().subscribe(
      data => this.books = data
    )
  }

}
