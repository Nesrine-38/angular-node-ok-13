import { Component, Input } from '@angular/core';
import { Person } from '../entities';

@Component({
  selector: 'app-person-item',
  templateUrl: './person-item.component.html',
  styleUrls: ['./person-item.component.css']
})
export class PersonItemComponent {
  @Input({required:true})
  person:Person;
}
