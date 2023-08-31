export interface Product {
    id: string;
    name: string;
    price: number;
    sale_price: number;
    status: boolean;
  }

export interface DetailsRecipe {
  id: string;
  product_id: string;
  supply_id: string;
  supply: string;
  amount_supply: number;
  unit_measure: string;
  subtotal: number;
}

export interface ProductCreate {
  name: string
  sale_price: number
}

export interface DetailCreate {
    product_id: string;
    supply_id: string;
    amount_supply: number;
    unit_measure:string;
}

export interface ProductConfim {
    name: string
    sale_price: number
}

export interface DetailContextInterface {
  DetailsContext:Array<DetailsRecipe>
  AddDetail:(detail:DetailsRecipe) => void
}