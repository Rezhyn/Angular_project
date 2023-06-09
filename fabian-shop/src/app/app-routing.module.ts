import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SigninComponent } from './components/signin/signin.component';
import { MyshopsComponent } from './components/myshops/myshops.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {path:'dashboard', component:DashboardComponent},
  {path:'signin', component:SigninComponent},
  {path:'myshops', component:MyshopsComponent},
  {path:'about', component:AboutComponent},
  {path:'', redirectTo: 'dashboard', pathMatch:'full'},
  {path:'**', redirectTo: '/dashboard', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
