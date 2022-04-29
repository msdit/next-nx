import JWT from 'jsonwebtoken'

export function createJWT(
    data: { [key: string]: any },
    expiresIn: number
): string {
    return JWT.sign(data, 'secret', { expiresIn })
}
