
const BASE_URL = `https://norma.nomoreparties.space/api/`

export const makeRequest = async (endpoint: string, params?: RequestInit): Promise<Response> => {
    const r = await fetch(BASE_URL + endpoint, { ...params })
    return await r.json()
}