import React from "react"
import { CurrentUserContext } from "../contexts/CurrentUserContext"
import PopupWithForm from "./PopupWithForm"

function EditProfilePopup(props) {
    const currentUser = React.useContext(CurrentUserContext)
    React.useEffect(() => {
        setValues(currentUser)
    }, [currentUser, props.isOpen])

    const [values, setValues] = React.useState({})

    const handleChange = (event) => {
        const { name, value } = event.target
        setValues((prev) => ({
            ...prev,
            [name]: value,
        }))
    }
    function handleSubmit(e) {
        e.preventDefault()
        props.onUpdateUser({ name: values.name, description: values.about })
    }

    return (
        <PopupWithForm
            name="profile"
            title="Редактировать профиль"
            buttonText="Сохранить"
            handleSubmit={handleSubmit}
            isOpen={props.isOpen}
            onClose={props.onClose}
        >
            <input
                type="text"
                name="name"
                required
                minLength="2"
                value={values.name || ""}
                maxLength="30"
                className="popup__field popup__field_type_name"
                onChange={handleChange}
                placeholder="Имя"
            />
            <span className="popup__error popup__error_name_name" />
            <input
                type="text"
                name="about"
                required
                minLength="2"
                value={values.about || ""}
                maxLength="200"
                className="popup__field popup__field_type_status"
                onChange={handleChange}
                placeholder="О себе"
            />
            <span className="popup__error popup__error_name_info" />
        </PopupWithForm>
    )
}

export default EditProfilePopup
