import { applyMiddleware, createStore,compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./utils/reducers";
import rootSaga from "./utils/sagas";

// const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer(),
  compose(
    applyMiddleware(sagaMiddleware)
  ),
)
sagaMiddleware.run(rootSaga)

export default store