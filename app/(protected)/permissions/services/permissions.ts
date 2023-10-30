import axios from "axios"
import { Permission, createPermission } from "../models/permissions.model"

export const urlPermission= 'http://localhost:8000/permission'

export  async function getPermissions(url: string):Promise<Permission[]>{
    try{
        const res = await axios.get(url)
        return res.data.Permissions
    } catch(error){
        throw new Error(`Error: ${error}`)
    }
}

export async function createPermission(permission: createPermission): Promise<Permission>{
    try {
        const res = await axios.post(`${urlPermission}/post-permision`, permission)
        return res.data.permission
    } catch (error) {
        throw new Error(`Error: ${error}`)
    }
  }