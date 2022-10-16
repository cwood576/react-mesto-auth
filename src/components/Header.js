import React from "react"
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom"

function Header(props) {
    const [hamburgerState, setHamburgerState] = React.useState(false)
    function hamburgerToggle() {
        setHamburgerState(!hamburgerState)
    }
    return (
        <>
            {props.page == "loggedIn" ? (
                <div
                    className={`header__container ${
                        hamburgerState ? "header__container_active" : ""
                    }`}
                >
                    {" "}
                    <p>email@mail.com</p>
                    <NavLink
                        className="header__link header__link_place_main-page"
                        to="/sign-in"
                    >
                        Выйти
                    </NavLink>
                </div>
            ) : (
                ""
            )}
            <header className="header">
                <div className="logo" />
                {props.page == "loggedIn" ? (
                    <>
                        <NavLink
                            className="header__link header__link_hidden header__link_place_main-page"
                            to="/sign-in"
                        >
                            Выйти
                        </NavLink>
                        <div
                            onClick={hamburgerToggle}
                            className="header__hamburger"
                        >
                            <div
                                className={`header__line ${
                                    hamburgerState ? "header__line_active" : ""
                                }`}
                            />
                            <div
                                className={`header__line ${
                                    hamburgerState ? "header__line_active" : ""
                                }`}
                            />
                            <div
                                className={`header__line ${
                                    hamburgerState ? "header__line_active" : ""
                                }`}
                            />
                        </div>
                    </>
                ) : props.page == "signIn" ? (
                    <NavLink className="header__link" to="/sign-up">
                        Регистрация
                    </NavLink>
                ) : (
                    <NavLink className="header__link" to="/sign-in">
                        Войти
                    </NavLink>
                )}
            </header>
        </>
    )
}

export default Header
