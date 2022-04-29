import JWT from 'jsonwebtoken'

export function decodeToken(token: string): any {
    try {
        const decode = JWT.verify(token, 'secret')
        return decode
    } catch (err) {
        return {}
    }
    // without jwt library we can decode token using the code below:
    // return JSON.parse(String(Buffer.from(token.split('.')[1], 'base64')))
}
