import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';
import { HomeComponent } from './home/home.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductCardComponent } from './product/product-card/product-card.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { StringSlicePipe } from './string-slice.pipe';
import { FavouriteProductComponent } from './product/favourite-product/favourite-product.component';
import { ErrorPageComponent } from './error-page/error-page.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    FooterComponent,
    AsideComponent,
    HomeComponent,
    ToDoListComponent,
    ProductListComponent,
    ProductCardComponent,
    ProductDetailsComponent,
    StringSlicePipe,
    FavouriteProductComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
