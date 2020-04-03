import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as fromModal from './modal.reducer';
import { environment } from 'src/environments/environment';

export interface StateMap {
    [fromModal.FeatureKey]: fromModal.ModalState;
}

export const reducers: ActionReducerMap<StateMap> = {
    [fromModal.FeatureKey]: fromModal.reducer,
};

export const metaReducers: MetaReducer<StateMap>[] = !environment.production
    ? []
    : [];
