import { makeRequest } from "../fetch"

const endpoint = "ingredients"

export const getIngredients = async () => {
    return await makeRequest(endpoint)
}