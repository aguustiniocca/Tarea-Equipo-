
export enum tipoCombustibles{
    gasoil = 'gasoil', GNC = 'GNC', diesel = 'diesel'
}

export class Combustible {
    id:string;
    cilindro: number;
    tipoDeCombustible: tipoCombustibles;
    

    constructor(id: string, cilindros:number, tipoCombustible:tipoCombustibles) {
        this.id = id
        this.cilindro = cilindros;
        this.tipoDeCombustible = tipoCombustible;
        
    }
    todosMotoresCom(array:Combustible[]) {
        console.log(array);
       }

       setAddMotorCom(id: Combustible, array: Combustible[]): void {

        array.push(id);
        console.log(array);
    
      }

      setEliminarMotor(id: string, array: Combustible[]) {
        let motor = array.findIndex((motor) => motor.id === id);
    
        if (motor >= 0) {
          array.splice(motor, 1);
          console.log("El motor de tipo combustible ", id, "se dio de baja");
          console.log(array);
    
          return array;
        } else {
          console.log(
            "El motor de tipo combustible ", id, " no pudo darse de baja porque no se encontro"
          )
        }
      }
      setEditarMotorCombustible(id:string, cilindro: number, tipoDeCombustible: tipoCombustibles,array:Combustible[], motor:Combustible) {
        motor.id = id
        motor.cilindro = cilindro;
        motor.tipoDeCombustible = tipoDeCombustible
        console.log(array);
    
      }
}
