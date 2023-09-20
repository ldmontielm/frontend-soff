import axios from "axios";
import { Supply, SupplyCreate } from "../models/supply.models";


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