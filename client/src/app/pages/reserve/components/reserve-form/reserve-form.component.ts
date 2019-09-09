import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ReserveService } from '../../services/reserve.service';
import { dptos, paymentMethods, reservationFrom } from '../../constants/reserve.constant';
import { GenericItem } from 'src/app/core/models/generic-item-model';

@Component({
  selector: 'app-reserve-form',
  templateUrl: './reserve-form.component.html',
  styleUrls: ['./reserve-form.component.css']
})
export class ReserveFormComponent implements OnInit {  
  thisForm = this.fb.group({
    startDate: [new Date().toISOString().substring(0, 10), Validators.required],
    totalDays: [2, Validators.required],
    totalPerson: [1, Validators.required],
    dptoId: [1, Validators.required],
    reservationMethod: [1, Validators.required],
    paymentMethod: [1, Validators.required],
    pricePerDay: [0, Validators.required],
    observations: [''],
    status: [1],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: [''],
    phone: ['']
  });

  id: number = 0;
  dptos: GenericItem[];
  paymentMethods: GenericItem[];
  reservationFrom: GenericItem[];
  pathParent = '';

  constructor(private fb: FormBuilder, private reserveService: ReserveService,
    private router:Router, private activedRoute: ActivatedRoute) {
      this.dptos = dptos;
      this.paymentMethods = paymentMethods;
      this.reservationFrom = reservationFrom;
    }

  ngOnInit() {
    const {id} = this.activedRoute.snapshot.params;
    this.pathParent = this.activedRoute.snapshot.parent.routeConfig.path;
    if (id) {
      this.id = id;
      this.reserveService.getOne(this.id).subscribe(
        res => {          
          res.startDate = new Date(res.startDate).toISOString().substring(0, 10);
          this.thisForm.patchValue(res);
        },
        err => console.log(err)
      );
    }
  }

  onSubmit() {
    const save: Observable<any> = (this.id === 0) ?
      this.reserveService.save(this.thisForm.value) :
      this.reserveService.update(this.id, this.thisForm.value);

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
    this.router.navigate([`/${this.pathParent}`], updateParam);
  }
}
