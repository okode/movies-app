import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SearchPage } from './search.page';
import { CelebrityRecognizerComponentModule } from '../../components/celebrity-recognizer/celebrity-recognizer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CelebrityRecognizerComponentModule,
    RouterModule.forChild([{ path: '', component: SearchPage }])
  ],
  declarations: [SearchPage]
})
export class SearchPageModule {}
