import axios from "axios";
import { Provider, ProviderCreate, ProviderDelete } from "../models/provider.models";


export const urlProvider = 'http://localhost:8000/providers'

export async function getProviders(url: string):Promise<Provider[]> {
    try{
        const res = await axios.get(url)
        return res.data.providers
    }catch (error){
        throw new Error(`Error: ${error}`)
    }
    
}

export async function createProvider(provider:ProviderCreate): Promise<Provider> {
    try {
      const res = await axios.post(`${urlProvider}/create_provider`, provider)
      return res.data;
    } catch (error) {
      throw new Error(`Error: ${error}`)
    }
  }


export async function updateProvider(id: string, updatedProvider: ProviderCreate): Promise<Provider> {
    try {
      const res = await axios.put(`${urlProvider}/update_provider/${id}`, updatedProvider);
      return res.data;
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }


export async function deleteProvider(id: string): Promise<void> {
    try {
      await axios.delete(`${urlProvider}/delete_provider/${id}`);
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }

  export async function UpdateStatusProvider(id:string){
    try {
        const res = await axios.put(`${urlProvider}/${id}/status_update_provider`)
        return res.data 
    } catch (error) {
        console.log(error)
    }

  }

