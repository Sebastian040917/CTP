import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlantComponent } from './components/plant/plant.component';

import  { PlantService} from './services/plant/plant.service'

@NgModule({
  declarations: [
    AppComponent,
    PlantComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PlantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
