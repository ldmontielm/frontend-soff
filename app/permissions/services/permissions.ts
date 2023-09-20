import axios from "axios"
import { Permission } from "../models/permissions.model"

export const urlPermission= 'http://localhost:8000/permission'

export  async function getPermissions(url: string):Promise<Permission[]>{
    try{
        const res = await axios.get(url)
        return res.data.permission
    } catch(error){
        throw new Error(`Error: ${error}`)
    }
}