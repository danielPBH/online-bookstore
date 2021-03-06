import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../common/book';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  //private baseUrl = "http://localhost:8080/api/v1/books?size=100";
  private baseUrl = "http://localhost:8080/api/v1/books";

  constructor(private httpClient: HttpClient) { }

  //getBooks(theCategoryId: number): Observable<Book[]>{
    getBooks(): Observable<Book[]>{
    //const searchUrl = `${this.baseUrl}/search/categoryid?id=${theCategoryId}`;
    //return this.getBooksList(searchUrl);
    return this.httpClient.get<GetResponseBooks>(this.baseUrl).pipe(
      map(response => response._embedded.books)
    )
  }
}

interface GetResponseBooks{
  _embedded: {
    books: Book[];
  }
  // ,
  // page: {
  //   //cureent page
  //   size: number,
  //   //total number of records in database
  //   totalElements: number,
  //   //total number of pages, starts from 0 index
  //   totalPages: number,
  //   //current page
  //   number: number
  // }
}
