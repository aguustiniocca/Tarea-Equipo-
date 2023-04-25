

export enum Roscas {
    aluminio = 'aluminio', acero = 'acero inoxidable', polip = 'polipropileno'
}

export class Mangueras {
    id: string;
    elementos: number;
    medidaPulgadas: number;
    roscasMaterial: Roscas;

    constructor (id:string, elementos:number, medidaPulgada:number, roscasMaterial:Roscas){
                 this. id = id
                 this. elementos = elementos
                 this.medidaPulgadas = medidaPulgada
                 this.roscasMaterial = roscasMaterial
    }

    todasLasmangueras(array:Mangueras[]) {
        console.log(array);
       }
       setAgregarManguera(id: Mangueras, array: Mangueras[]): void {

        array.push(id);
        console.log(array);
    
      }

      setEliminarManguera(id: string, array: Mangueras[]) {
        let bomba = array.findIndex((bomba) => bomba.id === id);
    
        if (bomba >= 0) {
          array.splice(bomba, 1);
          console.log("La manguera ", id, "se dio de baja");
          console.log(array);
    
          return array;
        } else {
          console.log(
            "La manguera ", id, " no pudo darse de baja porque no se encontro"
          )
        }
      }
      setEditarmanguera(id:string,elementos:number, medidaPulgadas:number, roscasMaterial: Roscas, array:Mangueras[],manguera:Mangueras) {
        manguera.id = id
        manguera.elementos = elementos;
        manguera.medidaPulgadas = medidaPulgadas;
        manguera.roscasMaterial = roscasMaterial
        console.log(array);
    
      }
}

