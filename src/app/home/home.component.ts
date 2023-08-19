import { Component, OnInit } from '@angular/core';
import { Person } from '../entities';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  list:Person[] = [];
  selected:Person|null = null;

  constructor(private personService:PersonService){}

  ngOnInit(): void {
    this.personService.fetchAll().subscribe(data => this.list = data);
  }

  select(person:Person){
    if(this.selected == person) {
      this.selected = null;
    } else {
      this.selected = person;
    }
  }

  deleteSelected() {
    if(this.selected) {
      this.personService.delete(this.selected).subscribe(() => {
        this.list = this.list.filter(item => item != this.selected);
        this.selected = null;
      });
    }
  }

}
