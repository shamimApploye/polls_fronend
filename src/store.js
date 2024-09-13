import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./utils/reducers";
import rootSaga from "./redux/sagas";

// const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer (),
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

export default store