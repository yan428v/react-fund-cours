import React from 'react';
import './styles/App.css'
import {BrowserRouter, Route} from "react-router-dom";
import About from "./pages/About";

function App() {
    return (
        <BrowserRouter>
            <Route path={"/about"}>
                <About/>
            </Route>
            <Route path={"/posts"}>
                <Posts/>
            </Route>
        </BrowserRouter>
    )
}

export default App;