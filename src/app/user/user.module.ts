import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserComponent } from './user.component';
import { userFeatureKey, reducer } from './state/user.reducer';
import { UserEffects } from './state/user.effects';

@NgModule({
    declarations: [UserComponent],
    imports: [
        CommonModule,
        StoreModule.forFeature(userFeatureKey, reducer),
        EffectsModule.forFeature([UserEffects]),
    ]
})
export class UserModule { }
