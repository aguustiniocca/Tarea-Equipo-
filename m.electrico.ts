export class Electrico  {
    id: string
    voltaje: number
    consumoKwH:number
    isBajoConsumo: boolean

    constructor (id: string, voltaje: number, consumoKwH:number, isBajoConsumo: boolean){
        this.id = id
        this.voltaje = voltaje
        this.consumoKwH = consumoKwH
        this.isBajoConsumo = isBajoConsumo
    }

    todosMotoresElec(array:Electrico[]) {
        console.log(array);
       }
       setAddMotorElec(id: Electrico, array: Electrico[]): void {

        array.push(id);
        console.log(array);
    
      }

      setEliminarMotor(id: string, array: Electrico[]) {
        let motor = array.findIndex((motor) => motor.id === id);
    
        if (motor >= 0) {
          array.splice(motor, 1);
          console.log("El motor de tipo electrico ", id, "se dio de baja");
          console.log(array);
    
          return array;
        } else {
          console.log(
            "El motor de tipo electrico", id, " no pudo darse de baja porque no se encontro"
          )
        }
      }

      setEditarMotorElectrico(id:string, voltaje: number, consumoKwH: number, isBajoConsumo:boolean ,array:Electrico[], motor:Electrico) {
       motor. id = id
       motor.voltaje = voltaje
       motor.consumoKwH = consumoKwH
       motor. isBajoConsumo = isBajoConsumo
        console.log(array);
    
      }
}