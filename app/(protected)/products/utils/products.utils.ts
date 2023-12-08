import { format } from 'date-fns';

export const formatTime = (time:any) => {
    return format(time, 'h:mm a');
  };

export const formattedNumber = (value:number)=>{
    const formattedValue = new Intl.NumberFormat("en-US", {
      style: 'currency',
      currency: "USD",
      maximumFractionDigits: 0
    }).format(value)
    return formattedValue
  }

export const formattedPriceSupply = (value:number) =>{
  const formattedPrice = parseFloat(value.toFixed(2)).toLocaleString('en-US',{
    style: 'currency',
    currency: "USD",
  });
  return formattedPrice
}