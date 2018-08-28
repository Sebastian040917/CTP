import { Injectable } from '@angular/core';

@Injectable()
export class EndPoints {
    // public Server = 'http://10.26.94.167:82/';
    // public Local= '';
    public ApiUrl = '/api/';

    points ={
        GetCountryListPlant: this.ApiUrl + "plants/getPlants",
        GetNewPlantClient: this.ApiUrl + "plants/getPlant" 
    };

}
