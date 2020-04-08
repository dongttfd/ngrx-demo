import { bookReducer } from './book.reducer';
import { initialState } from './book.state';

describe('Book Reducer', () => {
    describe('unknown action', () => {
        it('should return the previous state', () => {
            const action = {} as any;

            const result = bookReducer(initialState, action);

            expect(result).toBe(initialState);
        });
    });
});
