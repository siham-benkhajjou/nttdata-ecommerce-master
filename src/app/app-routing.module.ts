import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FillterpageComponent } from './fillterpage/fillterpage/fillterpage.component';
import { LoginComponent } from './login/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found/page-not-found.component';
const routes: Routes = [
  {path:'',component: HomeComponent},
  { path:'shop-left-side',component:FillterpageComponent},
  { path:'login',component:LoginComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
