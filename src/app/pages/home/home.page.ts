import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TmdbService } from '../../services/tmdb.service';
import { Movie } from '../../models/movie';
import { LoadingController, Content } from '@ionic/angular';

@Component({
  selector: 'app-page-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

  segment: string;
  page: number;
  movies: Movie[];
  @ViewChild(Content) content: Content;

  constructor(
    private router: Router,
    private loadingCtrl: LoadingController,
    private tmdb: TmdbService
  ) {}

  ngOnInit() {
    this.onTabSelected('popular');
  }

  onTabSelected(segmentValue: string) {
    this.segment = segmentValue;
    this.page = 1;
    this.movies = null;
    this.content.scrollToTop();
    this.loadMovies();
  }

  onNextPage() {
    this.page++;
    this.loadMovies();
  }

  onMovieDetail(id: number) {
    this.router.navigate(['movie-detail', id]);
  }

  onSearch() {
    this.router.navigate(['search']);
  }

  private async loadMovies() {
    let service;
    switch (this.segment) {
      case 'popular':  service = this.tmdb.getPopularMovies(this.page); break;
      case 'top':      service = this.tmdb.getTopMovies(this.page); break;
      case 'upcoming': service = this.tmdb.getUpcomingMovies(this.page); break;
    }
    const loadingOpts = { translucent: true, spinner: 'crescent', content: 'Cargando' };
    const loading = await this.loadingCtrl.create(loadingOpts);
    loading.present();
    service.subscribe(res => {
      if (!this.movies) { this.movies = []; }
      this.movies = this.movies.concat(res);
      loading.dismiss();
    }, err => {
      this.movies = [];
      loading.dismiss();
    });
  }

}
