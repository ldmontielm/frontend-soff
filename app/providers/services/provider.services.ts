import axios from "axios";
import { Provider, ProviderCreate } from "../models/provider.models";


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
      return res.data
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }

