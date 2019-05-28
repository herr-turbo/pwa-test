import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

peoples:any;

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {

    this.peopleService.getPeoples().subscribe(json => this.peoples = json);

  }

  
  

}
