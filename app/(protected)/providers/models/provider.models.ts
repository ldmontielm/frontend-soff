export interface Provider {
  id: string;
  nit: string;
  name: string;
  company: string;
  address: string;
  // email: string;
  phone: string;
  city: string;
  status: boolean;
}


export interface ProviderCreate{
  nit: string;
  name: string;
  company: string;
  address: string;
  // email: string;
  phone: string;
  city: string;
}

// export interface ProviderUpdate{
//   name: string;
//   company: string;
//   address: string;
//   email: string;
//   phone: string;
//   city: string;
// }

export interface ProviderDelete{
  id: string;
  name: string;
  company: string;
  address: string;
  date_registration: string;
  email: string;
  phone: string;
  city: string;
  status: boolean;
}



