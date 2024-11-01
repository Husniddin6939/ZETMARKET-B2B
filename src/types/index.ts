export interface InavigationType {
  path: string;
  title: string;
  icon: string;
  role: string[];
}

export type TCardPropsType = {
  icon: string;
  title: String;
  value: Number | String;
  color: String | number;
};


export interface ITableDataType {
  key: React.Key | string;
  id: string | number;
  date: string;
  fullName: string;
  phoneNumber: string;
  quentity:number;
  totalPrice:number;
  productName:string,
  status:string;
  address:string;
  paymentMethod:string;
}