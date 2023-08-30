export interface Supply {
  id: string;
  name: string;
  price: number;
  quantity_stock: number;
  unit_measure: string;
  status: boolean;
}

export interface SupplyCreate {
  name: string;
  price: number;
  quantity_stock: number;
  unit_measure: string;
}