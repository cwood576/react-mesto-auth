import React from "react"
import { Route, Redirect } from "react-router-dom"

function ProtectedRoute({ component: Component, ...props }) {
    return (
        <Route path={props.path}>
            {() =>
                props.loggedIn ? (
                    <Component {...props} />
                ) : props.isRedirected ? (
                    <Redirect to="/sign-in" />
                ) : (
                    ""
                )
            }
        </Route>
    )
}

export default ProtectedRoute
