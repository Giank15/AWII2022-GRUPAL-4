export class Preparacion{

  constructor(

    public _id: string,
    public fecha: string,
    public hora: string,
    public cantidad: number,
    public costo: number,
    public tiempoEst: string,
    public idCocinero: string,
    public idReceta: string

  ){}

}
