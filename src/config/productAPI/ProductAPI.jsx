import api from "./index"

export default {
    find : ()=> api.get("/products").then((res)=> res.data),
    detail : (id)=> api.get(`/products/${id}`).then((res)=> res.data),
}