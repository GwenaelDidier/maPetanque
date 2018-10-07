import { Calendar } from '@ionic-native/calendar';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the CalDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cal-detail',
  templateUrl: 'cal-detail.html',
})
export class CalDetailPage {

  calName = '';
  events = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private calendar: Calendar, private plt: Platform) {

    if(this.plt.is('android')) {
      let start = new Date();
      let end = new Date();
      end.setDate(end.getDate() + 31);

      this.calendar.listEventsInRange(start, end).then( data => {
        this.events = data;
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalDetailPage');
  }

}
