export function getToken(): string | null {
    if (typeof document !== 'undefined') {
        const value = `; ${document.cookie}`
        const parts = value.split(`; token=`)
        if (parts.length === 2) return String(parts?.pop()?.split(';')?.shift())
    }
    return null
}
