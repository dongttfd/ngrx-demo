import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { AlertModalStoreState, alertModalReducer } from './alert-modal';
import { ConfirmModalStoreState, confirmModalReducer } from './confirm-modal';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

export interface StateMap {
    router: RouterReducerState;

    [AlertModalStoreState.modalFeatureKey]: AlertModalStoreState.AlertModalState;
    [ConfirmModalStoreState.modalFeatureKey]: ConfirmModalStoreState.ConfirmModalState;
}

export const rootReducersMap: ActionReducerMap<StateMap> = {
    router: routerReducer,

    [AlertModalStoreState.modalFeatureKey]: alertModalReducer,
    [ConfirmModalStoreState.modalFeatureKey]: confirmModalReducer
};

export const metaReducers: MetaReducer<StateMap>[] = !environment.production
    ? []
    : [];

