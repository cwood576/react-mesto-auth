import React from "react"
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom"

import MainPage from "./MainPage"
import Register from "./Register"
import Login from "./Login"
import Header from "./Header"
import InfoTooltip from "./InfoTooltip"

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/sign-up">
                    <Header page="signUp" />
                    <Register />
                </Route>
                <Route path="/sign-in">
                    <Header page="signIn" />
                    <Login />
                </Route>
                <Route path="/">
                    <Header page="loggedIn" />
                    <MainPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App
