import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../../models/person';
import { TmdbService } from '../../services/tmdb.service';
import { TrackService } from '../../services/track.service';

@Component({
  selector: 'app-page-person-detail',
  templateUrl: 'person-detail.page.html',
  styleUrls: ['person-detail.page.scss']
})
export class PersonDetailPage implements OnInit {

  person: Person;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private tmdb: TmdbService,
    private track: TrackService
  ) {}

  ngOnInit() {
    const personId = this.activatedRoute.snapshot.params['id'];
    this.getPersonDetail(personId);
  }

  onMovieDetail(id: number) {
    this.router.navigate(['movie-detail', id]);
  }

  private getPersonDetail(id: number) {
    this.tmdb.getPersonDetail(id).subscribe(res => {
      this.person = res;
      this.track.viewPerson(id, this.person.name);
    });
  }

}
