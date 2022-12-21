import {Customer} from "./customer";

export interface Trading {
  id?: number
  idTrade?: string
  customer: Customer
  date?: string
  type?: string
  price?: number
  area?: number
}

