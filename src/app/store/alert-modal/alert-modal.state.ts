import { Alert } from 'src/app/shared/models';

export const modalFeatureKey = 'modal';

export interface AlertModalState {
    isOpened: boolean;
    alertModel: Alert;
}

export const initialState: AlertModalState = {
    isOpened: false,
    alertModel: {
        title: '',
        content: ''
    }
};
