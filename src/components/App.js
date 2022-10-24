import React from "react"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import MainPage from "./MainPage"
import Register from "./Register"
import Login from "./Login"
import Header from "./Header"
import ProtectedRoute from "./ProtectedRoute"
import { auth } from "../utils/Auth"
function App() {
    const [email, setEmail] = React.useState("")

    const [isLogged, setIsLogged] = React.useState(false)
    const [isRedirected, setIsRedirected] = React.useState(false)

    React.useEffect(() => {
        if (localStorage.getItem("jwt")) {
            auth.logIn(localStorage.getItem("jwt"))
                .then((res) => {
                    setIsLogged(true)
                })
                .catch((err) => {
                    console.log(err)
                })
        } else {
            setIsRedirected(true)
        }
    }, [])

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/sign-up">
                    <Header page="signUp" />
                    <Register />
                </Route>
                <Route path="/sign-in">
                    <Header page="signIn" />
                    <Login setIsLogged={setIsLogged} />
                </Route>
                <ProtectedRoute
                    component={MainPage}
                    setIsLogged={setIsLogged}
                    email={email}
                    page="loggedIn"
                    setEmail={setEmail}
                    loggedIn={isLogged}
                    isRedirected={isRedirected}
                    path="/"
                />
            </Switch>
        </BrowserRouter>
    )
}

export default App
