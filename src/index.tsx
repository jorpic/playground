import { h, render } from "preact";
import { Provider } from "unistore/preact";
import "bulma/bulma.sass";

import App from "./App";
import { store } from "./Store";

const root = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(root, document.body);
