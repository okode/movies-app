import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../../models/movie';
import { TmdbService } from '../../services/tmdb.service';
import { TrackService } from '../../services/track.service';

@Component({
  selector: 'app-page-movie-detail',
  templateUrl: 'movie-detail.page.html',
  styleUrls: ['movie-detail.page.scss']
})
export class MovieDetailPage implements OnInit {

  movie: Movie;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private tmdb: TmdbService,
    private track: TrackService
  ) {}

  ngOnInit() {
    const movieId = this.activatedRoute.snapshot.params['id'];
    this.getMovieDetail(movieId);
  }

  getMovieDetail(id: number) {
    this.tmdb.getMovieDetail(id).subscribe(res => {
      this.movie = res;
      this.track.viewMovie(id, this.movie.title);
    });
  }

  onPersonDetail(id: number) {
    this.router.navigate(['person-detail', id]);
  }

}
