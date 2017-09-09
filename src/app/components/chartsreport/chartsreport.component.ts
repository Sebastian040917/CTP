import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";

@Component({
  selector: 'app-chartsreports',
  templateUrl: './chartsreport.component.html',
  styleUrls: ['./chartsreport.component.css']
})
export class ChartsreportComponent  {
  constructor(private http: Http) {
    //http.get('https://cdn.rawgit.com/gevgeny/angular2-highcharts/99c6324d/examples/aapl.json')
    //.subscribe(res => {
        this.options = {
            //title : { text : 'SECOND' },  
            xAxis: {  
              type: 'datetime',
              tickPixelInterval: 100
              }, 
              yAxis: {
                title: {
                    text: null
                },
                opposite: false,
                tickPixelInterval: 21,
                alternateGridColor: '#FDFFD5'
                // labels: {
                //     format: '{value} u'
                //   }
                },
                
          chart: {//Estilo del chart general
                // borderColor: '#EBBA95',
                // borderWidth: 2,
               // type: 'spline',
                width: 720,
                height: 340
            },
            scrollbar: {
              enabled: false
          },
            rangeSelector: {
              //selected: 1,
              enabled:false
          },
          
          navigation: {
            buttonOptions: {
                enabled: false
            }
        },
        navigator: {          
          adaptToUpdatedData: true,
          series: {
            type: 'line',
            color: 'purple',
            lineWidth: 1,
            //'stroke-width': 2,
            //stroke: 'red',
            dashStyle: 'DashDot',
            
              data: [
                [1504742400000,0],
                [1504746120000,15],
                [1504746420000,14],
                [1504746540000,11],
                [1504746720000,9],
                [1504746900000,8],
                [1504747260000,5],
                [1504747800000,3],
                [1504749060000,11],
                [1504752420000,16],
                [1504754880000,17],
                [1504761240000,9],
                [1504773540000,7] 
              ]
          }
      },

            credits: {
              enabled: false
          },
        //   plotOptions: {
        //     series: {
        //         //showInNavigator: true
        //     }
        // },
        series : [   
          {
            name: 'Cargas confirmadas',
            type: 'column',
            lineWidth: 3,
            data: Confimadas,
            //gapSize: 100,
            // tooltip: {
            //     valueDecimals: 0,
            //     formatter: function () {
            //       return '<b>' + this.series.name + '</b><br/>' + this.x1;
            //     }
            //   },
                     
            // fillColor: {
            //     linearGradient: {
            //         x1: 0,
            //         y1: 0,
            //         x2: 0,
            //         y2: 1
            //     },
            //     //  stops: [
            //     //   [0, 'red'],
            //     //   [1, '#E0E0E0']
            //     //  ]
            // },
            // threshold: true
        },       
          {
          type: 'spline',
          dashStyle:'longdash',
          name: 'Unidades restantes',
          data: URest,
          color:'red',
          marker: { //estilo de la marca
              lineWidth: 1, //grosor
              lineColor: 'yellow', //contorno
              fillColor: 'red'//dentro
            }        
          }  ,
          {
          type: 'spline',
          name: 'Capacidad de plantas',
          data: CPlantas,
          color:'brown',//crismon
          marker: {
              lineWidth: 2,
              lineColor: 'purple',
              fillColor: 'red'
            }        
          }
                  
          ]
        };
   // });
}
options: Object;
}


const Confimadas = [
  [1504742400000,18],
  [1504746120000,3],
  [1504746420000,4],
  [1504746540000,7],
  [1504746720000,9],
  [1504746900000,10],
  [1504747260000,13],
  [1504747800000,15],
  [1504749060000,7],
  [1504752420000,2],
  [1504754880000,1],
  [1504761240000,9],
  [1504773540000,11]   
];

const URest = [
  [1504742400000,8],
  [1504746120000,8],
  [1504746420000,8],
  [1504746540000,7],
  [1504746720000,7],
  [1504746900000,5],
  [1504747260000,5],
  [1504747800000,3],
  [1504749060000,3],
  [1504752420000,5],
  [1504754880000,5],
  [1504761240000,5],
  [1504773540000,1]  
];

const CPlantas = [
  [1504742400000,3],
  [1504746120000,15],
  [1504746420000,14],
  [1504746540000,8],
  [1504746720000,10],
  [1504746900000,8],
  [1504747260000,5],
  [1504747800000,3],
  [1504749060000,8],
  [1504752420000,16],
  [1504754880000,17],
  [1504761240000,9],
  [1504773540000,9]  
]; 