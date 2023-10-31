export interface Purchase {
  id: string;
  purchase_date: string;
  invoice_number: string;
  amount_order: number;
  provider_id: string;
  provider: string;
  total: number;
}

export interface Order {
  id_order: string;
  purchase_id: string;
  supply_id: string;
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
    invoice_number: string
}


export interface PurchaseConfirm {
  invoice_number: string;
  provider_id: string;
}



