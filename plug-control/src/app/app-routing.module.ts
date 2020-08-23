import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ControleComponent } from './components/controle/controle.component';
import { DashboardsComponent } from './components/dashboards/dashboards.component';
import { RegistroComponent } from './components/registro/registro.component';
import { InfoContainerComponent } from './components/info-container/info-container.component';


const routes: Routes = [
  {path: '', component: ControleComponent},
  {path:'dashboards', component: DashboardsComponent},
  {path:'registro', component: RegistroComponent},
  {path:'info_container', component: InfoContainerComponent},
  {path:'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
