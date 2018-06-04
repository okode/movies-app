import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { MovieDetailPage } from './movie-detail.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: MovieDetailPage }])
  ],
  declarations: [ MovieDetailPage ]
})
export class MovieDetailPageModule {}
