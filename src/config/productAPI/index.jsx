import axios from "axios"

const api = axios.create({
    baseURL : "https://desolate-mesa-57726.herokuapp.com",
})

export default api