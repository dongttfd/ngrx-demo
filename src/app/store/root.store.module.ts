import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

import { rootReducersMap, metaReducers } from './root.state';
import { UserStoreModule } from './user';


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

        UserStoreModule,
    ]
})
export class RootStoreModule { }
