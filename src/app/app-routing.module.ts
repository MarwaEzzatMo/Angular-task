import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { FavouriteProductComponent } from './product/favourite-product/favourite-product.component';
import { ErrorPageComponent  } from './error-page/error-page.component';
import { LoginComponent } from './login/login.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { AllPhotosComponent } from './all-photos/all-photos.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'todo-list', component: ToDoListComponent },
  { path: 'product-list', component:ProductListComponent  },
  { path: 'product-details', component:ProductListComponent  },
  { path: 'prod-details/:id', component: ProductDetailsComponent },
  { path: 'fav-prod' , component: FavouriteProductComponent },
  { path: 'login', component: LoginComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'user-details/:id', component: UserDetailsComponent },
  { path: 'all-photos', component: AllPhotosComponent },
  { path: 'error-page', component: ErrorPageComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'error-page', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
