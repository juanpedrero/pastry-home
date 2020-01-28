import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PastryService } from 'src/app/services/pastry.service';

@Component({
  selector: 'app-navbar-side',
  templateUrl: './navbar-side.component.html',
  styleUrls: ['./navbar-side.component.scss']
})
export class NavbarSideComponent implements OnInit {

  @Output() filterPastryListTypeOf: EventEmitter<string> = new EventEmitter<string>();
  @Output() filterPastryListOcassion: EventEmitter<string> = new EventEmitter<string>();
  @Output() filterPastryListAllergies: EventEmitter<string> = new EventEmitter<string>();

  pastryFilterListTypeOf: Object[];
  pastryFilterListAllergies: Object[];
  pastryFilterListOcassion: Object[];

  constructor(private pastryService: PastryService) { }



  ngOnInit() {
    this.pastryFilterListTypeOf = this.pastryService.getPastryFiltersTypeOf();
    this.pastryFilterListAllergies = this.pastryService.getPastryFiltersAllergy();
    this.pastryFilterListOcassion = this.pastryService.getPastryFiltersOcassion();
  }

  updateListTypeOf(event) {
    this.filterPastryListTypeOf.emit(event.target.value);
  }

  updateListOcassion(event) {
    this.filterPastryListOcassion.emit(event.target.value);
  }

  updateListAllergies(event) {
    this.filterPastryListAllergies.emit(event.target.value);
  }

}
