import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BookStoreActions, BookStoreSelectors } from 'src/app/store';
import { Book } from 'src/app/shared/models';
import { loremRandomWords } from 'src/app/core/helper';

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

    books$: Observable<Book[]>;

    constructor(
        private store: Store<BookStoreActions.BookActions>
    ) {
        this.books$ = this.store.select(BookStoreSelectors.selectAllBooks);
    }

    ngOnInit(): void {
        this.store.dispatch(new BookStoreActions.LoadBooks());
    }

    generateBook() {
        this.store.dispatch(new BookStoreActions.AddBook({ book: { id: null, name: loremRandomWords() } }));
    }

    toDelete(id: number) {
        this.store.dispatch(new BookStoreActions.DeleteBook({ id }));
    }
}
