import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http'
import {  PlantClient,AllPlantList } from '../../models/plant/plant';
 import { EndPoints } from '../../common/endpoints'
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";


@Injectable()
export class PlantService{
  headers: Headers;
  options: RequestOptions;

  results = [];  
  constructor(private http: Http, private _endPoints: EndPoints) {
    this.headers = new Headers({ 
      'Content-Type': 'application/json', 
      'Accept': 'q=0.8;application/json;q=0.9' 
      
    });    
    this.options = new RequestOptions({ headers: this.headers });    
 }
 
 getAllPlants(Country: string): Observable<AllPlantList[]> {
   let body = JSON.stringify({'CountryCode': Country});
    let apiURL = this._endPoints.points.GetCountryListPlant;
    return this.http.post(apiURL,body,this.options) 
        .map(res => { 
          return res.json()
          })
          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

  
  // getAllPlantsTEST():Promise<AllPlantList[]>{
  //   return Promise.resolve(LSTPLANT)
  // }

  searchAndAddPlantClient(PlantCode: string): Observable<PlantClient[]> { 

    // var newplant: PlantClient = 
    // { PlantCode: 'AA100'
    // , Distancia: '1.5'
    // , Nombre: 'MX-PLANT-CIEN'
    // , Duracion: '00:10'
    // , CTP:'Coche' };   
    let body = JSON.stringify({'PlantCode': PlantCode});
    let apiURL = this._endPoints.points.GetNewPlantClient;
    return this.http.post(apiURL,body,this.options)
        .map(res => { 
          console.log(res.json());
          return  res.json();
          })
          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

  getPlantsClient():Promise<PlantClient[]>{
    return Promise.resolve(PLANTSCL);
  }

  MandarAlert(terms): Observable<string> {
    return this.http.get("")
    .map(res=> {
      return "hola";
    })
    ;
  }

  // testService(hora:string){
  //   let horaregreso: string =hora;
  //   console.log(horaregreso);
  //   //console.log("Desde el servicio de plantas" + hora);
  //   //console.log(this.results) ;
  // }



}

const PLANTSCL: PlantClient[] = [
  { PlantCode: 'DF43', Distance: '0.0',PlantDesc: 'MX-PLANT-CASR',  Duration: '00:20', Ctp:'fa fa-tree' },
  { PlantCode: 'DF47', Distance: '0.0',PlantDesc: 'MX-PLANT-CSCY',  Duration: '00:25', Ctp:'fa fa-tree' },
  { PlantCode: 'DF49', Distance: '0.0',PlantDesc: 'MX-PLANT-VSVK',  Duration: '00:30', Ctp:'fa fa-truck' },
  { PlantCode: 'DF47', Distance: '0.0',PlantDesc: 'MX-PLANT-EQQE',  Duration: '00:10', Ctp:'fa fa-truck' },
  { PlantCode: 'DF41', Distance: '0.0',PlantDesc: 'MX-PLANT-THHR',  Duration: '00:17', Ctp:'fa fa-tree' },
  { PlantCode: 'DF42', Distance: '0.0',PlantDesc: 'MX-PLANT-HRTH',  Duration: '00:13', Ctp:'fa fa-truck' },
  { PlantCode: 'DF40', Distance: '0.0',PlantDesc: 'MX-PLANT-NFNT',  Duration: '00:21', Ctp:'fa fa-truck' },
  { PlantCode: 'DF12', Distance: '0.0',PlantDesc: 'MX-PLANT-NTFN',  Duration: '00:40', Ctp:'fa fa-tree' }
];


const LSTPLANT: AllPlantList[] = [
  {PlantCode: 'AS10', PlantDesc: 'MX- PLANT-CASR'},
  {PlantCode: 'DS11', PlantDesc: 'MX-PLANT-CCAS'},
  {PlantCode: 'GS12', PlantDesc: 'MX-PLANT-CASC'},
  {PlantCode: 'FS13', PlantDesc: 'MX-PLANT-BFFBG'},
  {PlantCode: 'GD14', PlantDesc: 'MX-PLANT-BDFB'},
  {PlantCode: 'DF15', PlantDesc: 'MX-PLANT-DBFD'},
  {PlantCode: 'RW16', PlantDesc: 'MX-PLANT-RTEG'},
  {PlantCode: 'GS17', PlantDesc: 'MX-PLANT-MHKY'},
  {PlantCode: 'BD18', PlantDesc: 'MX-PLANT-JGYD'},
  {PlantCode: 'RQ19', PlantDesc: 'MX-PLANT-DREW'},
  {PlantCode: 'TF20', PlantDesc: 'MX-PLANT-CCAA'},
  {PlantCode: 'RW21', PlantDesc: 'MX-PLANT-WWGW'},
  {PlantCode: 'DB22', PlantDesc: 'MX-PLANT-CCCQ'},
  {PlantCode: 'YT23', PlantDesc: 'MX-PLANT-CAWR'}
];