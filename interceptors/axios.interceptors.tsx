'use client'

import axios from "axios"
import { useToast } from "@/components/ui/use-toast"
import { getValidationErrors } from "@/utilities"

export const AxiosInterceptors = () => {
    const { toast } = useToast()
    
    axios.interceptors.request.use((request) => { 
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