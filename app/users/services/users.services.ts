import axios from "axios";
import { Role, User } from "../models/users.models";

export const urlUser= 'http://localhost:8000/user/get-user'
export const urlRole = 'http://localhost:8000/user/get-role'

export  async function getUsers(url: string):Promise<User[]>{
    try{
        const res = await axios.get(url)
        return res.data.user
    } catch(error){
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


