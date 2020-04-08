import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { environment } from 'src/environments/environment';

import { rootReducersMap, metaReducers } from './root.state';
import { UserStoreModule } from './user';
import { BookStoreModule } from './book';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forRoot(rootReducersMap, {
            metaReducers,
            runtimeChecks: {
                strictStateImmutability: true,
                strictActionImmutability: true,
                strictStateSerializability: true,
                strictActionSerializability: true,
            },
        }),
        EffectsModule.forRoot([]),
        !environment.production ? StoreDevtoolsModule.instrument() : [],

        StoreRouterConnectingModule.forRoot(),
        UserStoreModule,
        BookStoreModule
    ]
})
export class RootStoreModule { }
