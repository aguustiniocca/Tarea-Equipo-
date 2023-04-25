import { Bomba } from "./bomba";
import { Motor } from "./motor";
import { Combustible} from "./m.combustible";
import { Electrico } from "./m.electrico";
import { Mangueras } from "./kit.mangueras";

let equipamiento: [] = []



export class Equipo {
  id: string;
  descripcion: string;
  fechaFabricacion: Date
  fechaInstalacion: Date
  bomba:Bomba
  motor:Motor
  mangueras: Mangueras
  combustible: Combustible
  electrico: Electrico
 


  
 

  constructor(id: string, descripcion: string, fechaFabricacion: Date, fechaInstalacion: Date,bomba:Bomba,motor:Motor, mangueras: Mangueras,combustible: Combustible,electrico: Electrico ) {
    this.id = id
    this.descripcion = descripcion
    this.fechaFabricacion = fechaFabricacion
    this.fechaInstalacion = fechaInstalacion
    this. bomba = bomba
    this. motor = motor
    this.mangueras = mangueras
    this.combustible = combustible
    this.electrico = electrico
   
   
  }

  setAddEquipament(id: Equipo, array: Equipo[]): void {

    array.push(id);
    console.log(array);

  }

  getLeerEquipo(id: string, array: Equipo[]) {

    let equipo = array.find((equipo) => equipo.id === id);
    if (equipo) {
      console.log(id, " Esta disponible ", equipo);
      return equipo;
    } else {
      console.log(id, " No esta disponible");
    }
  }

  setEliminarEquipo(id: string, array: Equipo[]) {
    let equipo = array.findIndex((equipo) => equipo.id === id);

    if (equipo >= 0) {
      array.splice(equipo, 1);
      console.log("El equipo ", id, "se dio de baja");
      console.log(array);

      return array;
    } else {
      console.log(
        "El equipo ", id, " no pudo darse de baja porque no se encontro"
      )
    }
  }

  setEditarEquipo(equipo: Equipo, array: Equipo[], id: string, descripcion: string, fechaFabricacion: Date, fechaInstalacion: Date) {
    equipo.id = id
    equipo.descripcion = descripcion;
    equipo.fechaFabricacion = fechaFabricacion;
    equipo.fechaInstalacion = fechaInstalacion;
    console.log(array);

  }

}






