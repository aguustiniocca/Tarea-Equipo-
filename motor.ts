

let motor: [] = []

export enum Eficiencia  {
    a = 10, b =8, c=6, d=4, f=2
}

export class Motor  {
    id: string;
    potenciaHp: number;
    eficiencia: Eficiencia;
    fabricante: string;

    constructor (id: string, potenciaHp: number, eficiencia: Eficiencia, fabricante: string){
                  this.id = id
                  this.potenciaHp = potenciaHp;
                  this.eficiencia = eficiencia;
                  this.fabricante = fabricante
    }


    todosLosMotores(array:Motor[]) {
        console.log(array);
       }

       setAddMotor(id: Motor, array: Motor[]): void {

        array.push(id);
        console.log(array);
    
      }
      setEliminarMotor(id: string, array: Motor[]) {
        let motor = array.findIndex((motor) => motor.id === id);
    
        if (motor >= 0) {
          array.splice(motor, 1);
          console.log("El motor ", id, "se dio de baja");
          console.log(array);
    
          return array;
        } else {
          console.log(
            "El motor ", id, " no pudo darse de baja porque no se encontro"
          )
        }
      }
      setEditarMotor(id:string,potenciaHp: number,eficiencia: Eficiencia,fabricante: string,array:Motor[],motor:Motor) {
        motor.id = id
        motor.potenciaHp = potenciaHp;
        motor.eficiencia = eficiencia;
        motor.fabricante = fabricante
        console.log(array);
    
      }
}

