'use client'

import axios from "axios"
import { useToast } from "@/components/ui/use-toast"
import { getValidationErrors } from "@/utilities"
import { getCookie } from "cookies-next"



export const AxiosInterceptors = () => {
    const { toast } = useToast()
    
    axios.interceptors.request.use((request) => { 
        const token = getCookie('token')
        request.headers['Authorization']  = `Bearer ${token}`
        return request
    });

    axios.interceptors.response.use(
        (response) => {
            return response
        },
        (error) => {
            if(error.response === undefined){
                toast({variant: "destructive", title: getValidationErrors(error.code).title, description: getValidationErrors(error.code).message})
            }else {
                toast({variant: "destructive", title: getValidationErrors(error.response.data.detail).title, description: getValidationErrors(error.response.data.detail).message})
            }
            return Promise.reject(error)
        }
    )
}