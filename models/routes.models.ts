export enum Routes{
  CREATESALE = '/sales',
  CREATEPURCHASE = '/purchases',
  CREATEPRODUCT = '/products',
  CREATEPROVIDER = '/providers',
  USERS='/users',
  ROLES='/roles',
  SUPPLIES='/supplies'
}

export enum RoutesApi {
  SALES = 'http://localhost:8000/sales',
  PURCHASES = 'http://localhost:8000/purchases',
  PRODUCTS = 'http://localhost:8000/products',
  PROVIDERS= 'http://localhost:8000/providers',
  ROLES = 'http://localhost:8000/roles',
  SUPPLIES = 'http://localhost:8000/supplies',
  USERS = 'http://localhost:8000/users',
  PERMISSIONS = 'http://localhost:8000/permissions',
  AUTH='http://localhost:8000/auth'
}