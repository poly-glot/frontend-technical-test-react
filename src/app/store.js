import {
  createSlice,
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";

const defaultSlice = createSlice({
  name: "default",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

const staticReducers = {
  default: defaultSlice.reducer,
};

const middleware = [...getDefaultMiddleware()];

export function createStore(initialState = {}, defaultAsyncReduces = {}) {
  const reducer = combineReducers({
    ...staticReducers,
    ...defaultAsyncReduces,
  });

  const store = configureStore({
    devTools: process.env.NODE_ENV !== "production",
    reducer,
    initialState,
    middleware,
  });

  // Create an inject reducer function
  // This function adds the async reducer, and creates a new combined reducer
  store.injectReducer = (key, asyncReducer) => {
    reducer[key] = asyncReducer;
    store.replaceReducer(combineReducers(reducer));
  };

  // Return the modified store
  return store;
}

export default createStore();
