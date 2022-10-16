import React from "react"

function InfoTooltip(props) {
    return (
        <div className={`popup ${props.isOpen ? "popup_opened" : ""}`}>
            <div className="popup__container popup__container_type_info">
                <button
                    type="button"
                    onClick={props.onClose}
                    className={`popup__close`}
                />
                {props.children}
            </div>
        </div>
    )
}

export default InfoTooltip
