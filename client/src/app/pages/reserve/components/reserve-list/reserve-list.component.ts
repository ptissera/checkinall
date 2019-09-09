import { Component, OnInit, OnDestroy } from '@angular/core';
import { ReserveService } from '../../services/reserve.service';
import { Router, NavigationEnd } from '@angular/router';
import { paymentMethodsDesc } from '../../constants/reserve.constant';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import * as _ from 'lodash';

@Component({
  selector: 'app-reserve-list',
  templateUrl: './reserve-list.component.html',
  styleUrls: ['./reserve-list.component.css']
})
export class ReserveListComponent implements OnInit, OnDestroy {
  
  private routeSubscription: Subscription;
  private list: any = []

  constructor(private reserveService: ReserveService,private router: Router) {
    this.routeSubscription = router.events.pipe(
      filter(event => event instanceof NavigationEnd)  
    ).subscribe((event: NavigationEnd) => {

      if (event.url === '/reserve' && !event.url.endsWith('#no-update')) {
        this.getList();
      }
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }

  ngOnInit() {
    //this.getList();
  }

  getList() {
    this.reserveService.getAll().subscribe(
      res => {
        _.forEach(res, (item:any) => {
          item.startDate = new Date(item.startDate).toISOString().substring(0, 10);
          item.paymentMethodDescription = paymentMethodsDesc[item.paymentMethod];
        });
        this.list = res;
      },
      err => {
        console.log(err)
      }
    );
  }

  delete(id:number) {
    this.reserveService.delete(id).subscribe(
      res => {
        this.getList();
      },
      err => {
        console.log(err);
      }
    );
  }

}
