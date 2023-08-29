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

export const convertDate = (date: string) => {
  const newDate = new Date(date)
  const year = newDate.getFullYear()
  const month = newDate.getMonth() + 1;
  const day = newDate.getDate();
  const hours = newDate.getHours();
  const minutes = newDate.getMinutes();
  const seconds = newDate.getSeconds();
  return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
} 