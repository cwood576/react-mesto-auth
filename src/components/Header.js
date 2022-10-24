import React from "react"
import { NavLink } from "react-router-dom"

function Header(props) {
    const [hamburgerState, setHamburgerState] = React.useState(false)
    function hamburgerToggle() {
        setHamburgerState(!hamburgerState)
    }
    function deleteJWThandler() {
        props.setIsLogged(false)
        localStorage.removeItem("jwt")
    }
    return (
        <>
            {props.page === "loggedIn" ? (
                <div
                    className={`header__container ${
                        hamburgerState ? "header__container_active" : ""
                    }`}
                >
                    {" "}
                    <p className="header__email header__email_type_mobile">
                        {props.email}
                    </p>
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
                <NavLink className="logo" to="/"></NavLink>
                {props.page === "loggedIn" ? (
                    <>
                        <div className="header__wrapper">
                            <p className="header__email header__email_type_desk">
                                {props.email}
                            </p>
                            <NavLink
                                className="header__link header__link_hidden header__link_place_main-page"
                                to="/sign-in"
                                onClick={deleteJWThandler}
                            >
                                Выйти
                            </NavLink>
                        </div>
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
                ) : props.page === "signIn" ? (
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
