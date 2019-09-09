import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  thisForm = this.fb.group({
    displayName: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    isAdmin: [false],
    image: ['']
  });

  id: number = 0;

  constructor(private fb: FormBuilder, private userService: UserService,
    private router:Router, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    const {id} = this.activedRoute.snapshot.params;
    if (id) {
      this.id = id;
      this.userService.getOne(this.id).subscribe(
        res => {
          this.thisForm.patchValue(res);
        },
        err => console.log(err)
      );
    }
  }

  onSubmit() {
    const save: Observable<any> = (this.id === 0) ?
      this.userService.save(this.thisForm.value) :
      this.userService.update(this.id, this.thisForm.value);

    save.subscribe(
      res => {
        this.onClose(true);
      },
      err => console.log(err)
    );
  }

  onClose(update:boolean=false) {
    let updateParam = {};
    if (!update) {
      updateParam = { fragment: 'no-update' }
    }
    this.router.navigate(['/user'], updateParam);
  }
}
