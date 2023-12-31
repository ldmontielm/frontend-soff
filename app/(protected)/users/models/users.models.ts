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
export interface UserStatus {
  name : string;
  document_type: string;
  document: string;
  phone: string;
  email : string;
  password : string;
  id_role: string;
  status: boolean;
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
export interface updateUser{
    name : string;
    document_type: string;
    document: string;
    phone: string;
    email : string;
    id_role: string;
}