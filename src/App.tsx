import * as React from "react";
import {Footer} from "./components/footer";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import { GlobalStyle } from './styles/GlobalStyles'
export const App = () => (
    <BrowserRouter>
        <GlobalStyle />
        <Switch>
            <Route path="/">
                <Footer/>
            </Route>
            <Route path="/home">
                <Footer/>
            </Route>
        </Switch>
    </BrowserRouter>
);
