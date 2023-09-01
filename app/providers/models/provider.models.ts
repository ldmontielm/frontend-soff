export interface Provider {
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


export interface ProviderCreate{
  name: string;
  company: string;
  address: string;
  email: string;
  phone: string;
  city: string;
}