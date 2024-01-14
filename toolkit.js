import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const addToCart = createAction("ADD_TO_CART");
const login = createAction("LOGIN");

const loginReducer = createReducer({ status: false }, (builder) => {
  builder.addCase(login, (state, action) => {
    state.status = true;
  });
});

const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
  });
});

const store = configureStore({
  reducer: {
    login: loginReducer,
    cart: cartReducer,
  },
});
console.log("initial state", store.getState());

store.subscribe(() => {
  console.log("store changed :", store.getState());
});

store.dispatch(addToCart({ id: 1, qty: 1 }));
store.dispatch(addToCart({ id: 2, qty: 10 }));
store.dispatch(login());
