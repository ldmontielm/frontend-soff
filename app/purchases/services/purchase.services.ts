import axios from "axios"
import {Purchase, Order, OrderCreate, PurchaseCreate, PurchaseConfirm} from "../models/purchase.models";
import {Supply} from "../models/supply.models";
import {Provider} from "../models/provider.models";


export const urlPurchases = 'http://127.0.0.1:8000/purchases'
export interface responseCreate{
    id: string
    message: string
}

export async function getPurchases(url: string):Promise<Purchase[]>{
    try{
        const res = await axios.get(url)
        return res.data.purchases
    } catch(error){
        throw new Error(`Error: ${error}`);
    }
}

export async function getSupplies(url: string): Promise<Supply[]>{
    try{
        const res = await axios.get(url)
        return res.data.supplies
    } catch(error){
        throw new Error(`Error: ${error}`);
    }
}

export async function getProviders(url: string): Promise<Provider[]>{
    try{
        const res = await axios.get(url)
        return res.data.providers
    } catch(error){
        throw new Error(`Error: ${error}`);
    }
}

export async function createPurchase():Promise<responseCreate | null>{
    try{
        const res = await axios.post(urlPurchases)
        return res.data
    } catch (error){
        return null;
    }
}

export async function getOrdersByPurchaseId(id: string):Promise<Order[]>{
    try{
        const res = await axios.get(`${urlPurchases}/${id}/orders`)
        return res.data.orders
    } catch (error){
        throw new Error(`Error: ${error}`)
    }
}

export async function addOrder(order:OrderCreate):Promise<Order[]>{
    try{
        const res = await axios.post(`${urlPurchases}/${order.purchase_id}/add-order`, order)
        return res.data
    } catch (error){
        throw new Error(`Error: ${error}`);
    }
}

export async function getGeneralProvider(url: string):Promise<Provider>{
    try {
        const res = await axios.get(`${url}/provider/general`)
        return res.data
    } catch (error){
        throw new Error (`Error: ${error}`);
    }
}

export async function ConfirmPurchase(id:string, provider_id:string){
    try{
        const res = await axios.put(`${urlPurchases}/${id}/confirm-purchase?provider_id=${provider_id}`)
        return res.data
    } catch (error) {
        throw new Error(`Error: ${error}`);
    }
}

export async function UpdateAmountOrder(id_order:string, amount_supply: number){
    try {
        const res = await axios.put(`${urlPurchases}/update-amount-order?id_order=${id_order}&amount_supply=${amount_supply}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
} 

export async function DeleteOrder(id_order: string){
    try {
        const res = await axios.delete(`${urlPurchases}/${id_order}/delete`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
