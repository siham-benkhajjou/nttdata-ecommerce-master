import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/interfaces/product.interface';
import{ ProductService } from 'src/app/service/product/product.service'

@Component({
  selector: 'app-fillterpage',
  templateUrl: './fillterpage.component.html',
  styleUrls: ['./fillterpage.component.css']
})
export class FillterpageComponent implements OnInit {
  productsList:Products | any;
  categories:any;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {

  }

}
