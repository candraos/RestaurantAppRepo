import { FoodItem } from "../../shared/models/FoodItem";
import { Restaurant } from "../../shared/models/restaurant";

export interface OrderDTO {
   foodItemList: FoodItem[];
   userId?: number;
   restaurant?: Restaurant;
}
