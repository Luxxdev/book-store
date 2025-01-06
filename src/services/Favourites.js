import axios from "axios";

const favouritesAPI = axios.create({ baseURL: 'http://localhost:8000/favourites' })

async function getFavourites() {
    const response = await favouritesAPI.get('/')

    return response.data
}

async function postFavourite(id) {
    await favouritesAPI.post(`/${id}`)
}

async function deleteFavourite(id) {
    await favouritesAPI.delete(`/${id}`)
}

export {
    getFavourites, postFavourite, deleteFavourite
}