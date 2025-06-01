import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RestaurantListingComponent } from './restaurant-listing/components/restaurant-listing.component';
import { FoodCatalogueComponent } from './food-catalogue/components/food-catalogue.component';
import { OrderSummaryComponent } from './order-summary/components/order-summary.component';

export const routes: Routes = [
    { path: '', component: RestaurantListingComponent },
    {path: 'food-catalogue/:id', component: FoodCatalogueComponent, data: { renderMode: 'ssr' }},
    {path: 'orderSummary', component: OrderSummaryComponent}
];
