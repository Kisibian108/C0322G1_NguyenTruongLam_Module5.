import { Component, OnInit } from '@angular/core';
import {Customer} from "../model/customer";
import {Trading} from "../model/trading";
import {FormGroup} from "@angular/forms";
import {TradingService} from "../service/trading.service";
import {CustomerService} from "../service/customer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-trading',
  templateUrl: './trading.component.html',
  styleUrls: ['./trading.component.css']
})

export class TradingComponent implements OnInit {

  customers: Customer[] = [];
  tradings: Trading[] = [];
  idDelete: number = 0
  idTrade: string | undefined
  date: string | undefined
  type: string | undefined
  price: number | undefined
  area: number | undefined
  phone: string | undefined
  email: string | undefined
  name: string | undefined
  p: number = 0;

  constructor(
    private customerService: CustomerService,
    private tradingService: TradingService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.tradingService.getAll().subscribe(tradings => {
        this.tradings = tradings;});
  }

  showDelete(trading: Trading) {
    this.idDelete = trading.id ||0
    this.idTrade = trading.idTrade;
    this.date = trading.date;
    this.type = trading.type;
    this.price = trading.price;
    this.area = trading.area
    this.name = trading.customer.name
    this.phone = trading.customer.phone
    this.email = trading.customer.email
  }

  deleteTrading(id: number) {
    this.tradingService.deleteTrading(id).subscribe(() => {
      this.router.navigate(['/trading']).then(r => this.ngOnInit());
    }, e => {
      console.log(e);
    });
  }

  search(): void {
    this.tradingService.findTradingByName(this.name||'').subscribe(tradingList => {
      this.tradings = tradingList;
    });
  }
}
