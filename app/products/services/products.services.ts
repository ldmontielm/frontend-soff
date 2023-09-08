import axios from "axios"
import { Supply } from "../models/supply.models";
import { Product, ProductCreate, ProductConfim, DetailsRecipe, DetailCreate } from "../models/product.models"

export const urlProducts = 'http://127.0.0.1:8000/products'

export interface responseCreate {
    id: string
    message: string
}

export async function getProducts(url: string):Promise<Product[]>{
    try {
      const res = await axios.get(url)
      return res.data.products
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
}

export async function getSupplies(url:string): Promise<Supply[]>{
  try{
      const res = await axios.get(url)
      return res.data.supplies
  } catch(error){
      throw new Error(`Error: ${error}`);
  }
}

export async function getProductById(id: string):Promise<Product | null>{
  try {
    const res = await axios.get(`${urlProducts}/${id}`)
    return res.data.product
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
}

export async function getDetailsByProductId(id: string):Promise<DetailsRecipe[]>{
    try {
      const res = await axios.get(`${urlProducts}/${id}/details`)
      return res.data.details
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
}

export async function createProduct(): Promise<responseCreate | null>{
    try {
      const res = await axios.post(`${urlProducts}/add_products`)
      return res.data
    } catch (error) {
      return null;
    }
  }

export async function addDetail(detail:DetailCreate): Promise<DetailsRecipe[]>{
    try {
      const res = await axios.post(`${urlProducts}/${detail.product_id}/add_detail`, detail)
      return res.data
    } catch (error) {
      console.error('Error al agregar el detalle:', error);
      throw new Error(`Error: ${error}`);
    }
}

export async function updateAmountDetail(id_detail: string, amount_supply: number) {
    try {
      const res = await axios.put(`${urlProducts}/update_detail?id_detail=${id_detail}&amount_supply=${amount_supply}`)
      return res.data
    } catch (error) { 
      console.log(error)
    }
  }

export async function confirmProduct(id: string, product: ProductConfim) {
    try {
      const res = await axios.put(`${urlProducts}/${id}/confirm_product`, product)
      return res.data
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
}

export async function updateProduct(id_product: string, product: ProductCreate) {
    try {
      const res = await axios.put(`${urlProducts}/update_product?id_product=${id_product}&product=${product}`)
      return res.data
    } catch (error) { 
      console.log(error)
    }
  }

export async function deleteDetail(id_detail:string) {
    try {
        const res = await axios.delete(`${urlProducts}/${id_detail}/delete_detail`)
        return res.data
    } catch (error) {
        console.log(error)
        
    }
}

export async function deleteProduct(id_product:string) {
  try {
      const res = await axios.delete(`${urlProducts}/${id_product}/delete_product`)
      return res.data
  } catch (error) {
      console.log(error)
      
  }
}

// export async function changeStatus(id_product:string) {
//     try {
//         const res = await axios.delete(`${urlProducts}/change-status?id_product=${id_product}`)
//         return res.data
//     } catch (error) {
//         console.log(error)
        
//     }
// }