// import { createSlice } from '@reduxjs/toolkit';

// import {
//   fetchContacts,
//   addContact,
//   deleteContact,
// } from 'redux/phonebook-operations';

// const itemsSlice = createSlice({
//   name: 'items',
//   initialState: { entities: [], loading: false, error: null },
//   extraReducers: {
//     [fetchContacts.fulfilled]: (state, { payload }) => ({
//       ...state,
//       entities: [...state.entities, ...payload],
//     }),
//     [fetchContacts.pending]: (state, _) => ({
//       ...state,
//       loading: true,
//       error: null,
//     }),
//     [fetchContacts.rejected]: (state, { payload }) => ({
//       ...state,
//       error: payload,
//       loading: false,
//     }),
//     [addContact.fulfilled]: (state, { payload }) => ({
//       ...state,
//       entities: [...state.entities, payload],
//     }),
//     [addContact.pending]: (state, _) => ({
//       ...state,
//       loading: true,
//       error: null,
//     }),
//     [addContact.rejected]: (state, { payload }) => ({
//       ...state,
//       error: payload,
//       loading: false,
//     }),
//     [deleteContact.fulfilled]: (state, { payload }) => {
//       state.entities = state.entities.filter(({ id }) => id !== payload);
//     },
//     [deleteContact.pending]: (state, _) => ({
//       ...state,
//       loading: true,
//       error: null,
//     }),
//     [deleteContact.rejected]: (state, { payload }) => ({
//       ...state,
//       error: payload,
//       loading: false,
//     }),
//   },
// });

// export default itemsSlice.reducer;
