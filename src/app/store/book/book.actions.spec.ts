import * as BookActions from './book.actions';

describe('Book', () => {
    it('should create an instance', () => {
        expect(new BookActions.LoadBooks()).toBeTruthy();
        expect(new BookActions.LoadBooksSuccess({books: []})).toBeTruthy();
        expect(new BookActions.LoadBooks()).toBeTruthy();
        expect(new BookActions.LoadBooks()).toBeTruthy();
        expect(new BookActions.LoadBooks()).toBeTruthy();
    });
});
