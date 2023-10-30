import axios from "axios";
import { Supply, SupplyCreate, SupplyUpdate, SupplyDelete } from "../models/supply.models";


export const urlSupply = 'http://localhost:8000/supplies'

export async function getSupplies(url: string):Promise<Supply[]> {
    try{
        const res = await axios.get(url)
        return res.data.supplies
    }catch (error){
        throw new Error(`Error: ${error}`)
    }
    
}

export async function createSupply(supply:SupplyCreate): Promise<Supply> {
    try {
      const res = await axios.post(`${urlSupply}/create_supply`, supply)
      return res.data
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }


export async function updatedSupply(id: string, updatedSupply: SupplyCreate): Promise<Supply> {
    try {
      const res = await axios.put(`${urlSupply}/update_supply/${id}`, updatedSupply);
      return res.data;
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }

  export async function deleteSupply(id: string): Promise<void> {
    try {
      await axios.delete(`${urlSupply}/delete_supply/${id}`);
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }

  export async function UpdateStatusSupply(id:string){
    try {
        const res = await axios.put(`${urlSupply}/${id}/status_update_supply`)
        return res.data 
    } catch (error) {
        console.log(error)
    }

  }


