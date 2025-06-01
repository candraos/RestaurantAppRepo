import { OrderService } from './../services/order.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderDTO } from '../models/OrderDTO';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-summary',
  imports: [CommonModule],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.css'
})
export class OrderSummaryComponent {
  showDialog: boolean = false;
  orderSummary: OrderDTO;
  total?: any;
  obj:any;


  constructor(private route: ActivatedRoute,private orderService:OrderService,private router: Router) { }
ngOnInit(){
  console.log(this.route)
  const data = this.route.snapshot.queryParams['data'];
  this.obj = JSON.parse(data);
  this.obj.userId = 1;
  this.orderSummary = this.obj;
  console.log("obj = ",this.obj)

  this.total = this.orderSummary.foodItemList.reduce((accumulator,currentValue) => {
    return accumulator + (currentValue.price! * currentValue.quantity!);

  },0);
}

saveOrder(){
  this.orderService.saveOrder(this.orderSummary).subscribe((response) => {
  this.showDialog = true;
  }, (error) => {
    console.error(error);
  });

}

closeDialog() {
  this.showDialog = false;
  this.router.navigate(['/']);
}

}
