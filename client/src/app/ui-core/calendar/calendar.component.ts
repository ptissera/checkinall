import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { CalendarConstant } from './calendar.constants';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit, OnChanges {

  @Input() reservas: any;
  @Output() selectedReservationId: EventEmitter<{}> = new EventEmitter();
  
  reserves = [];
  listDays = [];
  listNoDays = [];
  listWeekDays = CalendarConstant.listWeekDays;
  listMonth = CalendarConstant.listMonth;
  listYear = [];
  selectedMonth: number;
  selectedYear: number;

  constructor() { }

  ngOnInit() {
    const d = new Date();
    this.selectedYear = d.getFullYear();
    this.selectedMonth = d.getMonth();
    this.listYear.push({name: this.selectedYear - 1, selected: false});
    this.listYear.push({name: this.selectedYear, selected: true});
    this.listYear.push({name: this.selectedYear + 1, selected: false});
    this.selectMonth();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.reservas.currentValue.length > 0){
      this.reserves = changes.reservas.currentValue;
      this.selectMonth();
    }
  }

  prepareRender() {
    let renderReserve = [];
    this.reserves.forEach((reserva:any) => {      
      for(let i = 0 ; i < reserva.totalDays + 1; i++) {
        const date = this.addDays(reserva.startDate, i);
        let type = CalendarConstant.TypeReserveDay.WHOLE_DAY;
        if (i==0) {
          type = CalendarConstant.TypeReserveDay.START_DAY;
        } else if (i==reserva.totalDays) {
          type = CalendarConstant.TypeReserveDay.END_DAY;
          reserva.name = ' ';
        }

        renderReserve.push({
          id: reserva.id,
          name: reserva.dptosDesc,
          dpto: reserva.dptoId,
          date: this.getDateToString(date),
          type,
          pricePerDay: reserva.pricePerDay,
          startDate: reserva.startDate,
          paymentMethodDesc: reserva.paymentMethodDesc,
          paymentMethodColor: reserva.paymentMethodColor,
          dptoColor: reserva.dptosColor,
          dptosBgColor: reserva.dptosBgColor,
          reserveFromDesc: reserva.reserveFromDesc,
          reserveFromColor: reserva.reserveFromColor
        });
      } 
    });

  
    renderReserve.forEach(rendered => {
      const daySelected = this.listDays.find(day => rendered.date==day.fullDay);
      if (daySelected) {
        if (daySelected.render[rendered.dpto -1] != null) {
          rendered.type = CalendarConstant.TypeReserveDay.END_START_DAY;
        }
        daySelected.render[rendered.dpto -1] = rendered;

        if (rendered.type !== CalendarConstant.TypeReserveDay.END_DAY) {
          daySelected.totalPrice +=rendered.pricePerDay;
        }
      }
    });

  }

  getDateToString(date: Date): string {
    return date.toISOString().substring(0,10);
  }

  addDays(currentDate: Date | string, days: number): Date {
    let date = new Date(currentDate);
    date.setDate(date.getDate() + days);
    return date;
}

  selectYear(year) {
    this.listYear.forEach(y => y.selected = y.name == year);
    this.selectedYear = year;
    this.selectMonth();
  }

  selectMonth(monthIndex = this.selectedMonth) {
    this.listMonth.forEach(m => m.selected = m.index==monthIndex);    
    this.selectedMonth = monthIndex;
    this.listNoDays = [];
    this.listDays = [];

    const n = this.firstDayInMonthIndex(monthIndex);
    for(let i = 0 ; i < n; i++) {
      this.listNoDays.push(i);
    }
    for(let i = 1 ; i <= this.daysInMonth(monthIndex); i++) {
      this.listDays.push({
        day: i,
        fullDay: this.getDateToString(new Date(`${this.selectedYear}-${this.selectedMonth+1}-${i}`)),
        render: [null, null],
        totalPrice: 0
      });
    }    
    this.prepareRender();
  }

  firstDayInMonthIndex(monthIndex = new Date().getMonth()) {
    return new Date(this.selectedYear, monthIndex, 1).getDay()
  }

  daysInMonth (month = new Date().getMonth()) { 
    return new Date(this.selectedYear, month, 0).getDate(); 
  }

  selectReservation(id) {
    this.selectedReservationId.emit(id);
  }
}
