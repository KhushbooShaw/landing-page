import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { GameCardComponent } from '../game-card/game-card.component';
const routes: Routes =[
  { path: 'login', component:LoginComponent},
  {
    path: 'game-by-categoryId/:id',
    component: GameCardComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]

})
export class RoutingModule { }
