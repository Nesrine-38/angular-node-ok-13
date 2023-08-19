export interface Address{
    number:string;
    street:string;
    city:string;
    country:string;
}

export interface Person {
    _id?:any;
    name:string;
    age:number;
    address:Address;
}