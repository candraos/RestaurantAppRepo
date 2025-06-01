import { FoodCatalogue } from './../../shared/models/FoodCatalogue';
import { FooditemService } from './../services/fooditem.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FoodItem } from '../../shared/models/FoodItem';

@Component({
  selector: 'app-food-catalogue',
  imports: [CommonModule],
  templateUrl: './food-catalogue.component.html',
  styleUrl: './food-catalogue.component.css'
})
export class FoodCatalogueComponent {
restaurantId: number;
  foodItemResponse: FoodCatalogue;
  foodItemCart: FoodItem[] = [];
  orderSummary: FoodCatalogue;
constructor(private route: ActivatedRoute,private foodItemService:FooditemService, private router: Router){}

ngOnInit(){
  this.route.paramMap.subscribe(params => {
    this.restaurantId = +params.get('id')!;
  });

  this.getFoodItemsByRestaurant(this.restaurantId);
}
  getFoodItemsByRestaurant(restaurantId: number) {
    this.foodItemService.getFoodItemsByRestaurant(restaurantId).subscribe(
      data => {
        this.foodItemResponse = data;
      }
    );
  }

  increment(food:any){
    food.quantity++;
    const index = this.foodItemCart.findIndex(item => item.id === food.id);
    if(index === -1) {
      this.foodItemCart.push(food);
    }else{
      this.foodItemCart[index] = food;
    }
    console.log(this.foodItemCart);

  }

  decrement(food:any){
   if(food.quantity > 0){
    food.quantity--;
    const index = this.foodItemCart.findIndex(item => item.id === food.id);
    if(this.foodItemCart[index].quantity == 0) {
      this.foodItemCart.splice(index, 1);
    }else{
      this.foodItemCart[index] = food;
    }
  }
console.log(this.foodItemCart);
}

onCheckOut() {
  this.orderSummary = {
    foodItemList: [],
    restaurant: this.foodItemResponse.restaurant
  }
  this.orderSummary.foodItemList = this.foodItemCart;
  this.orderSummary.restaurant = this.foodItemResponse.restaurant;
  console.log(this.orderSummary);
  this.router.navigate(['/orderSummary'], {queryParams :{data: JSON.stringify(this.orderSummary)}});
}
}
