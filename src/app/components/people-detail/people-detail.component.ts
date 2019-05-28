import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeopleService } from '../../services/people.service';


@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css']
})
export class PeopleDetailComponent implements OnInit {

  people: any;


  constructor(private route: ActivatedRoute, private peopleService: PeopleService) { }

  ngOnInit() {

    let id: string = this.route.snapshot.params['id'];

    this.peopleService.getPeople(id).subscribe(json => this.people = json);

  }

}
