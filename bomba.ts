export  class Bomba  {
    id:string; 
    caudalEntrada: number;
     caudalSalida: number;
     fabricante: string;

    constructor (id: string, entrada: number,salida: number,fabricante: string){
        this.id = id;
        this.caudalEntrada = entrada;
        this.caudalSalida = salida;
        this.fabricante = fabricante;
                
               
    }

    todasLasBombas(array:Bomba[]) {
        console.log(array);
       }

       setAddEquipament(id: Bomba, array: Bomba[]): void {

        array.push(id);
        console.log(array);
    
      }
      setEliminarBomba(id: string, array: Bomba[]) {
        let bomba = array.findIndex((bomba) => bomba.id === id);
    
        if (bomba >= 0) {
          array.splice(bomba, 1);
          console.log("La bomba ", id, "se dio de baja");
          console.log(array);
    
          return array;
        } else {
          console.log(
            "La bomba ", id, " no pudo darse de baja porque no se encontro"
          )
        }
      }
      setEditarBomba(id:string,caudalEntrada: number,caudalSalida: number,fabricante: string, array:Bomba[],bomba:Bomba ) {
        bomba.id = id
        bomba.caudalEntrada = caudalEntrada;
        bomba.caudalSalida = caudalSalida;
        console.log(array);
    
      }
    
}


