export class Auth {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl
        this._headers = headers
    }
    _getResponseData(res) {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
    }
    signIn({ password, email }) {
        return fetch(`${this._baseUrl}/signin`, {
            headers: this._headers,
            method: "POST",
            body: JSON.stringify({
                password: `${password}`,
                email: `${email}`,
            }),
        }).then((res) => {
            return this._getResponseData(res)
        })
    }
    signUp({ password, email }) {
        return fetch(`${this._baseUrl}/signup`, {
            headers: this._headers,
            method: "POST",
            body: JSON.stringify({
                password: `${password}`,
                email: `${email}`,
            }),
        }).then((res) => {
            return this._getResponseData(res)
        })
    }
    logIn(jwt) {
        const headers = this._headers
        headers["Authorization"] = `Bearer ${jwt}`
        return fetch(`${this._baseUrl}/users/me`, {
            headers: headers,
        }).then((res) => {
            return this._getResponseData(res)
        })
    }
}
const serverInfo = {
    baseUrl: "https://auth.nomoreparties.co",
    headers: {
        "Content-Type": "application/json",
    },
}
export const auth = new Auth(serverInfo)
