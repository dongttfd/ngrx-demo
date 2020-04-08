import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import { BookActions, BookActionTypes, LoadBooksSuccess, DeleteBookSuccess, AddBookSuccess } from './book.actions';
import { BookService } from 'src/app/shared/services';

@Injectable()
export class BookEffects {

    constructor(
        private actions$: Actions<BookActions>,
        private bookService: BookService
    ) { }

    loadBooks$ = createEffect(() => this.actions$.pipe(
        ofType(BookActionTypes.LoadBooks),
        mergeMap(() => this.bookService.getBooks().pipe(
            map(response => new LoadBooksSuccess({ books: response }))
        ))
    ));

    addBook$ = createEffect(() => this.actions$.pipe(
        ofType(BookActionTypes.AddBook),
        mergeMap((action) => this.bookService.createBook(action.payload.book).pipe(
            map((response) => new AddBookSuccess({ book: response }))
        ))
    ));

    deleteBook$ = createEffect(() => this.actions$.pipe(
        ofType(BookActionTypes.DeleteBook),
        mergeMap((action) => this.bookService.deleteBook(action.payload.id).pipe(
            map((response) => new DeleteBookSuccess({ id: action.payload.id }))
        ))
    ));
}
