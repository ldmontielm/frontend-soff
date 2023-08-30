export interface User {
  id: string;
  name: string;
  email: string;
  pasword: string;
  status: boolean;
  id_role: string;
}


export interface Role{
  id: string;
  name: string;
  status: boolean;
};


export interface Permission{
  id: string;
  name: string;
};

export interface PermissionRole{
  id_role: string;
  id_permission: string;
}

export interface createUser{
    name : string;
    email : string;
    password : string;
    id_role: string;
}