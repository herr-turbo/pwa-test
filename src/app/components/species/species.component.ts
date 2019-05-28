import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {

  species;
  constructor() { }

  ngOnInit() {
    fetch('https://ghibliapi.herokuapp.com/species/?limit=10')
    .then((response) => response.json())
    .then((json) => {
      this.species = json;
    });
  }

}
