import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

export class Movie {
  title: string;
  description: string;
  imageUrl: string;

  constructor(title: string, description: string, imageUrl: string) {
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
  }
}

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  movies: Movie[] = [
    new Movie("Amadeus", "The life, success and troubles of Wolfgang Amadeus Mozart, as told by Antonio Salieri, the contemporaneous composer who was insanely jealous of Mozart's talent and claimed to have murdered him.", "assets/images/amadeus.jpg"),
    new Movie("Clerks", "A day in the lives of two convenience clerks named Dante and Randal as they annoy customers, discuss movies, and play hockey on the store roof.", "assets/images/clerks.jpg"),
    new Movie("Muriel's Wedding", "A young social outcast in Australia steals money from her parents to finance a vacation where she hopes to find happiness, and perhaps love.", "assets/images/murielswedding.jpg"),
    new Movie("The Crying Game", "A British soldier kidnapped by IRA terrorists soon befriends one of his captors, who then becomes drawn into the soldier's world.", "assets/images/cryinggame.jpg"),
    new Movie("The Silence of the Lambs", "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.", "assets/images/silenceofthelambs.jpg")
  ]

  constructor() { }

  addMovie(title: string, description: string, imageUrl: string){
    this.movies.push(new Movie(title, description, imageUrl))
  }

  deleteMovie(i: number){
    this.movies.splice(i, 1);
  }
  
  getMovies(): Movie[] {
    return this.movies;
  }
}
