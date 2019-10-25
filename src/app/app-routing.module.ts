import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LoginGuard } from './login.guard';

const routes: Routes = [
  {path:'portfolio', component: PortfolioComponent,  pathMatch: 'full', canActivate: [LoginGuard]},
  {path: '', component: LoginComponent, pathMatch: 'full'}   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
