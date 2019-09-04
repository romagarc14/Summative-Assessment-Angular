import { Component, OnInit } from '@angular/core';
import { MoviesService, Movie } from '../movies.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  movies: Movie[] = [];
  displayList: boolean = true;
  movieIdBeingEdited = {};
  movieBeingDisplayed: Movie;

  selectedIndex: number;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.getMovies();
  }

  onDeleteMovie(i: number) {
    this.moviesService.deleteMovie(i);
    this.getMovies();
  }

  onStartEditMovie(i: number) {
    this.movieIdBeingEdited[i]= true;
  }

  onSaveEditMovie(i: number) {
    this.movieIdBeingEdited[i] = false;
  }

  getMovies() {
    this.movies = this.moviesService.getMovies();
  }

  onViewMovieDetails(movie: Movie) {
    this.movieBeingDisplayed = movie;
  }
}
