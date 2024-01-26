import { Component } from '@angular/core';
import {MainContentComponent} from "./main-content/main-content.component";
import {MovieSelectorComponent} from "./movie-selector/movie-selector.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MainContentComponent,
    MovieSelectorComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
