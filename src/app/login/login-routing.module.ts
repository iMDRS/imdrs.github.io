import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';


const routes: Routes = [
  {
    path:'esp_login',
    component:LoginComponent,
    //children: [{ path: '2', component: HomeComponent }],
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
