import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as fromModal from './modal.reducer';
import { environment } from 'src/environments/environment';

export interface State {
    [fromModal.FeatureKey]: fromModal.State;
}

export const reducers: ActionReducerMap<State> = {
    [fromModal.FeatureKey]: fromModal.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
    ? []
    : [];
