import {Component, effect, inject, Input, OnInit} from '@angular/core';
import {TmdbService} from "../../../service/tmdb.service";
import {Movie, MovieApiResponse} from "../../../service/model/movie.model";
import {MovieCardComponent} from "./movie-card/movie-card.component";

export type Mode = 'GENRE' | 'TREND'

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [
    MovieCardComponent
  ],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent implements OnInit {

  @Input() genreId = -1;

  @Input() mode: Mode = 'GENRE';

  tmdbService = inject(TmdbService);

  moviesByGenre: Movie[] | undefined;
  trendMovies: Movie[] | undefined;


  constructor() {
    effect(() => {
      if (this.mode === 'GENRE') {
        const movieByGenreResponse = this.tmdbService.moviesByGenre().value ?? {} as MovieApiResponse;
        if (movieByGenreResponse.genreId === this.genreId) {
          this.moviesByGenre = movieByGenreResponse.results;
        }
      } else if (this.mode === 'TREND') {
        const trendingMoviesResponse = this.tmdbService.fetchTrendMovie().value;
        if (trendingMoviesResponse) {
          this.trendMovies = trendingMoviesResponse.results;
        }
      }
    });
  }

  ngOnInit(): void {
    this.fetchMoviesByGenre();
    this.fetchTrends();
  }

  private fetchMoviesByGenre(): void {
    this.tmdbService.getMoviesByGenre(this.genreId);
  }

  private fetchTrends(): void {
    this.tmdbService.getTrends();
  }
}
