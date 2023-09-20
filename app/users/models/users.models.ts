export interface User {
  name: string;
  document_type: string;
  document: string;
  phone: string;
  email: string;
  status: boolean;
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