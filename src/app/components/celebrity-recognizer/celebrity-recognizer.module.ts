import { NgModule } from '@angular/core';
import { CelebrityRecognizerComponent } from './celebrity-recognizer';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NgxPicaModule } from 'ngx-pica';

@NgModule({
  declarations: [ CelebrityRecognizerComponent ],
  imports: [ IonicModule, CommonModule, NgxPicaModule ],
  exports: [ CelebrityRecognizerComponent ]
})
export class CelebrityRecognizerComponentModule {}
