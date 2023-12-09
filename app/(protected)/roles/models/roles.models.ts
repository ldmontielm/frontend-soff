export interface Role{
  id: string;
  name: string;
  Permissions: string;
  status: boolean;
};

export interface createRole{
  name: string;
};
  
export interface PermissionRole{
  id_role: string;
  id_permission: string;
  name: string;
}
  
export interface createPermissionRole{
  id_role: string;
  id_permission: string;
}