import api from "../config/api";

export async function getAllPokemon(page, perPage) {
    try {
        const { data } = await api.get('/pokemon', {
            params: {
                page,
                perPage
            }
        })

        return data
    } catch (err) {
        if (err.response) {
            const { data } = err.response

            return {
                sucess: data.sucess,
                message: data.message,
            }
        } else {
            return {
                sucess: false,
                message: 'Falha ao se comunicar com o servidor'
            }
        }
    }
}