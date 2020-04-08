import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { bookReducer } from './book.reducer';
import { booksFeatureKey } from './book.state';
import { BookEffects } from './book.effects';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forFeature(booksFeatureKey, bookReducer),
        EffectsModule.forFeature([BookEffects]),

    ]
})
export class BookStoreModule { }
