import { ModalActions, ModalActionTypes } from './modal.actions';
import { AlertModel } from '../model/alert.model';

export const FeatureKey = 'modal';

export interface State {
    isOpened: boolean;
    alertModel: AlertModel;
}

const initialState: State = {
    isOpened: false,
    alertModel: {
        title: '',
        content: ''
    }
};

export const reducer = (
    state: State = initialState,
    action: ModalActions
): State => {
    switch (action.type) {
        case ModalActionTypes.OpenModal:
            return {
                ...state,
                isOpened: true,
                alertModel: action.alertModal
            };

        case ModalActionTypes.CloseModal:
            return {
                ...state,
                isOpened: false
            };

        default:
            return state;
    }
};
