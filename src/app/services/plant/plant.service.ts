import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import {  PlantClient,AllPlantList,CommentsTest } from '../../models/plant/plant';
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";

@Injectable()
export class PlantService {

  apiRoot:string = 'https://jsonplaceholder.typicode.com/comments'; 
  results = [];
  constructor( private http: Http) { 
  }

//EXAMPLE...
//   query(params: DataTableParams) {
//     return this.http.get(BASE_URL + '/people?' + paramsToQueryString(params)).toPromise()
//         .then((resp: Response) => ({
//             items: resp.json(),
//             count: Number(resp.headers.get('X-Total-Count'))
//         }));
// }

  // search(term:string) {
  //   let promise = new Promise((resolve, reject) => {
  //   let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
      
  //     this.http.get(apiURL)
  //       .toPromise()
  //       .then(
  //         res => { // Success
  //           this.results = res.json().results;
  //         resolve();
  //         },
  //         msg => { // Error
  //         reject(msg);
  //         }
  //       );
  //   });
  //   return promise;
  // }
  
  getComments(){
    let promise = new Promise((resolve, reject) => {
    // let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
      
      this.http.get(this.apiRoot).toPromise()
        .then(
          res => { // Success
            
            this.results = res.json();
          resolve();
          },
          msg => { // Error
          reject(msg);
          }
        );
    });
    return promise;  
  }

  getPlantsClient():Promise<PlantClient[]>{
    return Promise.resolve(PLANTSCL);
  }

  getAllPlants():Promise<AllPlantList[]>{
    return Promise.resolve(LSTPLANT)
  }
  
  testService(){
    console.log("Desde el servicio de plantas");
    console.log(this.results) ;
  }

  // onActivate(event) {       
  //     return '<span>HOLA<strong>prueba</strong></span>.';

  //   }

}

const PLANTSCL: PlantClient[] = [
  { PlantCode: 'DF43', Distancia: '0.0',Nombre: 'MX-PLANT-CASR',  Duracion: '00:20', CTP:'Camion' },
  { PlantCode: 'DF47', Distancia: '0.0',Nombre: 'MX-PLANT-CSCY',  Duracion: '00:25', CTP:'Camion' },
  { PlantCode: 'DF49', Distancia: '0.0',Nombre: 'MX-PLANT-VSVK',  Duracion: '00:30', CTP:'Camion' },
  { PlantCode: 'DF47', Distancia: '0.0',Nombre: 'MX-PLANT-EQQE',  Duracion: '00:10', CTP:'Camion' },
  { PlantCode: 'DF41', Distancia: '0.0',Nombre: 'MX-PLANT-THHR',  Duracion: '00:17', CTP:'Camion' },
  { PlantCode: 'DF42', Distancia: '0.0',Nombre: 'MX-PLANT-HRTH',  Duracion: '00:13', CTP:'Camion' },
  { PlantCode: 'DF40', Distancia: '0.0',Nombre: 'MX-PLANT-NFNT',  Duracion: '00:21', CTP:'Camion' },
  { PlantCode: 'DF12', Distancia: '0.0',Nombre: 'MX-PLANT-NTFN',  Duracion: '00:40', CTP:'Camion' }
];

const LSTPLANT: AllPlantList[] = [
    {PlantCode: 'AS10',Nombre: 'MX-PLANT-CASR'},
    {PlantCode: 'DS11',Nombre: 'MX-PLANT-CCAS'},
    {PlantCode: 'GS12',Nombre: 'MX-PLANT-CASC'},
    {PlantCode: 'FS13',Nombre: 'MX-PLANT-BFFBG'},
    {PlantCode: 'GD14',Nombre: 'MX-PLANT-BDFB'},
    {PlantCode: 'DF15',Nombre: 'MX-PLANT-DBFD'},
    {PlantCode: 'RW16',Nombre: 'MX-PLANT-RTEG'},
    {PlantCode: 'GS17',Nombre: 'MX-PLANT-MHKY'},
    {PlantCode: 'BD18',Nombre: 'MX-PLANT-JGYD'},
    {PlantCode: 'RQ19',Nombre: 'MX-PLANT-DREW'},
    {PlantCode: 'TF20',Nombre: 'MX-PLANT-CCAA'},
    {PlantCode: 'RW21',Nombre: 'MX-PLANT-WWGW'},
    {PlantCode: 'DB22',Nombre: 'MX-PLANT-CCCQ'},
    {PlantCode: 'YT23',Nombre: 'MX-PLANT-CAWR'}
];

var data =[
  {
      "name": "Ethel Price",
      "gender": "female",
      "company": "Johnson, Johnson and Partners, LLC CMP DDC",
      "age": 22
  },
  {
      "name": "Claudine Neal",
      "gender": "female",
      "company": "Sealoud",
      "age": 55
  },
  {
      "name": "Beryl Rice",
      "gender": "female",
      "company": "Velity",
      "age": 67
  },
  {
      "name": "Wilder Gonzales",
      "gender": "male",
      "company": "Geekko"
  },
  {
      "name": "Georgina Schultz",
      "gender": "female",
      "company": "Suretech"
  },
  {
      "name": "Carroll Buchanan",
      "gender": "male",
      "company": "Ecosys"
  },
  {
      "name": "Valarie Atkinson",
      "gender": "female",
      "company": "Hopeli"
  },
  {
      "name": "Schroeder Mathews",
      "gender": "male",
      "company": "Polarium"
  },
  {
      "name": "Lynda Mendoza",
      "gender": "female",
      "company": "Dogspa"
  },
  {
      "name": "Sarah Massey",
      "gender": "female",
      "company": "Bisba"
  },
  {
      "name": "Robles Boyle",
      "gender": "male",
      "company": "Comtract"
  },
  {
      "name": "Evans Hickman",
      "gender": "male",
      "company": "Parleynet"
  },
  {
      "name": "Dawson Barber",
      "gender": "male",
      "company": "Dymi"
  },
  {
      "name": "Bruce Strong",
      "gender": "male",
      "company": "Xyqag"
  },
  {
      "name": "Nellie Whitfield",
      "gender": "female",
      "company": "Exospace"
  },
  {
      "name": "Jackson Macias",
      "gender": "male",
      "company": "Aquamate"
  },
  {
      "name": "Pena Pena",
      "gender": "male",
      "company": "Quarx"
  },
  {
      "name": "Lelia Gates",
      "gender": "female",
      "company": "Proxsoft"
  },
  {
      "name": "Letitia Vasquez",
      "gender": "female",
      "company": "Slumberia"
  },
  {
      "name": "Trevino Moreno",
      "gender": "male",
      "company": "Conjurica"
  },
  {
      "name": "Barr Page",
      "gender": "male",
      "company": "Apex"
  },
  {
      "name": "Kirkland Merrill",
      "gender": "male",
      "company": "Utara"
  },
  {
      "name": "Blanche Conley",
      "gender": "female",
      "company": "Imkan"
  },
  {
      "name": "Atkins Dunlap",
      "gender": "male",
      "company": "Comveyor"
  },
  {
      "name": "Everett Foreman",
      "gender": "male",
      "company": "Maineland"
  },
  {
      "name": "Gould Randolph",
      "gender": "male",
      "company": "Intergeek"
  },
  {
      "name": "Kelli Leon",
      "gender": "female",
      "company": "Verbus"
  },
  {
      "name": "Freda Mason",
      "gender": "female",
      "company": "Accidency"
  },
  {
      "name": "Tucker Maxwell",
      "gender": "male",
      "company": "Lumbrex"
  },
  {
      "name": "Yvonne Parsons",
      "gender": "female",
      "company": "Zolar"
  },
  {
      "name": "Woods Key",
      "gender": "male",
      "company": "Bedder"
  },
  {
      "name": "Stephens Reilly",
      "gender": "male",
      "company": "Acusage"
  },
  {
      "name": "Mcfarland Sparks",
      "gender": "male",
      "company": "Comvey"
  },
  {
      "name": "Jocelyn Sawyer",
      "gender": "female",
      "company": "Fortean"
  },
  {
      "name": "Renee Barr",
      "gender": "female",
      "company": "Kiggle"
  },
  {
      "name": "Gaines Beck",
      "gender": "male",
      "company": "Sequitur"
  },
  {
      "name": "Luisa Farrell",
      "gender": "female",
      "company": "Cinesanct"
  },
  {
      "name": "Robyn Strickland",
      "gender": "female",
      "company": "Obones"
  },
  {
      "name": "Roseann Jarvis",
      "gender": "female",
      "company": "Aquazure"
  },
  {
      "name": "Johnston Park",
      "gender": "male",
      "company": "Netur"
  },
  {
      "name": "Wong Craft",
      "gender": "male",
      "company": "Opticall"
  },
  {
      "name": "Merritt Cole",
      "gender": "male",
      "company": "Techtrix"
  },
  {
      "name": "Dale Byrd",
      "gender": "female",
      "company": "Kneedles"
  },
  {
      "name": "Sara Delgado",
      "gender": "female",
      "company": "Netagy"
  },
  {
      "name": "Alisha Myers",
      "gender": "female",
      "company": "Intradisk"
  },
  {
      "name": "Felecia Smith",
      "gender": "female",
      "company": "Futurity"
  },
  {
      "name": "Neal Harvey",
      "gender": "male",
      "company": "Pyramax"
  },
  {
      "name": "Nola Miles",
      "gender": "female",
      "company": "Sonique"
  },
  {
      "name": "Herring Pierce",
      "gender": "male",
      "company": "Geeketron"
  },
  {
      "name": "Shelley Rodriquez",
      "gender": "female",
      "company": "Bostonic"
  },
  {
      "name": "Cora Chase",
      "gender": "female",
      "company": "Isonus"
  },
  {
      "name": "Mckay Santos",
      "gender": "male",
      "company": "Amtas"
  },
  {
      "name": "Hilda Crane",
      "gender": "female",
      "company": "Jumpstack"
  },
  {
      "name": "Jeanne Lindsay",
      "gender": "female",
      "company": "Genesynk"
  },
  {
      "name": "Frye Sharpe",
      "gender": "male",
      "company": "Eplode"
  },
  {
      "name": "Velma Fry",
      "gender": "female",
      "company": "Ronelon"
  },
  {
      "name": "Reyna Espinoza",
      "gender": "female",
      "company": "Prismatic"
  },
  {
      "name": "Spencer Sloan",
      "gender": "male",
      "company": "Comverges"
  },
  {
      "name": "Graham Marsh",
      "gender": "male",
      "company": "Medifax"
  },
  {
      "name": "Hale Boone",
      "gender": "male",
      "company": "Digial"
  },
  {
      "name": "Wiley Hubbard",
      "gender": "male",
      "company": "Zensus"
  },
  {
      "name": "Blackburn Drake",
      "gender": "male",
      "company": "Frenex"
  },
  {
      "name": "Franco Hunter",
      "gender": "male",
      "company": "Rockabye"
  },
  {
      "name": "Barnett Case",
      "gender": "male",
      "company": "Norali"
  },
  {
      "name": "Alexander Foley",
      "gender": "male",
      "company": "Geekosis"
  },
  {
      "name": "Lynette Stein",
      "gender": "female",
      "company": "Macronaut"
  },
  {
      "name": "Anthony Joyner",
      "gender": "male",
      "company": "Senmei"
  },
  {
      "name": "Garrett Brennan",
      "gender": "male",
      "company": "Bluegrain"
  },
  {
      "name": "Betsy Horton",
      "gender": "female",
      "company": "Zilla"
  },
  {
      "name": "Patton Small",
      "gender": "male",
      "company": "Genmex"
  },
  {
      "name": "Lakisha Huber",
      "gender": "female",
      "company": "Insource"
  },
  {
      "name": "Lindsay Avery",
      "gender": "female",
      "company": "Unq"
  },
  {
      "name": "Ayers Hood",
      "gender": "male",
      "company": "Accuprint"
  },
  {
      "name": "Torres Durham",
      "gender": "male",
      "company": "Uplinx"
  },
  {
      "name": "Vincent Hernandez",
      "gender": "male",
      "company": "Talendula"
  },
  {
      "name": "Baird Ryan",
      "gender": "male",
      "company": "Aquasseur"
  },
  {
      "name": "Georgia Mercer",
      "gender": "female",
      "company": "Skyplex"
  },
  {
      "name": "Francesca Elliott",
      "gender": "female",
      "company": "Nspire"
  },
  {
      "name": "Lyons Peters",
      "gender": "male",
      "company": "Quinex"
  },
  {
      "name": "Kristi Brewer",
      "gender": "female",
      "company": "Oronoko"
  },
  {
      "name": "Tonya Bray",
      "gender": "female",
      "company": "Insuron"
  },
  {
      "name": "Valenzuela Huff",
      "gender": "male",
      "company": "Applideck"
  },
  {
      "name": "Tiffany Anderson",
      "gender": "female",
      "company": "Zanymax"
  },
  {
      "name": "Jerri King",
      "gender": "female",
      "company": "Eventex"
  },
  {
      "name": "Rocha Meadows",
      "gender": "male",
      "company": "Goko"
  },
  {
      "name": "Marcy Green",
      "gender": "female",
      "company": "Pharmex"
  },
  {
      "name": "Kirk Cross",
      "gender": "male",
      "company": "Portico"
  },
  {
      "name": "Hattie Mullen",
      "gender": "female",
      "company": "Zilencio"
  },
  {
      "name": "Deann Bridges",
      "gender": "female",
      "company": "Equitox"
  },
  {
      "name": "Chaney Roach",
      "gender": "male",
      "company": "Qualitern"
  },
  {
      "name": "Consuelo Dickson",
      "gender": "female",
      "company": "Poshome"
  },
  {
      "name": "Billie Rowe",
      "gender": "female",
      "company": "Cemention"
  },
  {
      "name": "Bean Donovan",
      "gender": "male",
      "company": "Mantro"
  },
  {
      "name": "Lancaster Patel",
      "gender": "male",
      "company": "Krog"
  },
  {
      "name": "Rosa Dyer",
      "gender": "female",
      "company": "Netility"
  },
  {
      "name": "Christine Compton",
      "gender": "female",
      "company": "Bleeko"
  },
  {
      "name": "Milagros Finch",
      "gender": "female",
      "company": "Handshake"
  },
  {
      "name": "Ericka Alvarado",
      "gender": "female",
      "company": "Lyrichord"
  },
  {
      "name": "Sylvia Sosa",
      "gender": "female",
      "company": "Circum"
  },
  {
      "name": "Humphrey Curtis",
      "gender": "male",
      "company": "Corepan"
  }
]