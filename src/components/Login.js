import React from "react"
import { auth } from "../utils/Auth"
import InfoTooltip from "./InfoTooltip"
import { useHistory } from "react-router-dom"

function Login(props) {
    const history = useHistory()
    const [email, setEmail] = React.useState("")
    const [isPopupOpen, setIsPopupOpen] = React.useState(false)
    const [values, setValues] = React.useState({})

    function handleLogin(e) {
        e.preventDefault()
        auth.signIn({ email: values.email, password: values.password })
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
    const handleChange = (event) => {
        const { name, value } = event.target
        setValues((prev) => ({
            ...prev,
            [name]: value,
        }))
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
                        name="email"
                        placeholder="Email"
                        value={values.email || ""}
                        onChange={handleChange}
                    />
                    <input
                        className="sign-in__input"
                        type="password"
                        name="password"
                        placeholder="Пароль"
                        value={values.password || ""}
                        onChange={handleChange}
                    />
                    <button className="sign-in__button">Войти</button>
                </form>
            </div>
            <InfoTooltip
                isOpen={isPopupOpen}
                isSuccess={false}
                onClose={handleClosePopup}
            />
        </>
    )
}

export default Login
