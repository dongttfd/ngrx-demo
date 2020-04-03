import { createAction, props } from '@ngrx/store';
import { AlertModel } from 'src/app/shared/models/alert.model';
export const openModal = createAction('[Modal] Open', props<AlertModel>());
export const closeModal = createAction('[Modal] Close');
