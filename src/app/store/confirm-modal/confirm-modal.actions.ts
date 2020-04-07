import { createAction, props } from '@ngrx/store';
import { Alert } from 'src/app/shared/models';

export const openConfirmModal = createAction('[Confirm] Open', props<Alert>());

export const closeConfirmModal = createAction('[Confirm] Close', props<{ closeWith: string }>());
