export interface User {
  id:string;
  name: string;
  document_type: string;
  document: string;
  phone: string;
  email: string;
  status: boolean;
  password:string;
  role: string;
}

export interface UserCre {
  id:string;
  name: string;
  document_type: string;
  document: string;
  phone: string;
  email: string;
  status: boolean;
  password:string;
  role: string;
}


export interface createUser{
    name : string;
    document_type: string;
    document: string;
    phone: string;
    email : string;
    password : string;
    id_role: string;
}