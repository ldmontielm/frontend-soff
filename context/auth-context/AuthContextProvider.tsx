'use client'

import React, { useContext, createContext, useState, useEffect } from "react"
import { fetcherPost } from "../swr-context-provider/SwrContextProvider"
import { RoutesApi } from "@/models/routes.models"
import axios from "axios"
import { saveInLocalStorage, clearLocalStorage, LocalStorageKeys, getInLocalStorage} from "@/utilities/local-storage-manage"
import { RequestCookie, RequestCookies } from "next/dist/compiled/@edge-runtime/cookies"
import {setCookie, getCookie, deleteCookie} from 'cookies-next'
import { boolean } from "zod"


interface Props {
    children: React.ReactNode
}

interface AuthResponse {
    access_token: string
    refresh_token: string
}

export interface User {
    id: string,
    name: string,
    document_type: string,
    document: string,
    phone: string,
    email: string,
    status: boolean,
    role: string,
    permissions: []
}

const AuthContext = createContext({
    isAuthenticated: false,
    saveSession: (session: AuthResponse) => {},
    logout: () => {},
    user: {
        id: "",
        name: "",
        document_type: "",
        document: "",
        phone: "",
        email: "",
        status: true,
        role: "",
        permissions: ['']
    },
    setUser: (user: User) => {},
    setIsAuthenticated: (data: boolean) => {}
})

async function retrieveUserInfo(access_token: string){
    try {
        return fetch(`${RoutesApi.AUTH}/user/me`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${access_token}`
            }
        }).then((res) => res.json())
    } catch (error) {
        return null
    }
}





export default function AuthContextProvider({children}:Props) {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [persist, setPersist] = useState(false);
    const [user, setUser] = useState<User>({
        id: "",
        name: "",
        document_type: "",
        document: "",
        phone: "",
        email: "",
        status: true,
        role: "",   
        permissions: []
    })


    function logout(){
        setIsAuthenticated(false)
        setUser({
            id: "",
            name: "",
            document_type: "",
            document: "",
            phone: "",
            email: "",
            status: true,
            role: "",   
            permissions: []
        })
        deleteCookie(LocalStorageKeys.REFRESH_TOKEN)
        deleteCookie(LocalStorageKeys.TOKEN)
        deleteCookie(LocalStorageKeys.USER)
    }

    async function saveSession(session: AuthResponse){
        setIsAuthenticated(true)
        const user = await retrieveUserInfo(session.access_token)
        setCookie(LocalStorageKeys.TOKEN, session.access_token, {
            sameSite: "none",
            secure: true
        })
        setCookie(LocalStorageKeys.REFRESH_TOKEN, session.refresh_token, {
            sameSite: "none",
            secure: true
        })
        setCookie(LocalStorageKeys.USER, JSON.stringify(user), {
            sameSite: "none",
            secure: true
        })
        setUser(user)
    }

    async function getUser (token: string) {
        const user = await retrieveUserInfo(token)
        setCookie(LocalStorageKeys.USER, JSON.stringify(user))
        setUser(user)
    }

    useEffect(() => {
        const token = getCookie(LocalStorageKeys.TOKEN)
        if(token){
            setIsAuthenticated(true)
            getUser(token!)
        }
    }, [])


    return (
        <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated, saveSession, logout, user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () =>  useContext(AuthContext)