'use client'

import axios, { AxiosRequestConfig } from 'axios'
import React from 'react'
import { SWRConfig } from 'swr'
import { AxiosInterceptors } from '@/interceptors/axios.interceptors'
// import { SaleConfirm } from '@/app/(protected)/roles/sales/models/sale.models'

interface Props {
  children: React.ReactNode
}
// El "fetcher" es una función que devuelve una Promise que recupera los datos
const fetcher = (url: string) => axios.get(url).then(res => res.data)

export async function fetcherPost<TData>(url: string, arg?:TData, options?: AxiosRequestConfig){
  return axios.post(url, arg, {
    headers: {
      "Access-Control-Allow-Headers" : "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT,DELETE,PATCH"
  }
  }).then(res => res.data)
}

export async function fetcherPut<TData>(url: string, arg:TData, options?: AxiosRequestConfig){
  return axios.put(url, arg, {
    headers: {
      "Access-Control-Allow-Headers" : "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT,DELETE,PATCH"
  }})
}

export async function fetcherDelete(url: string){
  return axios.delete(url, {
    headers: {
      "Access-Control-Allow-Headers" : "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT,DELETE,PATCH"
  }})
}

export default function SwrContextProvider({children}: Props) {
  AxiosInterceptors()
  return (
    <SWRConfig value={{
      fetcher: fetcher
    }}> 
      {children}
    </SWRConfig>
  )
}
