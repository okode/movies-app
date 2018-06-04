import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { PersonDetailPage } from './person-detail.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: PersonDetailPage }])
  ],
  declarations: [ PersonDetailPage ]
})
export class PersonDetailPageModule {}
