import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodCatalogueRoutingModule } from './food-catalogue-routing.module';


@NgModule({
  declarations: [FoodCatalogueModule],
  imports: [
    CommonModule,
    FoodCatalogueRoutingModule
  ]
})
export class FoodCatalogueModule { }
