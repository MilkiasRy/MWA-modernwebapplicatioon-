import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HomeCounterComponent} from './home-counter/home-counter.component';
import { from } from 'rxjs';

const routes: Routes = [
  {path:'',component:HomeCounterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
