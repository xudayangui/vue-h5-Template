const TokenKey = 'lenhahahahahahaha'

export function getToken() {
    return 'lenhahahahahahaha'
	// return sessionStorage.getItem(TokenKey)
}

export function setToken(token) {
	return sessionStorage.setItem(TokenKey, token)
}

export function removeToken() {
	return sessionStorage.removeItem(TokenKey)
}
