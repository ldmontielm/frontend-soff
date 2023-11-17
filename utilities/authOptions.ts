import { NextAuthOptions } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { RoutesApi } from '@/models/routes.models'
import { setCookie } from 'cookies-next'
import {cookies} from 'next/headers'

interface User {
    access_token: string;
    user: {
        email: string,
        name: string,
        permissions: Array<string>,
        status: boolean
    }
}
export const authOptions: NextAuthOptions = {
    providers: [
        Credentials({
            name: 'Credentials',
            credentials: {
                username: {label: "Correo"},
                password: {label: "Contraseña"}
            },
            authorize: async (credentials, req) => {
             
                const res = await fetch(`${RoutesApi.AUTH}/login`, {
                    method: 'POST',
                    headers: {
                        "accept": "application/json",
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: `grant_type=&username=${encodeURIComponent(credentials?.username!)}&password=${encodeURIComponent(credentials?.password!)}&scope=&client_id=&client_secret=`
            
                })



                const user:User = await res.json()

                if(res.status === 200){
                    console.log(user.access_token)
                    
                    return {
                        access_token: user.access_token,
                        id: "",
                        name: user.user.name,
                        email: user.user.email,
                        status: user.user.status,
                        permissions: user.user.permissions
                    }
                }
                return null
            }
        }), 
    ],
    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) {
                cookies().set('token', user.access_token)
                token.permissions = user.permissions;
                token.status = user.status;
                token.access_token = user.access_token;
            }
            return token;
          },
        session: async ({ session, token }) => {
        if (session && session.user) {
            session.user.access_token = token.access_token
            session.user.id = token.id;
            session.user.permissions = token.permissions;
            session.user.status = token.status;
        }
        return session;
        },
    }
}