export interface Sale {
  id: string;
  sale_date: string;
  amount_order: number;
  payment_method: string;
  id_client: string;
  total: number;
  type_sale: string;
  status: "open" | "paid" | "cancel" | "pending";
  client: string;
}

export interface Client {
  phone: string;
  direction: string;
  name: string;
  id: string;
  email: string;
}

export interface ClientCreate{
  phone: string;
  direction: string;
  name: string;
  email: string;
}

export interface Order {
  id: string;
  sale_id: string;
  product_id: string;
  product: string;
  price: number;
  amount_product: number;
  total: number;
}


export interface OrderContextInterface {
  OrdersContext: Array<Order>;
  setOrdersContext: (value: Array<Order>) => void;
  UpdateAmountOrders: (id: string, amount_order: number) => void;
  DeleteOrder: (id: string) => void;
  AddOrder: (order: Order) => void;
}

export interface OrderCreate {
  sale_id: string;
  product_id: string;
  amount_product: number;
}

export interface SaleCreate{
  id_client: string;
  payment_method: string;
  type_sale: string;
}

export interface SaleConfirm {
  payment_method: string,
  type_sale: string,
  client: {
    name: string | undefined,
    direction: string | undefined,
    phone: string | undefined,
    email: string | undefined
  }
}