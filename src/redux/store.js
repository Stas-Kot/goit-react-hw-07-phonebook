import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';

import contactsReducer from './phonebook-reducer/contacts-reducer';

// import items from 'redux/slices/items';
// import filter from 'redux/slices/filter';

// const contactsReducer = {
//   items,
//   filter,
// };

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV === 'development',
});

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(logger, thunk)),
// );

// eslint-disable-next-line import/no-anonymous-default-export
export default store;
