import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarComponent } from './car/car.component';
import { DashboardPage } from './dashboard.page';
import { HomeComponent } from './home/home.component';
import { OfficeComponent } from './office/office.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    children: [
      {
        path:'', redirectTo:'home',pathMatch:'full'
      },
      {
        path: 'home',
        component : HomeComponent
      },
      {
         path:'office',
         component: OfficeComponent
      },
      {
        path: 'car',
        component: CarComponent

      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
