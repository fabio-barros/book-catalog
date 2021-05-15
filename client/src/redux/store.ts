import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import reducers from "./reducers/rootReducer";

const logger = createLogger();

const initialState = {
    bookList: {},
};

const middleware = [thunk];

const store = createStore(
    reducers,

    composeWithDevTools(applyMiddleware(...middleware, logger))
);

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
