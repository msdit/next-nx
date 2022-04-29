import { decodeToken } from './decodeToken'

export function setToken(token: string) {
    const data = decodeToken(token)
    const exp = new Date(Number(data.exp) * 1000)
    let expires = 'expires=' + exp.toUTCString()
    document.cookie = 'token=' + token + ';' + expires + ';path=/'
}
