import React from "react"
import InfoTooltip from "./InfoTooltip"
import { auth } from "../utils/Auth"
import { useHistory } from "react-router-dom"

function Register() {
    const history = useHistory()
    const [isPopupOpen, setIsPopupOpen] = React.useState(false)
    const [successSignUp, setSeccessSignUp] = React.useState(false)
    const [values, setValues] = React.useState({})

    const handleChange = (event) => {
        const { name, value } = event.target
        setValues((prev) => ({
            ...prev,
            [name]: value,
        }))
    }
    function handleRegister(e) {
        e.preventDefault()
        auth.signUp({ email: values.email, password: values.password })
            .then((res) => {
                setSeccessSignUp(true)
                return res
            })
            .catch((err) => {
                console.log(err)
                setSeccessSignUp(false)
            })
            .finally(() => {
                setIsPopupOpen(true)
            })
    }
    function handleClosePopup() {
        setIsPopupOpen(false)
    }

    return (
        <>
            <div className="sign-in">
                <h1 className="sign-in__title">Регистрация</h1>
                <form onSubmit={handleRegister} className="sign-in__form">
                    <input
                        className="sign-in__input"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={values.email}
                        onChange={handleChange}
                    />
                    <input
                        className="sign-in__input"
                        type="password"
                        name="password"
                        placeholder="Пароль"
                        value={values.password}
                        onChange={handleChange}
                    />
                    <button className="sign-in__button">
                        Зарегистрироваться
                    </button>
                </form>
                <a
                    onClick={() => {
                        history.push("/sign-in")
                    }}
                    className="sign-in__link"
                >
                    Уже зарегистрированы? Войти
                </a>
            </div>
            <InfoTooltip
                isOpen={isPopupOpen}
                isSuccess={successSignUp}
                onClose={handleClosePopup}
            />
        </>
    )
}

export default Register
