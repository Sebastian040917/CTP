import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlantService } from '../../services/plant/plant.service';

@Component({
  selector: 'app-Full-reportscharts',
  templateUrl: './reportscharts.component.html',
  styleUrls: [
    './reportscharts.component.css'
  ]
})
export class ReportschartsComponent {
  @Input('parentData') incomingData: string;
  public PlantSelected: string;
  public _PlantaSeleccionada: string = "";
  HoraSeleccionada: string;



  constructor(private http: HttpClient, private _plantService: PlantService) {


    this.PlantSelected = "";
    //http.get('https://cdn.rawgit.com/gevgeny/angular2-highcharts/99c6324d/examples/aapl.json')
    //.subscribe(res => {
    this.Master = {
      title: { text: null },

      // subtitle: {
      //   text: 'AAPL stock price by minute'
      // },
      xAxis: {
        type: 'datetime',
        tickPixelInterval: 100,
        crosshair: true,
        labels: {
          style: {
            color: '#0000A0',
            cursor: 'pointer',
            fontSize: '9px'
          },
          //     useHTML: true,
          //     formatter: function() {
          //         return '<a href="javascript:console.log(this)">'+
          //             this.value +'</a>';

          // }     

        },


      },
      // navigator: {
      //   enabled: true,
      //   height: 10
      // },
      yAxis: {
        title: {
          text: null
        },
        tickPixelInterval: 2,
        labels: {
          style: {
            // color: 'red',
            fontSize: '9px'
          }
        },
        alternateGridColor: '#FDFFD5',
      },
      tooltip: {
        shared: true,
        style: { fontSize: '9px' }
      },
      legend: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      chart: {//Estilo del chart general
        // borderColor: '#EBBA95',
        // borderWidth: 2,
        // type: 'spline',
        // width: 655,
        height: 130
      },

      credits: {
        enabled: false
      },
      series: [
        {
          name: 'Cargas confirmadas',
          type: 'column',
          data: Confimadas,

        },
        {
          name: 'Cargas en proceso',
          type: 'column',
          data: EnProceso,
          color: 'orange'
        },
        {
          type: 'spline',
          dashStyle: 'longdash',
          name: 'Capacidad de unidades',
          data: URest,
          color: 'red',
          marker: { //estilo de la marca
            lineWidth: 1, //grosor
            lineColor: 'yellow', //contorno
            fillColor: 'red'//dentro
          }
        },
        {
          type: 'spline',
          name: 'Capacidad de plantas',
          data: CPlantas,
          color: 'green',//crismon
          marker: {
            lineWidth: 1,
            lineColor: 'yellow',
            fillColor: 'green'
          }
        },
        {
          type: 'spline',
          name: 'Pedidos translapados',
          data: Translapados,
          color: 'brown',//crismon
          marker: {
            lineWidth: 1,
            lineColor: 'white',
            fillColor: 'brown'
          }
        }

      ]
    };

    this.Detail = {
      color: '#FF00FF',
      title: { text: null },
      xAxis: {
        type: 'datetime',
        labels: {
          style: {
            // color: 'red',
            fontSize: '9px'
          }
        },
        tickPixelInterval: 100
      },
      yAxis: {
        title: {
          text: null
        },
        labels: {
          style: {
            // color: 'red',
            fontSize: '9px'
          }
        },
        tickPixelInterval: 1
      },
      legend: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      chart: {
        // width: 655,
        height: 64
      },

      credits: {
        enabled: false
      },
      series: [
        {
          name: 'Unidades Restantes',
          type: 'line',
          color: 'purple',
          lineWidth: 1,
          data: UnidadesReport,
          threshold: false
        }

      ]
    };
    // });
  }
  Master: Object;
  Detail: Object;

}


const Confimadas = [
  [1504742400000, 18],
  [1504746120000, 3],
  [1504746420000, 4],
  [1504746540000, 7],
  [1504746720000, 9],
  [1504746900000, 10],
  [1504747260000, 13],
  [1504747800000, 15],
  [1504749060000, 7],
  [1504752420000, 2],
  [1504754880000, 1],
  [1504761240000, 9],
  [1504773540000, 11]
];

const EnProceso = [
  [1504742400000, 3],
  [1504746120000, 5],
  [1504746420000, 9],
  [1504746540000, 17],
  [1504746720000, 5],
  [1504746900000, 13],
  [1504747260000, 3],
  [1504747800000, 2],
  [1504749060000, 15],
  [1504752420000, 17],
  [1504754880000, 8],
  [1504761240000, 12],
  [1504773540000, 1]
];

const Translapados = [
  [1504742400000, 0],
  [1504746120000, 0],
  [1504746420000, 0],
  [1504746540000, 3],
  [1504746720000, 0],
  [1504746900000, 0],
  [1504747260000, 0],
  [1504747800000, 0],
  [1504749060000, 0],
  [1504752420000, 5],
  [1504754880000, 0],
  [1504761240000, 0],
  [1504773540000, 8]
];

const URest = [
  [1504742400000, 8],
  [1504746120000, 8],
  [1504746420000, 8],
  [1504746540000, 7],
  [1504746720000, 7],
  [1504746900000, 5],
  [1504747260000, 5],
  [1504747800000, 3],
  [1504749060000, 3],
  [1504752420000, 5],
  [1504754880000, 5],
  [1504761240000, 5],
  [1504773540000, 1]
];

const CPlantas = [
  [1504742400000, 3],
  [1504746120000, 15],
  [1504746420000, 14],
  [1504746540000, 8],
  [1504746720000, 10],
  [1504746900000, 8],
  [1504747260000, 5],
  [1504747800000, 3],
  [1504749060000, 8],
  [1504752420000, 16],
  [1504754880000, 17],
  [1504761240000, 9],
  [1504773540000, 9]
];

const UnidadesReport = [
  [1504742400000, -10],
  [1504746120000, 5],
  [1504746420000, 4],
  [1504746540000, 0],
  [1504746720000, -2],
  [1504746900000, -5],
  [1504747260000, -8],
  [1504747800000, -12],
  [1504749060000, -4],
  [1504752420000, 3],
  [1504754880000, 4],
  [1504761240000, -4],
  [1504773540000, -10]



]