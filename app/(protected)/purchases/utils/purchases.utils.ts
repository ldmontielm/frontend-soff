import { utils, write } from 'xlsx'
import { Purchase } from '../models/purchase.models'
import {saveAs} from 'file-saver'
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

export const convertDate = (date: string | undefined) => {
  if(date!==undefined){
    const newDate = new Date(date)
    const year = newDate.getFullYear()
    const month = newDate.getMonth() + 1;
    const day = newDate.getDate();
    const hours = newDate.getHours();
    const minutes = newDate.getMinutes();
    const seconds = newDate.getSeconds();
    return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
  
} 

function generarNumeroAleatorio() {
  let numeroAleatorio = '';
  for (let i = 0; i < 12; i++) {
    numeroAleatorio += Math.floor(Math.random() * 10); // Genera un dígito aleatorio entre 0 y 9
  }
  return numeroAleatorio;
 }

 export const formatTime = (time:any) => {
  return format(time, 'h:mm a');
};

export const generateExcelReport = (data: Array<Purchase>) => {
  console.log(data)
  const worksheet = utils.json_to_sheet(data);

  // Crear un nuevo libro de trabajo (workbook)
  const workbook = utils.book_new();
  
  // Agregar la hoja al libro de trabajo
  utils.book_append_sheet(workbook, worksheet, 'Report');
  
  // Convertir el libro de trabajo a un archivo binario (blob)
  const binaryData = write(workbook, { bookType: 'xlsx', type: 'binary' });
  
  // Crear un ArrayBuffer a partir del archivo binario
  const buf = new ArrayBuffer(binaryData.length);
  const view = new Uint8Array(buf);
  for (let i = 0; i < binaryData.length; i++) {
    view[i] = binaryData.charCodeAt(i) & 0xFF;
  }
  
  // Crear un Blob a partir del ArrayBuffer
  const binaryBlob = new Blob([buf], { type: 'application/octet-stream' });
  
  
  let id = generarNumeroAleatorio()

  saveAs(binaryBlob, `report-${id}.xlsx`)
}