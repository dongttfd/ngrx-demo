import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, Subject } from 'rxjs';

import { BookEffects } from './book.effects';

describe('BookEffects', () => {
    const actions$: Observable<any> = new Subject();
    let effects: BookEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                BookEffects,
                provideMockActions(() => actions$)
            ]
        });

        effects = TestBed.inject<BookEffects>(BookEffects);
    });

    it('should be created', () => {
        expect(effects).toBeTruthy();
    });
});
