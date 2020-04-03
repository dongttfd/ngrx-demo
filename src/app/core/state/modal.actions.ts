import { createAction, props } from '@ngrx/store';
import { AlertModel } from '../model/alert.model';
export const openModal = createAction('[Modal] Open', props<AlertModel>());
export const closeModal = createAction('[Modal] Close');
