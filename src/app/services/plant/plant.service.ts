import { Injectable } from '@angular/core';
import {  PlantClient,AllPlantList } from '../../models/plant/plant';

@Injectable()
export class PlantService {

  constructor() { }
  getPlants():Promise<PlantClient[]>{
    return Promise.resolve(PLANTSCL);
  }

  FillListPlants():Promise<AllPlantList[]>{
    return Promise.resolve(LSTPLANT)
  }
  
  testService(){
    console.log("Desde el servicio de plantas");
  }
}

const PLANTSCL: PlantClient[] = [
  {Selected: false, PlantCode: 'DF43', Distancia: '0.0',Nombre: 'MX-PLANT-CASR',  Duracion: '00:20', CTP:'Camion' },
  {Selected: true,  PlantCode: 'DF47', Distancia: '0.0',Nombre: 'MX-PLANT-CSCY',  Duracion: '00:25', CTP:'Camion' },
  {Selected: false, PlantCode: 'DF49', Distancia: '0.0',Nombre: 'MX-PLANT-VSVK',  Duracion: '00:30', CTP:'Camion' },
  {Selected: false, PlantCode: 'DF47', Distancia: '0.0',Nombre: 'MX-PLANT-EQQE',  Duracion: '00:10', CTP:'Camion' },
  {Selected: false, PlantCode: 'DF41', Distancia: '0.0',Nombre: 'MX-PLANT-THHR',  Duracion: '00:17', CTP:'Camion' },
  {Selected: false, PlantCode: 'DF42', Distancia: '0.0',Nombre: 'MX-PLANT-HRTH',  Duracion: '00:13', CTP:'Camion' },
  {Selected: false, PlantCode: 'DF40', Distancia: '0.0',Nombre: 'MX-PLANT-NFNT',  Duracion: '00:21', CTP:'Camion' },
  {Selected: false, PlantCode: 'DF12', Distancia: '0.0',Nombre: 'MX-PLANT-NTFN',  Duracion: '00:40', CTP:'Camion' }
];

const LSTPLANT: AllPlantList[] = [
  { PlantCode: 'DF43',Nombre: 'MX-PLANT-CASR' },
  { PlantCode: 'DF47',Nombre: 'MX-PLANT-CSCY' },
  { PlantCode: 'DF49',Nombre: 'MX-PLANT-VSVK' },
  { PlantCode: 'DF47',Nombre: 'MX-PLANT-EQQE' },
  { PlantCode: 'DF41',Nombre: 'MX-PLANT-THHR' },
  { PlantCode: 'DF42',Nombre: 'MX-PLANT-HRTH' },
  { PlantCode: 'DF40',Nombre: 'MX-PLANT-NFNT' },
  { PlantCode: 'DF12',Nombre: 'MX-PLANT-NTFN' }
];