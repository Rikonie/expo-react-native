import * as React from 'react';
import {Provider} from "react-redux";
import {configureRoot} from "./root/configure-root";
import {Main} from "./pages/Main";

const {store} = configureRoot();

export default function App() {

    return (

        <Provider store={store}>
            <Main/>
        </Provider>
    );
}




