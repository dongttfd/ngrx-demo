import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Book } from 'src/app/shared/models';

@Injectable({
    providedIn: 'root'
})
export class BookService {

    // Our created Data can be accessed here at api/users
    apiurl = 'http://localhost/api/books';
    headers = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json');

    httpOptions = {
        headers: this.headers
    };

    constructor(private httpClient: HttpClient) { }

    getBooks(): Observable<Book[]> {
        return this.httpClient.get<Book[]>(this.apiurl).pipe(
            catchError(this.handleError)
        );
    }

    createBook(book: Book): Observable<Book> {
        return this.httpClient.post<Book>(this.apiurl, book);
    }

    deleteBook(id: number): Observable<any> {
        return this.httpClient.delete<any>(`${this.apiurl}/${id}`).pipe(
            catchError(this.handleError)
        );
    }

    private handleError(error: any) {
        console.error(error);
        return throwError(error);
    }
}
