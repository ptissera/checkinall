import { Component, OnInit } from '@angular/core';
import { SessionUser } from 'src/app/pages/signin/models/session-user.model';
import { AuthenticationService } from 'src/app/pages/signin/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUserValue: SessionUser;

  constructor(
    private authenticationService: AuthenticationService,
    private router:Router
    ) { }

  ngOnInit() {
    this.authenticationService.currentUser.subscribe(currentUser => {
      this.currentUserValue = currentUser;  
    })
    this.currentUserValue = this.authenticationService.currentUserValue;
  }

  logout() {
    this.authenticationService.logout();
    this.currentUserValue = null;
    this.router.navigate(['/signin']);
  }

}
