import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TradingComponent} from './trading/trading.component';
import {NgxPaginationModule} from "ngx-pagination";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { TradingCreateComponent } from './trading-create/trading-create.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'trading'},
  {path: 'trading', component: TradingComponent},
  {path: 'trading-create', component:TradingCreateComponent},
  // {path: 'customer-edit/:id', component:CustomerEditComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    TradingComponent,
    TradingCreateComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule,
    BrowserModule,
    NgxPaginationModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      progressBar: true,
      progressAnimation: 'increasing',
      preventDuplicates: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
