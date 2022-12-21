import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CustomerService} from "../service/customer.service";
import {TradingService} from "../service/trading.service";
import {Customer} from "../model/customer";
import {Trading} from "../model/trading";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-trading-create',
  templateUrl: './trading-create.component.html',
  styleUrls: ['./trading-create.component.css']
})
export class TradingCreateComponent implements OnInit {

  customers: Customer[] = []

  tradingForm = new FormGroup({
    id: new FormControl(),
    customer: new FormControl(this.customers[0]),
    idTrade: new FormControl('', [Validators.required, Validators.pattern('^(MGD-)+[0-9]{4}$')]),
    date: new FormControl('', this.dateValidate),
    type: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.min(500000)]),
    area: new FormControl('', [Validators.required, Validators.min(20)]),
  });

  submit() {
    const trading = this.tradingForm.value;
    this.tradingService.saveTrading(trading).subscribe(() => {
      this.tradingForm.reset();
      // alert("them moi thanh cong")
      this.toastrService.success("Them moi thanh cong")
      this.router.navigate(['trading']).then(r => console.log(r))
    }, e => {
      console.log(e);
    });
  }

  constructor(private customerService: CustomerService,
              private tradingService: TradingService,
              private router: Router,
              private toastrService: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.customerService.getAll().subscribe(customers => {
      this.customers = customers
    })
  }

  dateValidate(dob: AbstractControl) {
    const now = new Date();
    const past = new Date(dob.value);
    const diff = now.getDate() - past.getDate();
    if (diff > 0) {
      return {'Error': true};
    }
    return null;
  }
}
