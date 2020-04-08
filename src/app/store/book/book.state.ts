import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Book } from 'src/app/shared/models';

export const booksFeatureKey = 'books';

export interface BookState extends EntityState<Book> {
    // additional entities state properties
    selectBookId: number | null;
}

/*====================================================*/

export const selectBookId = (book: Book): number => {
    return book.id;
};

export const sortById = (a: Book, b: Book): number => {
    return b.id - a.id;
};

export const entityAdapter: EntityAdapter<Book> = createEntityAdapter<Book>({
    selectId: selectBookId,
    sortComparer: sortById,
});

export const initialState: BookState = entityAdapter.getInitialState({
    selectBookId: null
});
