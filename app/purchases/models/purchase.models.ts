export interface Purchase {
  id: string;
  purchase_date: string;
  amount_order: number;
  provider: string;
  total: number;
  status: boolean;
}

export interface Order {
  id_order: string;
  purchase_id: string;
  supply: string;
  amount_supplies: number;
  price_supplies: number;
  subtotal: number;
}

export interface OrderCreate {
  supply_id: string;
  amount_supplies: number;
  price_supplies: number;
  purchase_id: string;
}

export interface PurchaseCreate{
    provider_id: string
}



export interface PurchaseConfirm {
  id_purchase: string;
  provider_id: string;
}



