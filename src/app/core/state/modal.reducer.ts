import { createReducer, on, Action } from '@ngrx/store';
import { openModal, closeModal } from './modal.actions';
import { AlertModel } from 'src/app/shared/models/alert.model';

export const FeatureKey = 'modal';

export interface ModalState {
    isOpened: boolean;
    alertModel: AlertModel;
}

const initialState: ModalState = {
    isOpened: false,
    alertModel: {
        title: '',
        content: ''
    }
};

const modalReducer = createReducer(
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

export function reducer(state: ModalState | undefined, action: Action) {
    return modalReducer(state, action);
}
