import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './common/home/home.component';
import { MainpageComponent } from './common/mainpage/mainpage.component';
import { AddcartComponent } from './pages/addcart/addcart.component';
import { LoginComponent } from './pages/login/login.component';
import { ShowcartComponent } from './pages/showcart/showcart.component';
import { ViewcartComponent } from './pages/viewcart/viewcart.component';

const routes: Routes = [
  {path:'',redirectTo:'app',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'app',component:MainpageComponent,children:[
    {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'cats/:cat',component:ShowcartComponent},
{path:'add',component:AddcartComponent},
{path:'view/:id',component:ViewcartComponent},
{path:'**',redirectTo:'home',pathMatch:'full'}
]},
{path:'**',redirectTo:'app',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
