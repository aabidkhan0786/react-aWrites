import axios from "axios";

const baseUrl = "https://awrites.herokuapp.com/posts";

export const getPosts = async ()=>{
    return await axios.get(baseUrl)
}
export const createPosts = async (note)=>{
    return await axios.post(baseUrl, note)
}
export const deletePosts = async (id)=>{
    return await axios.delete(`${baseUrl}/${id}`)
}
export const editPosts = async (id)=>{
    return await axios.get(`${baseUrl}/${id}`)
}