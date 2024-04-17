import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';

export interface AppState {
  
};

export const reducers: ActionReducerMap<AppState> = {
  
};


export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];

