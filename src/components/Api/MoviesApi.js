class Api {
    constructor(basePath) {
        this._basePath = basePath;
    }

    _getHeaders() {
        return {
            "Content-Type": "application/json",
            // "Cache-Control": "no-cache",
        };
    }

    _getJson(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject('Ошибка: ' + res.status);
    }

    getCards() {
        return fetch(`${this._basePath}/beatfilm-movies`, {
            headers: this._getHeaders(),
        }).then(this._getJson);
    }


}

const apiAllMovies = new Api(
    "https://api.nomoreparties.co"
)

export default apiAllMovies