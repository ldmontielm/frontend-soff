import axios from "axios";
import { PermissionRole, Role, createPermissionRole, createRole } from "../models/roles.models";

export const urlRoles= 'http://localhost:8000/role'

export  async function getRole(url: string):Promise<Role[]>{
    try{
        const res = await axios.get(url)
        return res.data.role
    } catch(error){
        throw new Error(`Error: ${error}`)
    }
}
export  async function getPermissionRole(url: string):Promise<PermissionRole[]>{
    try{
        const res = await axios.get(url)
        return res.data.role
    } catch(error){
        throw new Error(`Error: ${error}`)
    }
}

export async function createRole(role : createRole): Promise<createRole>{
    try {
        const res = await axios.post(`${urlRoles}/post_rol`, role)
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

//   ----------------------------------Permissions------------------------------------
export  async function getPermissions(url: string):Promise<Role[]>{
    try{
        const res = await axios.get(url)
        return res.data.role
    } catch(error){
        throw new Error(`Error: ${error}`)
    }
}