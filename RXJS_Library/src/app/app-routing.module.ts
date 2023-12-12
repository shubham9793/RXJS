import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncAwaitComponent } from './AsyncAwait/async-await/async-await.component';
import { HomeComponent } from './Home/home/home.component';
import { ObservablesComponent } from './Observables/observables/observables.component';
import { PromiseComponent } from './Promises/promise/promise.component';
import { ListComponent } from './Observables/list/list.component';
import { FormEventComponent } from './Observables/from-event/form-event.component';
import { IntervalComponent } from './Observables/interval/interval.component';
import { OfFromComponent } from './Observables/of-from/of-from.component';
import { ToArrayComponent } from './Observables/to-array/to-array.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
   
  },
  {
    path:'observalebles',
    component:ObservablesComponent,
    children:[
      {
        path:'',
        component:ListComponent
      },
      {
        path:'formEvent',
        component:FormEventComponent
      },
      {
        path:'interval-timer',
        component:IntervalComponent
      },{
        path:'of-from',
        component:OfFromComponent
      },
      {
        path:'toArray',
        component:ToArrayComponent
      }
    ]
  },
  {
    path:'promises',
    component:PromiseComponent,
  },
  {
    path:'asyncWait',
    component:AsyncAwaitComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




