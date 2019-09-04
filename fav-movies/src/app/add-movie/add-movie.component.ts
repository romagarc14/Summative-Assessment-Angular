import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {
  movieForm = this.fb.group({
    title: [''],
    description: [''],
    imageUrl: ['']
  })

  constructor(private moviesService: MoviesService, private fb: FormBuilder) {
    console.log(this.movieForm);
   }

  ngOnInit() {
  }

  onSubmit() {
    const title = this.movieForm.value.title;
    const description = this.movieForm.value.description;
    const imageUrl = this.movieForm.value.imageUrl;
    this.moviesService.addMovie(title, description, imageUrl);
  }
}
