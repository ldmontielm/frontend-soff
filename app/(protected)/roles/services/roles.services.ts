import axios from "axios";
import { PermissionRole, Role, createPermissionRole, createRole} from "../models/roles.models";

export const urlRoles= 'http://localhost:8000/role'
export const urlPermissionRole= 'http://localhost:8000/role'
export const urlPermission= 'http://localhost:8000/permission'


export interface responseCreate {
    id: string
    name:string
}

export  async function getRole(url: string):Promise<Role[]>{
    try{
        const res = await axios.get(url)
        return res.data.role
    } catch(error){
        throw new Error(`Error: ${error}`)
    }
}
export  async function getPermissionRole(url:string):Promise<PermissionRole[]>{
    try{
        const res = await axios.get(url)
        return res.data.Permission_Role
    } catch(error){
        throw new Error(`Error: ${error}`)
    }
}

export async function createPermissionRole(permissionrole : createPermissionRole): Promise<createPermissionRole>{
    try {
        const res = await axios.post(`${urlRoles}/post-permissionrole`, permissionrole)
        return res.data.Permission_Role
    } catch (error) {
        throw new Error(`Error: ${error}`)
    }
}

export async function createRoles(nombre_role: string, assingPermissions: any[]){
    try {
        const res = await axios.post(`http://localhost:8000/role/post-permissions/${nombre_role}`, assingPermissions)
        return res.data
    } catch (error) {
        return null;
    }
}
export async function deleteRole(id_role: string){
    try {
        const res = await axios.delete(`${urlRoles}/${id_role}/delete-role`)
        return res.data
    } catch (error) {
        return null;
    }
}

// ---------------UPDATE ROL-------------------------------------------
export async function UpdateRoles(id_role:string, user:createRole): Promise<createRole[]>{
    try {
        const res = await axios.put(`${urlRoles}/update-role/${id_role}`,user)
        return res.data
    } catch (error) {
        throw new Error(`Error: ${error}`)
    }
}
// ----------------------------------------------------------------

export async function updateUser(role : createRole): Promise<Role>{
    try {
        const res = await axios.post(`${urlRoles}/put_user`, role)
        return res.data.role
    } catch (error) {
        throw new Error(`Error: ${error}`)
    }
}

export async function UpdateStatusRole(id_role:string){
    try {
        const res = await axios.put(`${urlRoles}/${id_role}/status-update-role`)
        return res.data 
    } catch (error) {
        console.log(error)
    }

}


//   ----------------------------------Permissions------------------------------------
export  async function getPermissionsRole(url: string, id_role:string):Promise<PermissionRole[]>{
    try{
        const res = await axios.get(`${urlRoles}/${id_role}/permissionrole-get`)
        return res.data.Permissions
    } catch(error){
        throw new Error(`Error: ${error}`)
    }
}