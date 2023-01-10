

export interface IRMesero{

    meseros:Mesero[]
}

export interface Mesero{
    _id?:string;
    nombre:string
    cedula:string
    sueldobasico:string
    nivel:string
}