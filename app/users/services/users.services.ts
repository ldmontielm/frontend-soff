'use client'
import axios from "axios"
import {User, createUser } from "../models/users.models";

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

  export async function UpdateUser(user: createUser): Promise<User>{
    try {
        const res = await axios.post(`${urlUser}/put_user`, user)
        return res.data.user
    } catch (error) {
        throw new Error(`Error: ${error}`)
    }
  }






