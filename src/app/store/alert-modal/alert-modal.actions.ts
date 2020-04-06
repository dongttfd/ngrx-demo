import { createAction, props } from '@ngrx/store';
import { Alert } from 'src/app/shared/models';

export const openModal = createAction('[AlertModal] Open', props<Alert>());
export const closeModal = createAction('[AlertModal] Close');
