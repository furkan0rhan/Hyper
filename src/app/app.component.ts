import {Component, OnInit} from '@angular/core';
import {InputText} from 'primeng/inputtext';
import {Ripple} from 'primeng/ripple';
import {StyleClass} from 'primeng/styleclass';
import {BadgeDirective} from 'primeng/badge';
import {IconField} from 'primeng/iconfield';
import {InputIcon} from 'primeng/inputicon';
import {HttpService} from '../services/http.service';
import {Rating} from 'primeng/rating';
import {ButtonDirective} from 'primeng/button';
import {FormsModule} from '@angular/forms';
import {CurrencyPipe} from '@angular/common';

interface db {
  createDate: any,
  customerStoreID: any,
  id: any,
  marketPrice: any,
  productCategoryID: any,
  productCommentData: any,
  productData: any,
  productID: any,
  productName: any,
  productSlug: any,
  salePrice: any,
  sellersData: any,
  value: number
}

@Component({
  selector: 'app-root',
  imports: [Ripple, StyleClass, BadgeDirective, InputText, IconField, InputIcon, Rating, ButtonDirective, FormsModule, CurrencyPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'hyperTask';
  data: db[] = [];
  visible: boolean = false;

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    // this.http.post('Login/Customer/Api/Token', {
    //   email: "demo@hyper.com",
    //   password: "hyper123"
    // }, (f: any) => {
    //   console.log(f);
    // });

    this.http.post('customertracking/list',{},(f: any) => {
      if (f.data.length > 0){
        this.visible = true;
      }

      f.data.map((item: any) => {
        let productDataParse = JSON.parse(item.productData);
        let productCommentDataParse = JSON.parse(item.productCommentData);
        const a = {
          createDate: item.createDate,
          customerStoreID: item.customerStoreID,
          id: item.id,
          marketPrice: item.marketPrice,
          productCategoryID: item.productCategoryID,
          productCommentData: productCommentDataParse,
          productData: productDataParse,
          productID: item.productID,
          productName: item.productName,
          productSlug: item.productSlug,
          salePrice: item.salePrice,
          sellersData: item.sellersData,
          value: 3
        }

        this.data.push(a);
      });
    });
  }
}
