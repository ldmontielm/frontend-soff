'use client'
import {createContext, useEffect, useState} from "react";
import { Order } from "@/app/sales/models/sale.models";
import { useParams } from "next/navigation";
export const OrderContext = createContext({});

interface Props {
  children: React.ReactNode
}

export function OrdersContextProvider({children}: Props) {
  const [OrdersContext, setOrdersContext] = useState<Array<Order>>([]);
  const params = useParams()

  const calculateTotalForOrders = () => {
    let subtotal = 0 
    OrdersContext.map((order) => {
      subtotal += order.total
    })
    return subtotal
  }

  // const AddOrder = (order: Order) => {
  //   let old_order = OrdersContext.find((value) => value.product_id == order.product_id)
  //   if (old_order != undefined){
  //     UpdateAmountOrders(old_order.id, order.amount_product, true)
  //   }else{
  //     setOrdersContext([...OrdersContext, order])
  //   }
  // }

  const UpdateAmountOrders = (id:string, amount_order: number, add: boolean = false) => {
    let orders = [...OrdersContext]
    let order = OrdersContext.find((value) => value.id === id)
    if(order != undefined){
      if(add != false){
        order.amount_product += amount_order
        order.total = (order.amount_product + amount_order) * order.price
      }else{
        order.amount_product = amount_order
        order.total = amount_order * order.price
      }
      orders[orders.indexOf(order)] = order
    }
    setOrdersContext(orders)
  }

  const DeleteOrder = (id: string) => {
    const newList = OrdersContext.filter((value) => value.id != id)
    setOrdersContext(newList)  
  }


  return (
    <OrderContext.Provider value={{OrdersContext, setOrdersContext, UpdateAmountOrders, DeleteOrder}}>
      {children}
    </OrderContext.Provider>
  )
}