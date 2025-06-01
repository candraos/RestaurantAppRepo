import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantListingComponent } from './components/restaurant-listing.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path: '', component: RestaurantListingComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantListingRoutingModule { }
