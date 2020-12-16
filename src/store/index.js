import { createStore, applyMiddleware, compose } from "redux";
import createSageMiddleware from "redux-saga";
import reducers from "../reducers";
import rootSaga from "../sagas";

const sagaMiddleware = createSageMiddleware();

const store = createStore(
  reducers,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleware.run(rootSaga);

export default store;
