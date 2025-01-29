import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { CounterModule } from './counter/components/counter/counter.module';
import { AppRoutingModule } from './app-routing.module';
import { heroresModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    heroresModule,
    DbzModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
