import axios from "axios"
import { Sale, Order, OrderCreate, Client, ClientCreate, SaleConfirm} from "../models/sale.models";
import { Product } from "../models/product.models";


export const urlSales = 'http://localhost:8000/sales'
export const urlProducts = 'http://localhost:8000/products'

export interface responseCreate {
  id: string
  message: string
}

export interface SaleConfirmMethod {
  sale: SaleConfirm
  orders: OrderCreate[]
}

export async function getProducts(url: string): Promise<Product[]>{
  try {
    const res = await axios.get(url)
    return res.data.products
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
}
export async function getPermissions(url: string){
  try {
    const res = await axios.get(url)
    return res.data.Permissions
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
}
export async function getRoles(url: string){
  try {
    const res = await axios.get(url)
    return res.data.role
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
}

export async function createSala(): Promise<responseCreate | null>{
  try {
    const res = await axios.post(urlSales)
    return res.data
  } catch (error) {
    return null;
  }
}


export async function createRole(nombre_role: string, assingPermissions: any[]){
  try {
    const res = await axios.post(`http://localhost:8000/role/post-permissions/${nombre_role}`, assingPermissions)
    return res.data
  } catch (error) {
    return null;
  }
}

export async function getOrdersBySaleId(url: string): Promise<Order[]>{
  try {
    const res = await axios.get(url)
    return res.data.orders
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
}



export async function getGeneralClient(url: string): Promise<Client> {
  try {
    const res = await axios.get(url)
    return res.data
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
}


export async function createClient(client:ClientCreate): Promise<Client> {
  try {
    const res = await axios.post(`${urlSales}/add-client`, client)
    return res.data
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
}

// Services modified
export async function fetcherPost<TData>(url: string, arg:TData){
  return axios.post(url, arg, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export async function fetcherPut<TData>(url: string, arg: TData | undefined) {
  return axios.put(url, arg, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export async function fetcherDelete(url: string){
  return axios.delete(url)
}