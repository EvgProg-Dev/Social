import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.jsx";
import { store } from "./redux/reduxStore.js";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

const root = createRoot(document.getElementById("root"));

root.render(
    <StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App  />
            </Provider>
        </BrowserRouter>
    </StrictMode>
);

// store.subscribe(() => {
//     rerenderEntireTree(store.getState());
// });
