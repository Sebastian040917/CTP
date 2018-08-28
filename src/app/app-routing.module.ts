import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { ReportschartsComponent } from './components/reportscharts/reportscharts.component';
import { ClientPlantComponent } from './components/client-plant/client-plant.component';
const routes: Routes = [
  { path: 'schedules', component: ScheduleComponent },
  { path: 'client-plant', component: ClientPlantComponent },
  { path: 'reportscharts', component: ReportschartsComponent }
];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {
}
