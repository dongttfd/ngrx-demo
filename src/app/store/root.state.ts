import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { AlertModalStoreState, alertModalReducer } from './alert-modal';
import { ConfirmModalStoreState, confirmModalReducer } from './confirm-modal';

export interface StateMap {
    [AlertModalStoreState.modalFeatureKey]: AlertModalStoreState.AlertModalState;
    [ConfirmModalStoreState.modalFeatureKey]: ConfirmModalStoreState.ConfirmModalState;
}

export const rootReducersMap: ActionReducerMap<StateMap> = {
    [AlertModalStoreState.modalFeatureKey]: alertModalReducer,
    [ConfirmModalStoreState.modalFeatureKey]: confirmModalReducer
};

export const metaReducers: MetaReducer<StateMap>[] = !environment.production
    ? []
    : [];

