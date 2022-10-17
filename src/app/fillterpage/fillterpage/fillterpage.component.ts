import { Component, OnInit } from '@angular/core';
import {Subscription } from 'rxjs';
import { Products } from 'src/app/interfaces/product.interface';
import{ ProductService } from 'src/app/service/product/product.service'

@Component({
  selector: 'app-fillterpage',
  templateUrl: './fillterpage.component.html',
  styleUrls: ['./fillterpage.component.css']
})
export class FillterpageComponent implements OnInit {
  productList:Products[]=[];
  categories:any;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getAllProducts()
    this.getCategories()
  }
  ngOnDestroy(): void {

  }
  calculDescountPrice(price: number, discountAmount: number) {
    return Math.round(price - (price * discountAmount / 100));
  }

  calcNumberOfStars(numberOfStars: number) {
    let numberOfStarsRounded = Math.round(numberOfStars);
    let stars = []
    for (let index = 0; index < numberOfStarsRounded; index++) {
      stars.push('1')
    }
    return stars;
  }
  getAllProducts() {
    this.productService.getAllProduct().subscribe(
      (data :any) => {
        this.productList = data.products
      }
    )
  }

  getCategories() {
  this.productService.getAllCategories().subscribe((data: any) => {
      this.categories = data
    })
  }
  onChange(e: any) {
    let value = e.target.value;
    if (value == "All") {
      this.getAllProducts()
    }
    else {
      this.getProductByCategory(value)
    }
  }

  getProductByCategory(category: string) {
    this.productService.getProductByCategory(category).subscribe(
      (data: any) => {
        this.productList = data.products

      }
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

}
