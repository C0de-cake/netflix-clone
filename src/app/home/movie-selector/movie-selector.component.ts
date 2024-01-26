import {Component, effect, inject, OnInit} from '@angular/core';
import {TmdbService} from "../../service/tmdb.service";
import {Genre, GenresResponse} from "../../service/model/genre.model";
import {MovieListComponent} from "./movie-list/movie-list.component";

@Component({
  selector: 'app-movie-selector',
  standalone: true,
  imports: [
    MovieListComponent
  ],
  templateUrl: './movie-selector.component.html',
  styleUrl: './movie-selector.component.scss'
})
export class MovieSelectorComponent implements OnInit {


  tmdbService = inject(TmdbService);

  genres: Genre[] | undefined;

  constructor() {
    effect(() => {
      let genresResponse = this.tmdbService.genres().value ?? {genres: []} as GenresResponse;
      this.genres = genresResponse.genres;
    });
  }

  ngOnInit(): void {
    this.fetchAllGenres();
  }

  private fetchAllGenres(): void {
    this.tmdbService.getAllGenres();
  }
}
