import { ADD_ITEMS, DELETE_ITEMS } from '../types/types';

export const addItems = (values) => ({
  type: ADD_ITEMS,
  payload: values,
});

export const deleteItems = (index) => ({
  type: DELETE_ITEMS,
  payload: index,
});
