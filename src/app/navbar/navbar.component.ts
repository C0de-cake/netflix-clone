import {Component, inject} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink,
    FontAwesomeModule,
    FormsModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  searchTerm = '';

  router = inject(Router);

  onSearch(searchTerm: string) {
    this.searchTerm = searchTerm;
    if(this.searchTerm.length >= 1) {
      this.router.navigate(['search'], {queryParams: {q: this.searchTerm}});
    } else if (this.searchTerm.length === 0) {
      this.router.navigate(['']);
    }
  }
}
