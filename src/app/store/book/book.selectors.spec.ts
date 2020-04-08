import { selectBookState } from './book.selectors';
import { booksFeatureKey } from './book.state';

describe('Book Selectors', () => {
    it('should select the feature state', () => {
        const result = selectBookState({
            [booksFeatureKey]: {}
        });

        expect(result).toEqual({});
    });
});
