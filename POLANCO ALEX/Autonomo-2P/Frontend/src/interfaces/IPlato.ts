

export interface IRPlato{
    platos: Plato[]
}

export interface Plato{
    _id?:string
    nombreplato:string
    calidad:string
    peso:string

}


/*la interface debe tener escrito los atributos 
de la misma manera que estan en la base de datos
o como aparece al hacer un console log en la 
*/