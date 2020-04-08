import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Book } from 'src/app/shared/models';

export enum BookActionTypes {
    LoadBooks = '[Book] Load Books',
    LoadBooksSuccess = '[Book] Load Books Success',

    AddBook = '[Book] Add Book',
    AddBookSuccess = '[Book] Add Book Success',

    UpdateBook = '[Book] Update Book',
    UpdateBookSuccess = '[Book] Update Book Success',

    DeleteBook = '[Book] Delete Book',
    DeleteBookSuccess = '[Book] Delete Book Success',

    // UpdateBooks = '[Book] Update Books',
    // UpdateBooksSuccess = '[Book] Update Books Success',
    // AddBooks = '[Book] Add Books',
    // AddBooksSuccess = '[Book] Add Books Success',
    // DeleteBooks = '[Book] Delete Books',
    // DeleteBooksSuccess = '[Book] Delete Books Success',
    // UpsertBook = '[Book] Upsert Book',
    // UpsertBooks = '[Book] Upsert Books',
    // ClearBooks = '[Book] Clear Books'
}

export class LoadBooks implements Action {
    readonly type = BookActionTypes.LoadBooks;
}

export class LoadBooksSuccess implements Action {
    readonly type = BookActionTypes.LoadBooksSuccess;

    constructor(public payload: { books: Book[] }) { }
}

export class AddBook implements Action {
    readonly type = BookActionTypes.AddBook;

    constructor(public payload: { book: Book }) { }
}

export class AddBookSuccess implements Action {
    readonly type = BookActionTypes.AddBookSuccess;

    constructor(public payload: { book: Book }) { }
}

export class UpdateBook implements Action {
    readonly type = BookActionTypes.UpdateBook;

    constructor(public payload: { book: Update<Book> }) { }
}

export class UpdateBookSuccess implements Action {
    readonly type = BookActionTypes.UpdateBookSuccess;

    constructor(public payload: { book: Update<Book> }) { }
}

export class DeleteBook implements Action {
    readonly type = BookActionTypes.DeleteBook;

    constructor(public payload: { id: number }) { }
}

export class DeleteBookSuccess implements Action {
    readonly type = BookActionTypes.DeleteBookSuccess;

    constructor(public payload: { id: number }) { }
}

export type BookActions =
    LoadBooks
    | LoadBooksSuccess
    | AddBook
    | AddBookSuccess
    | UpdateBook
    | UpdateBookSuccess
    | DeleteBook
    | DeleteBookSuccess;

    // | AddBooks
    // | AddBooksSuccess
    // | UpdateBooks
    // | UpdateBooksSuccess
    // | DeleteBooks
    // | DeleteBooksSuccess
    // | UpsertBook
    // | UpsertBooks
    // | ClearBooks;
