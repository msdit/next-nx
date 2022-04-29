export function removeToken() {
    const exp = new Date(1)
    let expires = 'expires=' + exp.toUTCString()
    document.cookie = 'token=' + ';' + expires + ';path=/'
}
