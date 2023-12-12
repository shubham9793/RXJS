import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './NavBar/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ObservablesComponent } from './Observables/observables/observables.component';
import { HomeComponent } from './Home/home/home.component';
import { PromiseComponent } from './Promises/promise/promise.component';
import { AsyncAwaitComponent } from './AsyncAwait/async-await/async-await.component';
import { FormEventComponent } from './Observables/from-event/form-event.component';
import { ListComponent } from './Observables/list/list.component';
import {MatCardModule} from '@angular/material/card';
import { IntervalComponent } from './Observables/interval/interval.component';
import { OfFromComponent } from './Observables/of-from/of-from.component';
import { ToArrayComponent } from './Observables/to-array/to-array.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ObservablesComponent,
    HomeComponent,
    PromiseComponent,
    AsyncAwaitComponent,
    FormEventComponent,
    ListComponent,
    IntervalComponent,
    OfFromComponent,
    ToArrayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
