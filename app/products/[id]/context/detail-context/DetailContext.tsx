'use client'
import React, { createContext, useState } from "react"
import { DetailsRecipe } from "@/app/products/models/product.models"

export const DetailContext = createContext({})

interface Props {
    children:React.ReactNode
}

export function DetailContextProvider({children}:Props){
    const [DetailsContext, setDetailContext] = useState<Array<DetailsRecipe>>([])
    const AddDetail = (detail:DetailsRecipe) =>{
        setDetailContext([...DetailsContext, detail])
    }
    return (
        <DetailContext.Provider value={{DetailsContext, AddDetail}}>
            {children}
        </DetailContext.Provider>
    )
}