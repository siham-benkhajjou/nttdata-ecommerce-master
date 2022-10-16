import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/interfaces/product.interface';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css', '../side-menu-fillter/side-menu-fillter.component.css']
})
export class ProductsListComponent implements OnInit {
  productList:Products[]=[];
  categories:any;
  productSubscription:Subscription|undefined;


constructor(private productService:ProductService) { }

ngOnInit(): void {
  this.productSubscription=this.productService.getAllProduct().subscribe(
    (data:any)=>{this.productList=data.products
     console.log(this.productList)}

     )
}
roundNumberArray(numberOfStars : number){
  let numberOfStarsRounded = Math.round(numberOfStars);
  let stars = []
  for (let index = 0; index < numberOfStarsRounded; index++) {
    stars.push('1')
  }
  return stars;
}
calculDescountPrice(price : number,discountAmount:number){
 return Math.round(price-(price*discountAmount/100));
}
}
