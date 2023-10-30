'use client'
import axios from "axios"
import {User, UserCre, createUser } from "../models/users.models";

export const urlUser= 'http://localhost:8000/user'

export  async function getUsers(url: string):Promise<User[]>{
    try{
        const res = await axios.get(url)
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

  export async function UpdateUser(id_user:string, user:createUser): Promise<UserCre[]>{
    try {
        const res = await axios.put(`${urlUser}/${id_user}/put-user`,user)
        return res.data
    } catch (error) {
        throw new Error(`Error: ${error}`)
    }
  }


  export async function UpdateStatus(id_user:string){
    try {
        const res = await axios.put(`${urlUser}/${id_user}/status-update`)
        return res.data.status
    } catch (error) {
        console.log(error)
    }

  }


  export async function getUser(id_user:string): Promise<User>{
    try {
        const res = await axios.get(`${urlUser}/${id_user}/get-user`)
        return res.data.user
    } catch (error) {
        throw new Error(`Error: ${error}`)
    }
  }






