import { Alert } from 'src/app/shared/models';

export const modalFeatureKey = 'alert-modal';

export interface AlertModalState {
    isOpened: boolean;
    alert: Alert;
}

export const initialState: AlertModalState = {
    isOpened: false,
    alert: {
        title: '',
        content: ''
    }
};
