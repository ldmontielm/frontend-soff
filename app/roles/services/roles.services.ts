import axios from "axios";
import { Role, createRole } from "../models/roles.models";

export const urlRoles= 'http://localhost:8000/role'

export  async function getRole(url: string):Promise<Role[]>{
    try{
        const res = await axios.get(`${url}/get-role`)
        return res.data.role
    } catch(error){
        throw new Error(`Error: ${error}`)
    }
}

export async function createUser(role : createRole): Promise<Role>{
    try {
        const res = await axios.post(`${urlRoles}/post_user`, role)
        return res.data.role
    } catch (error) {
        throw new Error(`Error: ${error}`)
    }
  }

export async function updateUser(role : createRole): Promise<Role>{
    try {
        const res = await axios.post(`${urlRoles}/put_user`, role)
        return res.data.role
    } catch (error) {
        throw new Error(`Error: ${error}`)
    }
  }
