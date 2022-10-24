import React from "react"
import checkmark from "../images/checkmark.svg"
import cross from "../images/cross.svg"

function InfoTooltip(props) {
    return (
        <div className={`popup ${props.isOpen ? "popup_opened" : ""}`}>
            <div className="popup__container popup__container_type_info">
                <button
                    type="button"
                    onClick={props.onClose}
                    className={`popup__close`}
                />
                {props.isSuccess ? (
                    <>
                        <img
                            src={checkmark}
                            className="popup__icon"
                            width="120"
                            height="120"
                            alt="Успешно"
                        />
                        <p className="popup__text popup__text_type_sign-up">
                            Вы успешно зарегистрировались!
                        </p>
                    </>
                ) : (
                    <>
                        <img
                            src={cross}
                            className="popup__icon"
                            width="120"
                            height="120"
                            alt="Что-то пошло не так"
                        />
                        <p className="popup__text popup__text_type_sign-up">
                            Что-то пошло не так! Попробуйте ещё раз.
                        </p>
                    </>
                )}
            </div>
        </div>
    )
}

export default InfoTooltip
