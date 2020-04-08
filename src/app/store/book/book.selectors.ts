import { createFeatureSelector, createSelector } from '@ngrx/store';
import { booksFeatureKey, BookState, entityAdapter } from './book.state';

const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = entityAdapter.getSelectors();

export const getSelectedBookId = (state: BookState) => state.selectBookId;

export const selectBookState = createFeatureSelector<BookState>(
    booksFeatureKey
);

export const selectBookIds = createSelector(
    selectBookState,
    selectIds
);

export const selectBookEntities = createSelector(
    selectBookState,
    selectEntities
);

export const selectAllBooks = createSelector(
    selectBookState,
    selectAll
);

export const selectBookTotal = createSelector(
    selectBookState,
    selectTotal
);

export const selectCurrentBookId = createSelector(
    selectBookState,
    getSelectedBookId
);

export const selectCurrentBook = createSelector(
    selectBookEntities,
    selectCurrentBookId,
    (bookEntities, bookId) => bookEntities[bookId]
);
