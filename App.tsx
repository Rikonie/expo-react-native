import * as React from 'react';
import {Provider} from "react-redux";
import {configureRoot} from "./root/configure-root";
import {Start} from "./pages/start";

const {store} = configureRoot();

export default function App() {

    return (

        <Provider store={store}>
            <Start/>
        </Provider>
    );
}




