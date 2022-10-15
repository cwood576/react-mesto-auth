import React from "react"

function Footer() {
    return (
        <footer className="footer">
            <p className="copyright ">
                © {new Date().getFullYear()} Mesto Russia
            </p>
        </footer>
    )
}

export default Footer
