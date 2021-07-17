import api from "./index"

export default{
    find : ()=> api.get("/models").then(res => res.data)
}