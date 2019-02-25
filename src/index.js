import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";

const store = createStore(reducer);
// const { dispatch, subscribe } = store;

// const bindActionCreators = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args));
// };

// const incDispatch = bindActionCreators(inc, dispatch);
// const decDispatch = bindActionCreators(dec, dispatch);
// const rndDispatch = bindActionCreators(rnd, dispatch);

// const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// update();
// subscribe(update);
