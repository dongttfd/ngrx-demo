import { createReducer, on, Action } from '@ngrx/store';
import { openConfirmModal, closeConfirmModal } from './confirm-modal.actions';
import { initialState, ConfirmModalState } from './confirm-modal.state';

const reducer = createReducer(
    initialState,

    on(openConfirmModal, (state, alert) => ({
        ...state,
        isOpened: true,
        closeWith: '',
        alert
    })),

    on(closeConfirmModal, (state, { closeWith }) => ({
        ...state,
        closeWith,
        isOpened: false,
    }))
);

export function confirmModalReducer(state: ConfirmModalState | undefined, action: Action) {
    return reducer(state, action);
}
