import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { AlertModalStoreState, alertModalReducer } from './alert-modal';

export interface StateMap {
    [AlertModalStoreState.modalFeatureKey]: AlertModalStoreState.AlertModalState;
}

export const rootReducersMap: ActionReducerMap<StateMap> = {
    [AlertModalStoreState.modalFeatureKey]: alertModalReducer
};

export const metaReducers: MetaReducer<StateMap>[] = !environment.production
    ? []
    : [];

