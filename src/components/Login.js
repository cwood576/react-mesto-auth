import React from "react"
import { auth } from "../utils/Auth"
import InfoTooltip from "./InfoTooltip"
import { useHistory } from "react-router-dom"

function Login(props) {
    const history = useHistory()
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [isPopupOpen, setIsPopupOpen] = React.useState(false)
    function handleLogin(e) {
        e.preventDefault()
        auth.signIn({ email: email, password: password })
            .then((res) => {
                localStorage.setItem("jwt", res.token)
                props.setIsLogged(true)
                history.push("/")
                setEmail(email)
            })
            .catch((err) => {
                setIsPopupOpen(true)
                console.log(err)
            })
    }
    function handleChange(e) {
        if (e.target.type === "email") {
            setEmail(e.target.value)
        } else if (e.target.type === "password") {
            setPassword(e.target.value)
        }
    }
    function handleClosePopup() {
        setIsPopupOpen(false)
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
                        value={email}
                        onChange={handleChange}
                    />
                    <input
                        className="sign-in__input"
                        type="password"
                        placeholder="Пароль"
                        value={password}
                        onChange={handleChange}
                    />
                    <button className="sign-in__button">Войти</button>
                </form>
            </div>
            <InfoTooltip isOpen={isPopupOpen} onClose={handleClosePopup}>
                <>
                    <svg
                        width="120"
                        height="120"
                        viewBox="0 0 120 120"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="popup__icon"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M60 117C91.4802 117 117 91.4802 117 60C117 28.5198 91.4802 3 60 3C28.5198 3 3 28.5198 3 60C3 91.4802 28.5198 117 60 117ZM60 120C93.1371 120 120 93.1371 120 60C120 26.8629 93.1371 0 60 0C26.8629 0 0 26.8629 0 60C0 93.1371 26.8629 120 60 120ZM55.0503 60.707L36.6655 42.3223L42.3224 36.6654L60.7071 55.0502L78.3848 37.3726L84.0416 43.0294L66.364 60.707L83.3346 77.6776L77.6777 83.3345L60.7071 66.3639L43.0294 84.0416L37.3726 78.3848L55.0503 60.707Z"
                            fill="#FD0707"
                        />
                    </svg>
                    <p className="popup__text popup__text_type_sign-up">
                        Что-то пошло не так! Попробуйте ещё раз.
                    </p>
                </>
            </InfoTooltip>
        </>
    )
}

export default Login
