import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar/nav-bar.component';
import { HeroSectionComponent } from './hero-section/hero-section/hero-section.component';
import { FooterComponent } from './footer/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderSectionComponent } from './fillterpage/header-section/header-section.component';
import { HomeComponent } from './home/home.component';
import { FillterpageComponent } from './fillterpage/fillterpage/fillterpage.component'
import { SideMenuFillterComponent } from './fillterpage/side-menu-fillter/side-menu-fillter.component';
import { DiscountFillterComponent } from './fillterpage/discount-fillter/discount-fillter.component';
import { RatingFillterComponent } from './fillterpage/rating-fillter/rating-fillter.component';
import { CategoriesFillterComponent } from './fillterpage/categories-fillter/categories-fillter.component';
import { PriceFillterComponent } from './fillterpage/price-fillter/price-fillter.component';
import { ProductsListComponent } from './fillterpage/products-list/products-list.component';
import { TopNavFillterComponent } from './fillterpage/top-nav-fillter/top-nav-fillter.component';
import { LoginComponent } from './login/login/login.component';
import { ProductComponent } from './prouduct/product/product.component';
import { LoginCardComponent } from './login/login-card/login-card.component';
import { LoginHeaderSectionComponent } from './login/login-header-section/login-header-section.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found/page-not-found.component';
import { Header404Component } from './page-not-found/header404/header404.component';
import { NotFoundBodyComponent } from './page-not-found/not-found-body/not-found-body.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    HeroSectionComponent,
    FooterComponent,
    HeaderSectionComponent,
    HomeComponent,
    FillterpageComponent,
    SideMenuFillterComponent,
    DiscountFillterComponent,
    RatingFillterComponent,
    CategoriesFillterComponent,
    PriceFillterComponent,
    ProductsListComponent,
    TopNavFillterComponent,
    LoginComponent,
    ProductComponent,
    LoginCardComponent,
    LoginHeaderSectionComponent,
    PageNotFoundComponent,
    Header404Component,
    NotFoundBodyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
