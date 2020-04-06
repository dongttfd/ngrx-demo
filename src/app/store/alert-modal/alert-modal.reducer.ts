import { createReducer, on, Action } from '@ngrx/store';
import { openModal, closeModal } from './alert-modal.actions';
import { initialState, AlertModalState } from './alert-modal.state';

const reducer = createReducer(
    initialState,
    on(openModal, (state, alertModel) => ({
        ...state,
        isOpened: true,
        alertModel
    })),
    on(closeModal, (state) => ({
        ...state,
        isOpened: false,
    })),
);

export function alertModalReducer(state: AlertModalState | undefined, action: Action) {
    return reducer(state, action);
}
