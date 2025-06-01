import { Component } from '@angular/core';
import { Restaurant } from '../../shared/models/restaurant';
import { Router } from '@angular/router';
import { RestaurantService } from '../services/restaurant-service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-restaurant-listing',
  imports: [CommonModule],
  templateUrl: './restaurant-listing.component.html',
  styleUrl: './restaurant-listing.component.css'
})
export class RestaurantListingComponent {
public restaurantList: Restaurant[];

ngOnInit() {
  console.log("Restaurant Listing Component Initialized");
  this.getAllRestaurants();
}
  getAllRestaurants() {
    console.log("Fetching all restaurants...");
   this.restaurantService.getAllRestaurants().subscribe(
      (response: Restaurant[]) => {
        console.log(response);
        this.restaurantList = response;
      }
    )
  }

  getRandomImage(): string{
    const imageCount = 5;
    const randomIndex = Math.floor(Math.random() * imageCount) + 1;
    return `${randomIndex}.jpg`;
  }

  onButtonClick(id?: number) {
    this.router.navigate(['/food-catalogue', id]);
  }

constructor(private router: Router, private restaurantService: RestaurantService) {}
  
}
