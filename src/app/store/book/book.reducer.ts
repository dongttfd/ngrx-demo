import { initialState, entityAdapter, BookState } from './book.state';
import { BookActions, BookActionTypes } from './book.actions';

export function bookReducer(
    state = initialState,
    action: BookActions
): BookState {
    switch (action.type) {
        case BookActionTypes.LoadBooksSuccess: {
            return entityAdapter.setAll(action.payload.books, state);
        }

        case BookActionTypes.AddBookSuccess: {
            return entityAdapter.addOne(action.payload.book, state);
        }

        case BookActionTypes.UpdateBookSuccess: {
            return entityAdapter.updateOne(action.payload.book, state);
        }

        case BookActionTypes.DeleteBookSuccess: {
            return entityAdapter.removeOne(action.payload.id, state);
        }

        // case BookActionTypes.UpsertBook: {
        //     return entityAdapter.upsertOne(action.payload.book, state);
        // }

        // case BookActionTypes.AddBooks: {
        //     return entityAdapter.addMany(action.payload.books, state);
        // }

        // case BookActionTypes.UpsertBooks: {
        //     return entityAdapter.
        //     upsertMany(action.payload.books, state);
        // }

        // case BookActionTypes.UpdateBooks: {
        //     return entityAdapter.updateMany(action.payload.books, state);
        // }

        // case BookActionTypes.DeleteBooks: {
        //     return entityAdapter.removeMany(action.payload.ids, state);
        // }

        // case BookActionTypes.ClearBooks: {
        //     return entityAdapter.removeAll(state);
        // }

        default: {
            return state;
        }
    }
}
