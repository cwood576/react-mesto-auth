import React from "react"
import InfoTooltip from "./InfoTooltip"

function Login() {
    function handleLogin(e) {
        e.preventDefault()
    }
    return (
        <>
            <div className="sign-in">
                <h1 className="sign-in__title">Вход</h1>
                <form onSubmit={handleLogin} className="sign-in__form">
                    <input
                        className="sign-in__input"
                        type="email"
                        placeholder="Email"
                    />
                    <input
                        className="sign-in__input"
                        type="password"
                        placeholder="Пароль"
                    />
                    <button className="sign-in__button">Войти</button>
                </form>
            </div>
        </>
    )
}

export default Login
