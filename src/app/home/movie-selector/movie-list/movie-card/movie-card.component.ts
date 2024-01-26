import {Component, inject, Input} from '@angular/core';
import {Movie} from "../../../../service/model/movie.model";
import {TmdbService} from "../../../../service/tmdb.service";

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent {

  @Input() movie: Movie | undefined;

  tmdbService = inject(TmdbService);

}
