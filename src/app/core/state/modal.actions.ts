import { Action } from '@ngrx/store';
import { AlertModel } from '../model/alert.model';

export const enum ModalActionTypes {
    OpenModal = 'Open Modal',
    CloseModal = 'Close Modal'
}

export class OpenModal implements Action {
    readonly type = ModalActionTypes.OpenModal;

    alertModal: AlertModel;
    constructor(alertModal: AlertModel = null) {
        if (alertModal) {
            this.alertModal = alertModal;
        }
    }
}

export class CloseModal implements Action {
    readonly type = ModalActionTypes.CloseModal;
}

export type ModalActions = OpenModal | CloseModal;
