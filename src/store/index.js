import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import todoSaga from "./saga";
import reducer from "./reducer";

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(todoSaga);

export default store;
