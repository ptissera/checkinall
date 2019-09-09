import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router, NavigationEnd } from '@angular/router';

import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {
  
  private routeSubscription: Subscription;
  private list: any = []

  constructor(private userService: UserService,private router: Router) {
    this.routeSubscription = router.events.pipe(
      filter(event => event instanceof NavigationEnd)  
    ).subscribe((event: NavigationEnd) => {

      if (event.url === '/user' && !event.url.endsWith('#no-update')) {
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
    this.userService.getAll().subscribe(
      res => {
        this.list = res;
      },
      err => {
        console.log(err)
      }
    );
  }

  delete(id:number) {
    this.userService.delete(id).subscribe(
      res => {
        this.getList();
      },
      err => {
        console.log(err);
      }
    );
  }

}
