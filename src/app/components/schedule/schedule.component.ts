import { Component, Input, Renderer2, OnDestroy } from '@angular/core';
// import { PlantService } from "../../services/plant/plant.service";
import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})


export class ScheduleComponent implements OnDestroy {
  popiedad1: string;
  public html = `
  <strong>Never trust not sanitized HTML!!!</strong>`;
  subs = new Subscription();
  constructor(private renderer: Renderer2,private dragulaService: DragulaService) {
    this.ListenHour();

    // this.subs.add(dragulaService.drag('schedule-rows')
    //   .subscribe(({ name, el, source }) => {
    //     console.log(el)
    //   })
    // );
    dragulaService.createGroup('schedule-rows', {
      moves: function (el, source, handle, sibling) {
        console.log(el.className);
        return el.classList.contains('nuevo') ? true : false
      },
    });
  }

ngOnDestroy(): void {
  this.dragulaService.destroy('schedule-rows');
}

  ListenHour() {
    let global = this.renderer.listen('document', 'click', (evt) => {
      if (evt.target.innerHTML.length == 5 && evt.target.nodeName == "tspan") {
        console.log(evt.target.innerHTML);
      }
    })
  }


  listTables: Array<string> = ['A', 'B', 'C'];
  //  datosX=models2;
  dat = models;
  numerator = 0;

  configTables = _configTables;
  myMethod(event) {
    // console.log(event)
    this.html = `
    <table class="table-sm" style="text-align: left; margin-left:300px;">
    <tbody>
      <tr>
        <td>Order Number</td>
        <td colspan="2">8000516480</td>
      </tr>
      <tr>
        <td>Load</td>
        <td colspan="2">80005</td>
      </tr>
      <tr>
        <td>Status</td>
        <td colspan="2">Ok</td>
      </tr>
      <tr>
        <td>Product</td>
        <td colspan="2">0516480</td>
      </tr>
      <tr>
        <td>Delivery</td>
        <td>Date: 19/02/2017</td>
        <td>Time: 14:00</td>
      </tr>
      <tr>
        <td>Load</td>
        <td>Date: 19/02/2017</td>
        <td>Time: 14:00</td>
      </tr>
      <tr>
        <td>Requirement</td>
        <td>Date: 19/02/2017</td>
        <td>Time: 14:00</td>
      </tr>
      <tr>
        <td>Optimal plant</td>
        <td colspan="2">F12</td>
      </tr>
      <tr>
        <td>Customer</td>
        <td colspan="2">Washington 2000 Oriente Esq. Diagonal Asarco, Obrera, Centro, 64010 Monterrey, NL</td>
      </tr>
      <tr>
        <td>Job Site</td>
        <td colspan="2">Washington 2000 Oriente Esq. Diagonal Asarco, Obrera, Centro, 64010 Monterrey, NL</td>
      </tr>    
    </tbody>
  </table>    
    `
  }

}

const _configTables =
  [
    {
      type: "A",
      placement: "right"
    },
    {
      type: "B",
      placement: "left"
    },
    {
      type: "C",
      placement: "left"
    },
  ]

const models =
  [
    {
      type: "A",
      RangeHourTitle: "de 1 a 2",
      schedule: [
        {
          listName: "1:00 PM",
          items: [
            {
              "order": "8000516480",
              "loadNumber": "001316",
              "status": "NA",
              "product": "1-250-2C-28-12-0-1-001",
              "vol": "7.000",
              "site": "UDEM SANTA CATARINA",
              "tt": "00:00",
              "delivery": "2012-04-23T18:25:43.511Z",
              "load": "2012-04-23T18:25:43.511Z",
              "requirement": "2012-04-23T18:25:43.511Z",
              "optimalPlant": "DF12",
              "customer": "Number/Description: 56871548 - St Hugitamoto San test HSB",
              "jobSite": "207/5th aveneu thoson: 56871548 - Lorem ipsum dolor",
              "statusRow": "nuevo",
              "drag": true
            },
          ]

        },
        {
          listName: "2:00 PM",
          items: [
            {
              "order": "8000516481",
              "loadNumber": "001316",
              "status": "NA",
              "product": "1-250-2C-28-12-0-1-001",
              "vol": "7.000",
              "site": "UDEM SANTA CATARINA",
              "tt": "00:00",
              "delivery": "2012-04-23T18:25:43.511Z",
              "load": "2012-04-23T18:25:43.511Z",
              "requirement": "2012-04-23T18:25:43.511Z",
              "optimalPlant": "DF12",
              "customer": "Number/Description: 56871548 - St Hugitamoto San test HSB",
              "jobSite": "207/5th aveneu thoson: 56871548 - Lorem ipsum dolor",
              "statusRow": "fijo",
              "drag": false
            }
          ]
        },
        {
          listName: "3:00 PM",
          items: [
            {
              "order": "8000516482",
              "loadNumber": "001316",
              "status": "NA",
              "product": "1-250-2C-28-12-0-1-001",
              "vol": "7.000",
              "site": "UDEM SANTA CATARINA",
              "tt": "00:00",
              "delivery": "2012-04-23T18:25:43.511Z",
              "load": "2012-04-23T18:25:43.511Z",
              "requirement": "2012-04-23T18:25:43.511Z",
              "optimalPlant": "DF12",
              "customer": "Number/Description: 56871548 - St Hugitamoto San test HSB",
              "jobSite": "207/5th aveneu thoson: 56871548 - Lorem ipsum dolor",
              "statusRow": "fijo",
              "drag": false
            }
          ]
        },
        {
          listName: "4:00 PM"
          , items: [
            {
              "order": "8000516483",
              "loadNumber": "001316",
              "status": "NA",
              "product": "1-250-2C-28-12-0-1-001",
              "vol": "7.000",
              "site": "UDEM SANTA CATARINA",
              "tt": "00:00",
              "delivery": "2012-04-23T18:25:43.511Z",
              "load": "2012-04-23T18:25:43.511Z",
              "requirement": "2012-04-23T18:25:43.511Z",
              "optimalPlant": "DF12",
              "customer": "Number/Description: 56871548 - St Hugitamoto San test HSB",
              "jobSite": "207/5th aveneu thoson: 56871548 - Lorem ipsum dolor",
              "statusRow": "fijo",
              "drag": false
            }
          ]
        },
        {
          listName: "5:00 PM"
          , items: [
            {
              "order": "8000516484",
              "loadNumber": "001316",
              "status": "NA",
              "product": "1-250-2C-28-12-0-1-001",
              "vol": "7.000",
              "site": "UDEM SANTA CATARINA",
              "tt": "00:00",
              "delivery": "2012-04-23T18:25:43.511Z",
              "load": "2012-04-23T18:25:43.511Z",
              "requirement": "2012-04-23T18:25:43.511Z",
              "optimalPlant": "DF12",
              "customer": "Number/Description: 56871548 - St Hugitamoto San test HSB",
              "jobSite": "207/5th aveneu thoson: 56871548 - Lorem ipsum dolor",
              "statusRow": "fijo",
              "drag": false
            }
          ]
        },
        {
          listName: "6:00 PM"
          , items: [
            {
              "order": "8000516485",
              "loadNumber": "001316",
              "status": "NA",
              "product": "1-250-2C-28-12-0-1-001",
              "vol": "7.000",
              "site": "UDEM SANTA CATARINA",
              "tt": "00:00",
              "delivery": "2012-04-23T18:25:43.511Z",
              "load": "2012-04-23T18:25:43.511Z",
              "requirement": "2012-04-23T18:25:43.511Z",
              "optimalPlant": "DF12",
              "customer": "Number/Description: 56871548 - St Hugitamoto San test HSB",
              "jobSite": "207/5th aveneu thoson: 56871548 - Lorem ipsum dolor",
              "statusRow": "fijo",
              "drag": false
            }
          ]
        },
        {
          listName: "7:00 PM"
          , items: [
            {
              "order": "8000516486",
              "loadNumber": "001316",
              "status": "NA",
              "product": "1-250-2C-28-12-0-1-001",
              "vol": "7.000",
              "site": "UDEM SANTA CATARINA",
              "tt": "00:00",
              "delivery": "2012-04-23T18:25:43.511Z",
              "load": "2012-04-23T18:25:43.511Z",
              "requirement": "2012-04-23T18:25:43.511Z",
              "optimalPlant": "DF12",
              "customer": "Number/Description: 56871548 - St Hugitamoto San test HSB",
              "jobSite": "207/5th aveneu thoson: 56871548 - Lorem ipsum dolor",
              "statusRow": "nuevo",
              "drag": true
            }
          ]
        },
        {
          listName: "8:00 PM"
          , items: [
            {
              "order": "8000516487",
              "loadNumber": "001316",
              "status": "NA",
              "product": "1-250-2C-28-12-0-1-001",
              "vol": "7.000",
              "site": "UDEM SANTA CATARINA",
              "tt": "00:00",
              "delivery": "2012-04-23T18:25:43.511Z",
              "load": "2012-04-23T18:25:43.511Z",
              "requirement": "2012-04-23T18:25:43.511Z",
              "optimalPlant": "DF12",
              "customer": "Number/Description: 56871548 - St Hugitamoto San test HSB",
              "jobSite": "207/5th aveneu thoson: 56871548 - Lorem ipsum dolor",
              "statusRow": "fijo",
              "drag": false
            }
          ]
        },
        {
          listName: "9:00 PM"
          , items: [
            {
              "order": "8000516488",
              "loadNumber": "001316",
              "status": "NA",
              "product": "1-250-2C-28-12-0-1-001",
              "vol": "7.000",
              "site": "UDEM SANTA CATARINA",
              "tt": "00:00",
              "delivery": "2012-04-23T18:25:43.511Z",
              "load": "2012-04-23T18:25:43.511Z",
              "requirement": "2012-04-23T18:25:43.511Z",
              "optimalPlant": "DF12",
              "customer": "Number/Description: 56871548 - St Hugitamoto San test HSB",
              "jobSite": "207/5th aveneu thoson: 56871548 - Lorem ipsum dolor",
              "statusRow": "nuevo",
              "drag": true
            }
          ]
        },
        {
          listName: "10:00 PM"
          , items: [
            {
              "order": "8000516489",
              "loadNumber": "001316",
              "status": "NA",
              "product": "1-250-2C-28-12-0-1-001",
              "vol": "7.000",
              "site": "UDEM SANTA CATARINA",
              "tt": "00:00",
              "delivery": "2012-04-23T18:25:43.511Z",
              "load": "2012-04-23T18:25:43.511Z",
              "requirement": "2012-04-23T18:25:43.511Z",
              "optimalPlant": "DF12",
              "customer": "Number/Description: 56871548 - St Hugitamoto San test HSB",
              "jobSite": "207/5th aveneu thoson: 56871548 - Lorem ipsum dolor",
              "statusRow": "fijo",
              "drag": false
            }
          ]
        }

      ]
    },
    {
      type: "B",
      RangeHourTitle: "de 2 a 3",
      schedule: [
        {
          listName: "1:00 PM",
          items: [
            {
              "order": "8000516480",
              "loadNumber": "001316",
              "status": "NA",
              "product": "1-250-2C-28-12-0-1-001",
              "vol": "7.000",
              "site": "UDEM SANTA CATARINA",
              "tt": "00:00",
              "delivery": "2012-04-23T18:25:43.511Z",
              "load": "2012-04-23T18:25:43.511Z",
              "requirement": "2012-04-23T18:25:43.511Z",
              "optimalPlant": "DF12",
              "customer": "Number/Description: 56871548 - St Hugitamoto San test HSB",
              "jobSite": "207/5th aveneu thoson: 56871548 - Lorem ipsum dolor",
              "statusRow": "nuevo",
              "drag": true
            },
          ]

        },
        {
          listName: "2:00 PM",
          items: [
            {
              "order": "8000516481",
              "loadNumber": "001316",
              "status": "NA",
              "product": "1-250-2C-28-12-0-1-001",
              "vol": "7.000",
              "site": "UDEM SANTA CATARINA",
              "tt": "00:00",
              "delivery": "2012-04-23T18:25:43.511Z",
              "load": "2012-04-23T18:25:43.511Z",
              "requirement": "2012-04-23T18:25:43.511Z",
              "optimalPlant": "DF12",
              "customer": "Number/Description: 56871548 - St Hugitamoto San test HSB",
              "jobSite": "207/5th aveneu thoson: 56871548 - Lorem ipsum dolor",
              "statusRow": "fijo",
              "drag": false
            }
          ]
        },
        {
          listName: "3:00 PM",
          items: [
            {
              "order": "8000516482",
              "loadNumber": "001316",
              "status": "NA",
              "product": "1-250-2C-28-12-0-1-001",
              "vol": "7.000",
              "site": "UDEM SANTA CATARINA",
              "tt": "00:00",
              "delivery": "2012-04-23T18:25:43.511Z",
              "load": "2012-04-23T18:25:43.511Z",
              "requirement": "2012-04-23T18:25:43.511Z",
              "optimalPlant": "DF12",
              "customer": "Number/Description: 56871548 - St Hugitamoto San test HSB",
              "jobSite": "207/5th aveneu thoson: 56871548 - Lorem ipsum dolor",
              "statusRow": "fijo",
              "drag": false
            }
          ]
        },
        {
          listName: "4:00 PM"
          , items: [
            {
              "order": "8000516483",
              "loadNumber": "001316",
              "status": "NA",
              "product": "1-250-2C-28-12-0-1-001",
              "vol": "7.000",
              "site": "UDEM SANTA CATARINA",
              "tt": "00:00",
              "delivery": "2012-04-23T18:25:43.511Z",
              "load": "2012-04-23T18:25:43.511Z",
              "requirement": "2012-04-23T18:25:43.511Z",
              "optimalPlant": "DF12",
              "customer": "Number/Description: 56871548 - St Hugitamoto San test HSB",
              "jobSite": "207/5th aveneu thoson: 56871548 - Lorem ipsum dolor",
              "statusRow": "fijo",
              "drag": false
            }
          ]
        },
        {
          listName: "5:00 PM"
          , items: [
            {
              "order": "8000516484",
              "loadNumber": "001316",
              "status": "NA",
              "product": "1-250-2C-28-12-0-1-001",
              "vol": "7.000",
              "site": "UDEM SANTA CATARINA",
              "tt": "00:00",
              "delivery": "2012-04-23T18:25:43.511Z",
              "load": "2012-04-23T18:25:43.511Z",
              "requirement": "2012-04-23T18:25:43.511Z",
              "optimalPlant": "DF12",
              "customer": "Number/Description: 56871548 - St Hugitamoto San test HSB",
              "jobSite": "207/5th aveneu thoson: 56871548 - Lorem ipsum dolor",
              "statusRow": "fijo",
              "drag": false
            }
          ]
        },
        {
          listName: "6:00 PM"
          , items: [
            {
              "order": "8000516485",
              "loadNumber": "001316",
              "status": "NA",
              "product": "1-250-2C-28-12-0-1-001",
              "vol": "7.000",
              "site": "UDEM SANTA CATARINA",
              "tt": "00:00",
              "delivery": "2012-04-23T18:25:43.511Z",
              "load": "2012-04-23T18:25:43.511Z",
              "requirement": "2012-04-23T18:25:43.511Z",
              "optimalPlant": "DF12",
              "customer": "Number/Description: 56871548 - St Hugitamoto San test HSB",
              "jobSite": "207/5th aveneu thoson: 56871548 - Lorem ipsum dolor",
              "statusRow": "fijo",
              "drag": false
            }
          ]
        },
        {
          listName: "7:00 PM"
          , items: [
            {
              "order": "8000516486",
              "loadNumber": "001316",
              "status": "NA",
              "product": "1-250-2C-28-12-0-1-001",
              "vol": "7.000",
              "site": "UDEM SANTA CATARINA",
              "tt": "00:00",
              "delivery": "2012-04-23T18:25:43.511Z",
              "load": "2012-04-23T18:25:43.511Z",
              "requirement": "2012-04-23T18:25:43.511Z",
              "optimalPlant": "DF12",
              "customer": "Number/Description: 56871548 - St Hugitamoto San test HSB",
              "jobSite": "207/5th aveneu thoson: 56871548 - Lorem ipsum dolor",
              "statusRow": "nuevo",
              "drag": true
            }
          ]
        },
        {
          listName: "8:00 PM"
          , items: [
            {
              "order": "8000516487",
              "loadNumber": "001316",
              "status": "NA",
              "product": "1-250-2C-28-12-0-1-001",
              "vol": "7.000",
              "site": "UDEM SANTA CATARINA",
              "tt": "00:00",
              "delivery": "2012-04-23T18:25:43.511Z",
              "load": "2012-04-23T18:25:43.511Z",
              "requirement": "2012-04-23T18:25:43.511Z",
              "optimalPlant": "DF12",
              "customer": "Number/Description: 56871548 - St Hugitamoto San test HSB",
              "jobSite": "207/5th aveneu thoson: 56871548 - Lorem ipsum dolor",
              "statusRow": "fijo",
              "drag": false
            }
          ]
        },
        {
          listName: "9:00 PM"
          , items: [
            {
              "order": "8000516488",
              "loadNumber": "001316",
              "status": "NA",
              "product": "1-250-2C-28-12-0-1-001",
              "vol": "7.000",
              "site": "UDEM SANTA CATARINA",
              "tt": "00:00",
              "delivery": "2012-04-23T18:25:43.511Z",
              "load": "2012-04-23T18:25:43.511Z",
              "requirement": "2012-04-23T18:25:43.511Z",
              "optimalPlant": "DF12",
              "customer": "Number/Description: 56871548 - St Hugitamoto San test HSB",
              "jobSite": "207/5th aveneu thoson: 56871548 - Lorem ipsum dolor",
              "statusRow": "nuevo",
              "drag": true
            }
          ]
        },
        {
          listName: "10:00 PM"
          , items: [
            {
              "order": "8000516489",
              "loadNumber": "001316",
              "status": "NA",
              "product": "1-250-2C-28-12-0-1-001",
              "vol": "7.000",
              "site": "UDEM SANTA CATARINA",
              "tt": "00:00",
              "delivery": "2012-04-23T18:25:43.511Z",
              "load": "2012-04-23T18:25:43.511Z",
              "requirement": "2012-04-23T18:25:43.511Z",
              "optimalPlant": "DF12",
              "customer": "Number/Description: 56871548 - St Hugitamoto San test HSB",
              "jobSite": "207/5th aveneu thoson: 56871548 - Lorem ipsum dolor",
              "statusRow": "fijo",
              "drag": false
            }
          ]
        }

      ]
    },
    {
      type: "C",
      RangeHourTitle: "de 3 a 4",
      schedule: [
        {
          listName: "1:00 PM",
          items: [
            {
              "order": "8000516480",
              "loadNumber": "001316",
              "status": "NA",
              "product": "1-250-2C-28-12-0-1-001",
              "vol": "7.000",
              "site": "UDEM SANTA CATARINA",
              "tt": "00:00",
              "delivery": "2012-04-23T18:25:43.511Z",
              "load": "2012-04-23T18:25:43.511Z",
              "requirement": "2012-04-23T18:25:43.511Z",
              "optimalPlant": "DF12",
              "customer": "Number/Description: 56871548 - St Hugitamoto San test HSB",
              "jobSite": "207/5th aveneu thoson: 56871548 - Lorem ipsum dolor",
              "statusRow": "nuevo",
              "drag": true
            },
          ]

        },
        {
          listName: "2:00 PM",
          items: [
            {
              "order": "8000516481",
              "loadNumber": "001316",
              "status": "NA",
              "product": "1-250-2C-28-12-0-1-001",
              "vol": "7.000",
              "site": "UDEM SANTA CATARINA",
              "tt": "00:00",
              "delivery": "2012-04-23T18:25:43.511Z",
              "load": "2012-04-23T18:25:43.511Z",
              "requirement": "2012-04-23T18:25:43.511Z",
              "optimalPlant": "DF12",
              "customer": "Number/Description: 56871548 - St Hugitamoto San test HSB",
              "jobSite": "207/5th aveneu thoson: 56871548 - Lorem ipsum dolor",
              "statusRow": "fijo",
              "drag": false
            }
          ]
        },
        {
          listName: "3:00 PM",
          items: [
            {
              "order": "8000516482",
              "loadNumber": "001316",
              "status": "NA",
              "product": "1-250-2C-28-12-0-1-001",
              "vol": "7.000",
              "site": "UDEM SANTA CATARINA",
              "tt": "00:00",
              "delivery": "2012-04-23T18:25:43.511Z",
              "load": "2012-04-23T18:25:43.511Z",
              "requirement": "2012-04-23T18:25:43.511Z",
              "optimalPlant": "DF12",
              "customer": "Number/Description: 56871548 - St Hugitamoto San test HSB",
              "jobSite": "207/5th aveneu thoson: 56871548 - Lorem ipsum dolor",
              "statusRow": "fijo",
              "drag": false
            }
          ]
        },
        {
          listName: "4:00 PM"
          , items: [
            {
              "order": "8000516483",
              "loadNumber": "001316",
              "status": "NA",
              "product": "1-250-2C-28-12-0-1-001",
              "vol": "7.000",
              "site": "UDEM SANTA CATARINA",
              "tt": "00:00",
              "delivery": "2012-04-23T18:25:43.511Z",
              "load": "2012-04-23T18:25:43.511Z",
              "requirement": "2012-04-23T18:25:43.511Z",
              "optimalPlant": "DF12",
              "customer": "Number/Description: 56871548 - St Hugitamoto San test HSB",
              "jobSite": "207/5th aveneu thoson: 56871548 - Lorem ipsum dolor",
              "statusRow": "fijo",
              "drag": false
            }
          ]
        },
        {
          listName: "5:00 PM"
          , items: [
            {
              "order": "8000516484",
              "loadNumber": "001316",
              "status": "NA",
              "product": "1-250-2C-28-12-0-1-001",
              "vol": "7.000",
              "site": "UDEM SANTA CATARINA",
              "tt": "00:00",
              "delivery": "2012-04-23T18:25:43.511Z",
              "load": "2012-04-23T18:25:43.511Z",
              "requirement": "2012-04-23T18:25:43.511Z",
              "optimalPlant": "DF12",
              "customer": "Number/Description: 56871548 - St Hugitamoto San test HSB",
              "jobSite": "207/5th aveneu thoson: 56871548 - Lorem ipsum dolor",
              "statusRow": "fijo",
              "drag": false
            }
          ]
        },
        {
          listName: "6:00 PM"
          , items: [
            {
              "order": "8000516485",
              "loadNumber": "001316",
              "status": "NA",
              "product": "1-250-2C-28-12-0-1-001",
              "vol": "7.000",
              "site": "UDEM SANTA CATARINA",
              "tt": "00:00",
              "delivery": "2012-04-23T18:25:43.511Z",
              "load": "2012-04-23T18:25:43.511Z",
              "requirement": "2012-04-23T18:25:43.511Z",
              "optimalPlant": "DF12",
              "customer": "Number/Description: 56871548 - St Hugitamoto San test HSB",
              "jobSite": "207/5th aveneu thoson: 56871548 - Lorem ipsum dolor",
              "statusRow": "fijo",
              "drag": false
            }
          ]
        },
        {
          listName: "7:00 PM"
          , items: [
            {
              "order": "8000516486",
              "loadNumber": "001316",
              "status": "NA",
              "product": "1-250-2C-28-12-0-1-001",
              "vol": "7.000",
              "site": "UDEM SANTA CATARINA",
              "tt": "00:00",
              "delivery": "2012-04-23T18:25:43.511Z",
              "load": "2012-04-23T18:25:43.511Z",
              "requirement": "2012-04-23T18:25:43.511Z",
              "optimalPlant": "DF12",
              "customer": "Number/Description: 56871548 - St Hugitamoto San test HSB",
              "jobSite": "207/5th aveneu thoson: 56871548 - Lorem ipsum dolor",
              "statusRow": "nuevo",
              "drag": true
            }
          ]
        },
        {
          listName: "8:00 PM"
          , items: [
            {
              "order": "8000516487",
              "loadNumber": "001316",
              "status": "NA",
              "product": "1-250-2C-28-12-0-1-001",
              "vol": "7.000",
              "site": "UDEM SANTA CATARINA",
              "tt": "00:00",
              "delivery": "2012-04-23T18:25:43.511Z",
              "load": "2012-04-23T18:25:43.511Z",
              "requirement": "2012-04-23T18:25:43.511Z",
              "optimalPlant": "DF12",
              "customer": "Number/Description: 56871548 - St Hugitamoto San test HSB",
              "jobSite": "207/5th aveneu thoson: 56871548 - Lorem ipsum dolor",
              "statusRow": "fijo",
              "drag": false
            }
          ]
        },
        {
          listName: "9:00 PM"
          , items: [
            {
              "order": "8000516488",
              "loadNumber": "001316",
              "status": "NA",
              "product": "1-250-2C-28-12-0-1-001",
              "vol": "7.000",
              "site": "UDEM SANTA CATARINA",
              "tt": "00:00",
              "delivery": "2012-04-23T18:25:43.511Z",
              "load": "2012-04-23T18:25:43.511Z",
              "requirement": "2012-04-23T18:25:43.511Z",
              "optimalPlant": "DF12",
              "customer": "Number/Description: 56871548 - St Hugitamoto San test HSB",
              "jobSite": "207/5th aveneu thoson: 56871548 - Lorem ipsum dolor",
              "statusRow": "nuevo",
              "drag": true
            }
          ]
        },
        {
          listName: "10:00 PM"
          , items: [
            {
              "order": "8000516489",
              "loadNumber": "001316",
              "status": "NA",
              "product": "1-250-2C-28-12-0-1-001",
              "vol": "7.000",
              "site": "UDEM SANTA CATARINA",
              "tt": "00:00",
              "delivery": "2012-04-23T18:25:43.511Z",
              "load": "2012-04-23T18:25:43.511Z",
              "requirement": "2012-04-23T18:25:43.511Z",
              "optimalPlant": "DF12",
              "customer": "Number/Description: 56871548 - St Hugitamoto San test HSB",
              "jobSite": "207/5th aveneu thoson: 56871548 - Lorem ipsum dolor",
              "statusRow": "fijo",
              "drag": false
            }
          ]
        }

      ]
    }
  ];
