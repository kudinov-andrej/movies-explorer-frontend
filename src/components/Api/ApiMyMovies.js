class Api {
    constructor(basePath) {
        this._basePath = basePath;
    }

    _getHeaders() {
        const token = localStorage.getItem('jwt');
        return {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache",
            authorization: `Bearer ${token}`
        };
    }

    _getJson(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getCards() {
        return fetch(`${this._basePath}/movies`, {
            headers: this._getHeaders(),
        }).then(this._getJson);
    }


    createCard(item) {
        return fetch(`${this._basePath}/movies`, {
            method: "POST",
            headers: this._getHeaders(),
            body: JSON.stringify(item),
        }).then(this._getJson);
    }

    getCurrentUser() {
        return fetch(`${this._basePath}/users/me`, {
            headers: this._getHeaders(),
        }).then(this._getJson);
    }


    setUserInfo(item) {
        return fetch(`${this._basePath}/users/me`, {
            method: 'PATCH',
            headers: this._getHeaders(),
            body: JSON.stringify({
                name: item.name,
                email: item.email
            })
        })
            .then(this._getJson);
    }

    deleteCard(_id) {
        return fetch(`${this._basePath}/movies/${_id}`, {
            method: "DELETE",
            headers: this._getHeaders(),
        }).then(this._getJson);
    }
}

const api = new Api(
    //"http://localhost:3000"
    "https://api.diplomak.nomoreparties.sbs",
)

export default api