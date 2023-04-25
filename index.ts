import { Equipo } from "./equito";
import {Bomba} from "./bomba"
import {Motor} from "./motor"
import {Eficiencia} from "./motor"
import {Combustible, tipoCombustibles} from "./m.combustible"
import {Electrico} from "./m.electrico"
import { Mangueras, Roscas } from "./kit.mangueras";




             ///////////BOMBA//////////////
  let bomba1 = new Bomba ("bombucha", 2, 3, "payaso");
let bombaAgregar = new Bomba ("bombucharoja", 4, 8, "payaso2")
const listBomba  = [bomba1]
bomba1.todasLasBombas(listBomba)
bombaAgregar.setAddEquipament(bombaAgregar, listBomba)
bombaAgregar.setEliminarBomba("bombucharoja", listBomba)
bomba1.setEditarBomba("bombuchaverde", 23, 43, "payaso2", listBomba, bomba1)

                ///////////////MOTOR///////////////
 let motor1 = new Motor ("V8", 570, Eficiencia.a, "Ford" )
const listMotor = [motor1]
motor1.todosLosMotores(listMotor)
let motorAgregar = new Motor("V6", 580, Eficiencia.b, "Ferrari")
motorAgregar.setAddMotor(motorAgregar, listMotor)
motorAgregar.setEliminarMotor("V6", listMotor)
motor1.setEditarMotor("gasolero", 350, Eficiencia.f, "Fiat", listMotor, motor1) 

///////////////////////MOTOR COMBUSTIBLE///////////////////

 let motorCombustible1 = new Combustible ("gasoil", 8, tipoCombustibles.gasoil)
const listMotorCombustible = [motorCombustible1]
motorCombustible1.todosMotoresCom(listMotorCombustible)

let motorCombustible2 = new Combustible ("GNC", 4, tipoCombustibles.GNC)
motorCombustible2.setAddMotorCom(motorCombustible2, listMotorCombustible)

motorCombustible1.setEliminarMotor("gasoil", listMotorCombustible)

motorCombustible2.setEditarMotorCombustible("naftero", 2, tipoCombustibles.diesel, listMotorCombustible, motorCombustible2)
 

////////////////////MOTOR ELECTRICO///////////////////////

let motorElectrico1 = new Electrico ("Tesla", 900, 500, true)
const listMotorElectrico = [motorElectrico1]
motorElectrico1.todosMotoresElec(listMotorElectrico)

let motorElectrico2 = new Electrico ("VW", 500, 400, false)
motorElectrico2.setAddMotorElec(motorElectrico2,listMotorElectrico)

motorElectrico1.setEliminarMotor("Tesla", listMotorElectrico)

motorElectrico2.setEditarMotorElectrico("Teslaaaaaaa", 700, 400, false, listMotorElectrico, motorElectrico2) 


/////////////////////MANGUERAS/////////////////////

 let manguera1 = new Mangueras("Manguera de jardin", 3, 4, Roscas.polip)
let listMangueras = [manguera1]
manguera1.todasLasmangueras(listMangueras)

let manguera2 = new Mangueras ("Manguera de bombero", 8, 10, Roscas.acero)
manguera2.setAgregarManguera(manguera2, listMangueras)

manguera2.setEliminarManguera("Manguera de bombero", listMangueras)

manguera1.setEditarmanguera("Manguera de baño", 2, 3, Roscas.aluminio, listMangueras, manguera1) 

            /////////////////EQUIPO/////////////////

 let equipamiento : [] = []
 let kit = new Equipo("kit", "heladera ultima generacion", new Date("2023-03-22"), new Date("2023-05-23"), bomba1, motor1, manguera1, motorCombustible1, motorElectrico1);
let lavaropa = new Equipo("lavaropa ", "lavaropas automatico DREAM", new Date("2022-12-1"), new Date("2023-3-15"), bomba1, motor1, manguera1, motorCombustible1, motorElectrico1);
let secaropa = new Equipo("secaropa ", "secaropas automatico DREAM", new Date("2021-1-1"), new Date("2021-4-15"), bomba1, motor1, manguera1, motorCombustible1, motorElectrico1);
let laHidro = new Equipo("laHidro ", " laHidro ESCORIAL", new Date("2000-5-4"), new Date("2003-10-10"), bomba1, motor1, manguera1, motorCombustible1, motorElectrico1);  

kit.setAddEquipament(laHidro, equipamiento)
kit.setAddEquipament(kit, equipamiento);
kit.setAddEquipament(lavaropa, equipamiento)
kit.setAddEquipament(secaropa, equipamiento)
kit.setEditarEquipo(secaropa, equipamiento, "secaropa", " se fundio", new Date("2023-03-22"), new Date("2024-05-28"))
kit.setEditarEquipo(laHidro, equipamiento, "cocina", " se prendio fuego", new Date("2023-03-13"), new Date("2023-03-15"))
kit.setEliminarEquipo("lavaropa", equipamiento)
kit.getLeerEquipo("lavaropa", equipamiento)  






