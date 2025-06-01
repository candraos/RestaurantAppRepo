import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantListingRoutingModule } from './restaurant-listing-routing.module';
import { RestaurantListingComponent } from './components/restaurant-listing.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RestaurantListingRoutingModule,
    HttpClientModule
  ]
})
export class RestaurantListingModule { }
