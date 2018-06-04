import { Component } from '@angular/core';
import { TmdbService } from '../../services/tmdb.service';
import { Movie } from '../../models/movie';
import { Router } from '@angular/router';
import { Person } from '../../models/person';

@Component({
  selector: 'app-page-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class SearchPage {

  searchType: 'movies' | 'persons' = 'movies';
  searchInput = '';
  results: Movie[] | Person[];

  constructor(
    private router: Router,
    private tmdb: TmdbService
  ) {}

  onInput(event: any) {
    this.performSearch(this.searchInput);
  }

  onClear(event: any) {
    this.results = null;
  }

  onMovieDetail(id: number) {
    this.router.navigate(['movie-detail', id]);
  }

  onPersonDetail(id: number) {
    this.router.navigate(['person-detail', id]);
  }

  onSearchTypeChange() {
    this.results = null;
    this.performSearch(this.searchInput);
  }

  onRecognized(list: string[]) {
    for (const name of list) {
      this.tmdb.searchPerson(name).subscribe(res => {
        if (!this.results) { this.results = []; }
        if (res) {
          this.results = <Person[]>[ ...this.results, res ];
        }
      });
    }
  }

  private performSearch(query: string) {
    if (!query || query.trim().length <= 0) { return; }
    switch (this.searchType) {
      case 'movies':  this.performSearchMovies(query); break;
      case 'persons': this.performSearchPersons(query); break;
      default:
    }
  }

  private performSearchMovies(query: string) {
    this.tmdb.searchMovies(query).subscribe(res => {
      this.results = res;
    });
  }

  private performSearchPersons(query: string) {
    this.tmdb.searchPersons(query).subscribe(res => {
      this.results = res;
    });
  }

}
