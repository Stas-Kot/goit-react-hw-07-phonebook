import { createReducer } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from 'redux/phonebook-operations';

export const entities = createReducer([], {
  [fetchContacts.fulfilled]: (state, { payload }) => [...state, ...payload],
  [addContact.fulfilled]: (state, { payload }) =>
    state.find(({ name }) => name === payload.name)
      ? (alert(`${payload.name} is already in contacts`), [...state])
      : [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

export const loading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
});

export const error = createReducer(null, {
  [fetchContacts.rejected]: (_, { payload }) => payload,
  [fetchContacts.pending]: () => null,
});
