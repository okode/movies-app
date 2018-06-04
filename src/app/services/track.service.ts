import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  constructor(
    private platform: Platform
  ) {}

  private viewContent(id: number, name: string, type: string) {
    if (this.platform.is('cordova')) {
      fabric.Answers.sendContentView(name, type, String(id));
    }
  }

  viewPerson(id: number, name: string) {
    this.viewContent(id, name, 'person');
  }

  viewMovie(id: number, title: string) {
    this.viewContent(id, title, 'movie');
  }

}
