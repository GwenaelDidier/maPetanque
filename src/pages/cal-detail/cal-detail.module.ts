import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalDetailPage } from './cal-detail';

@NgModule({
  declarations: [
    CalDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CalDetailPage),
  ],
})
export class CalDetailPageModule {}
