import { Component, OnInit } from '@angular/core';
import { paymentMethodsDesc, dptosDesc, reservationFromDesc } from '../reserve/constants/reserve.constant';
import { ReserveService } from '../reserve/services/reserve.service';
import * as _ from 'lodash';
import { filter } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private routeSubscription: Subscription;
  reservas:any = [];
  constructor(private reserveService: ReserveService, private router:Router) { 
    this.routeSubscription = router.events.pipe(
      filter(event => event instanceof NavigationEnd)  
    ).subscribe((event: NavigationEnd) => {
      if ((event.url === '/home' || event.url === '/')  && !event.url.endsWith('#no-update')) {
        this.getList();
      }
    });
  }

  ngOnInit() {

  }

  getList() {
    this.reserveService.getAll().subscribe(
      res => {
        _.forEach(res, (item:any) => {
          item.startDate = new Date(item.startDate).toISOString().substring(0, 10);
          item.paymentMethodDesc = paymentMethodsDesc[item.paymentMethod].name;
          item.paymentMethodColor = paymentMethodsDesc[item.paymentMethod].color;
          item.dptosDesc = dptosDesc[item.dptoId].name,
          item.dptosColor = dptosDesc[item.dptoId].color,
          item.dptosBgColor = dptosDesc[item.dptoId].bgColor,
          item.reserveFromDesc = reservationFromDesc[item.reservationMethod].name,
          item.reserveFromColor = reservationFromDesc[item.reservationMethod].color
        });
        
        _.sortBy(res, [(o:any) => { return o.startDate; }])
        this.reservas = res;
      },
      err => {
        console.log(err)
      }
    );
  }

  selectedReservationId(id) {
    this.router.navigate(['/home', { outlets: { 'sidepanel':['edit', id] } }])
  }

}
