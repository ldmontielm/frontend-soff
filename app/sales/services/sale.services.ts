import axios from "axios"
import { Sale, Order, OrderCreate, Client, ClientCreate, SaleCreate, SaleConfirm} from "../models/sale.models";
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

export async function getSales(url: string):Promise<Sale[]>{
  try {
    const res = await axios.get(url)
    return res.data.sales
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
}

export async function getProducts(url: string): Promise<Product[]>{
  try {
    const res = await axios.get(url)
    return res.data.products
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

export async function getOrdersBySaleId(url: string): Promise<Order[]>{
  try {
    const res = await axios.get(url)
    return res.data.orders
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
}

export async function addOrder(url: string, {arg}:{arg:OrderCreate}){
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(arg),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
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

export async function confirmSale(url: string, arg:SaleConfirm) {
    try {
      const res = await axios.put(url, arg)
      return res.data
    } catch (error) {
      console.log(error)
    }
}

export async function updateAmountOrder(id_order: string, amount_product: number) {
  try {
    const res = await axios.put(`${urlSales}/update-amount-order?id_order=${id_order}&amount_product=${amount_product}`)
    return res.data
  } catch (error) { 
    console.log(error)
  }
}


export async function DeleteOrder(id_order: string){
  try {
    const res = await axios.delete(`${urlSales}/${id_order}/delete`)
    return res.data
  } catch (error) { 
    console.log(error)
  }
}

