import axios from "axios"
import { Sale, Order, OrderCreate, Client, ClientCreate, SaleCreate, SaleConfirm} from "../models/sale.models";
import { Product } from "../models/product.models";


export const urlSales = 'http://127.0.0.1:8000/sales'

export interface responseCreate {
  id: string
  message: string
}

export async function getSales(url: string):Promise<Sale[]>{
  try {
    const res = await axios.get(url)
    return res.data.sales
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
}

export async function getProducts(): Promise<Product[]>{
  try {
    const res = await axios.get(`${urlSales}/products`)
    return res.data
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

export async function getOrdersBySaleId(id: string): Promise<Order[]>{
  try {
    const res = await axios.get(`${urlSales}/${id}/orders`)
    return res.data.orders
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
}

export async function addOrder(order:OrderCreate): Promise<Order[]>{
  try {
    const res = await axios.post(`${urlSales}/${order.sale_id}/add-order`, order)
    return res.data
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
}


export async function getGeneralClient(url: string): Promise<Client> {
  try {
    const res = await axios.get(`${url}/client/general`)
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

export async function confirmSale(id: string, sale: SaleConfirm) {
  try {
    const res = await axios.put(`${urlSales}/${id}/confirm-sale`, sale)
    return res.data
  } catch (error) {
    throw new Error(`Error: ${error}`);
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