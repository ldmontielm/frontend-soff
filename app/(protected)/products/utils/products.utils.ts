import { format } from 'date-fns';

export const convertToCOP = (money: number | 0) => {
    let listmoney:string[] = money.toString().split('').reverse()
    if(listmoney.length > 3 && listmoney.length <= 6){
      listmoney.splice(3, 0, '.')
    }else if(listmoney.length > 6){
      listmoney.splice(3, 0, '.')
      listmoney.splice(7, 0, '.')
    }
    return listmoney.reverse().join('')
  }

export const formatTime = (time:any) => {
    return format(time, 'h:mm a');
  };