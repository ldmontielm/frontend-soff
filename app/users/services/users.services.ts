import axios from "axios"
import { Role, User, createUser } from "../models/users.models";

export const urlUser= 'http://localhost:8000/user'
export const urlRole = 'http://localhost:8000/user/get-role'

export  async function getUsers(url: string):Promise<User[]>{
    try{
        const res = await axios.get(`${url}/get-user`)
        return res.data.user
    } catch(error){
        throw new Error(`Error: ${error}`)
    }
}

export async function createUser(user: createUser): Promise<User>{
    try {
        const res = await axios.post(`${urlUser}/post_user`, user)
        return res.data.user
    } catch (error) {
        throw new Error(`Error: ${error}`)
    }
  }





export  async function getRole(url: string):Promise<Role[]>{
    try{
        const res = await axios.get(url)
        return res.data.role
    } catch(error){
        throw new Error(`Error: ${error}`)
    }
}


