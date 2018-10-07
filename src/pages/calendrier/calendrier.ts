import { Calendar } from '@ionic-native/calendar';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-calendrier',
  templateUrl: 'calendrier.html',
})
export class CalendrierPage {

  public calendars = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private calendar: Calendar, private plt: Platform) {
    this.plt.ready().then(() => {
      this.calendar.listCalendars().then( data => {
        this.calendars = data;
      });
    });
    
  }

  public addEvent(cal) {
    let date = new Date();
    let options = { calendarId: cal.id, calendarName: cal.name, firstReminderMinutes: 15};

    this.calendar.createEventInteractivelyWithOptions('Mon premier event', 'Miremont', 'special notes', date, date, options).then( () => {

    });
  }

  public openCal(cal) {
    this.navCtrl.push('CalDetailsPage', { name: cal.name });
  }

}
