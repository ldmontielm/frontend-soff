export interface User {
  name: string;
  email: string;
  status: boolean;
  role: string;
}




export interface Permission{
  id: string;
  name: string;
};


export interface createUser{
    name : string;
    email : string;
    password : string;
    id_role: string;
}