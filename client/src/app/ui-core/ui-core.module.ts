import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CalendarComponent } from './calendar/calendar.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { HttpClientModule } from '@angular/common/http';

const COMPONENTS = [
  CalendarComponent,
  SidePanelComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  exports: [...COMPONENTS]
})
export class UiCoreModule { }
