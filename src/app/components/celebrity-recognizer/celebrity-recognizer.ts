import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgxPicaService } from 'ngx-pica';
import { Rekognition, Credentials } from 'aws-sdk';

@Component({
  selector: 'app-celebrity-recognizer',
  template: `
    <ion-button *ngIf="!processing" (click)="fileChooserInput.click()">Seleccionar foto</ion-button>
    <ion-spinner *ngIf="processing"></ion-spinner>
    <input style="display:none;" type="file" accept="image/*" #fileChooserInput (change)="onImageSelected($event)"/>
  `
})
export class CelebrityRecognizerComponent implements OnInit {

  private rekognition: Rekognition;
  processing = false;
  @Output() recognized = new EventEmitter<string[]>();

  constructor(
    private ngxPicaService: NgxPicaService
  ) {}

  ngOnInit() {
    this.rekognition = new Rekognition({
      region: 'eu-west-1',
      credentials: new Credentials({
        accessKeyId: 'PUT_HERE_YOUR_AWS_REKOGNITION_ACCESS_KEY',
        secretAccessKey: 'PUT_HERE_YOUR_AWS_REKOGNITION_SECRET_ACCESS'
      })
    });
  }

  onImageSelected(event: any) {
    const reader = new FileReader();
    this.processing = true;
    this.ngxPicaService.compressImage(<File>event.target.files[0], 0.5).subscribe((file: File) => {
      reader.addEventListener('load', () => {
        const imageURL: string = reader.result;
        const base64 = imageURL.split(',')[1];
        this.recognize(base64);
      }, false);
      if (file) {
        reader.readAsDataURL(file);
      }
    }, (err: any) => {
      this.processing = false;
      console.log(err);
    });
  }

  private getBinary(base64: string) {
    return new Uint8Array(atob(base64).split('').map(c => c.charCodeAt(0)));
  }

  private recognize(base64: string) {
    const params: Rekognition.RecognizeCelebritiesRequest = { Image: { Bytes: this.getBinary(base64) } };
    this.rekognition.recognizeCelebrities(params, (err, data) => {
      if (err) {
        console.log(err, err.stack);
      }
      this.onRecognized(err ? null : data);
    });
  }

  private onRecognized(data: Rekognition.RecognizeCelebritiesResponse) {
    this.processing = false;
    this.recognized.emit(data.CelebrityFaces ? data.CelebrityFaces.map(c => c.Name) : []);
  }

}
