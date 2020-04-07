import { Alert } from 'src/app/shared/models';

export const modalFeatureKey = 'confirm-modal';

export const CANCLE = 'CANCEL';
export const AGREE = 'AGREE';

export interface ConfirmModalState {
    isOpened: boolean;
    closeWith: string;
    alert: Alert;
}

export const initialState: ConfirmModalState = {
    isOpened: false,
    closeWith: '',
    alert: {
        title: '',
        content: '',
        textClose: '',
        textOk: '',
    }
};
