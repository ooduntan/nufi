import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "./Store/configureStore";
import { AppRouting } from "./AppRouting";

// All providers should be warped to the app here
const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <AppRouting />
    </Router>
  </Provider>
);

export default App;
