export interface Supply {
  id: string;
  name: string;
  price: number;
  quantity_stock: number;
  unit_measure: string;
  total: number;
  status: boolean;
}

export interface SupplyCreate {
  name: string;
  price: number;
  // total: number;
  quantity_stock: number;
  unit_measure: string;
}

export interface SupplyUpdate{
  name: string;
  price: number;
  total: number;
  quantity_stock: number;
  unit_measure: string;
}

export interface SupplyDelete{
  id: string;
  name: string;
  price: number;
  quantity_stock: number;
  unit_measure: string;
  total: number;
  status: boolean;
}