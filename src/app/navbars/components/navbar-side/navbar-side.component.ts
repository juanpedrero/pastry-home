import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { PastryService } from 'src/app/services/pastry.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-navbar-side',
  templateUrl: './navbar-side.component.html',
  styleUrls: ['./navbar-side.component.scss']
})
export class NavbarSideComponent implements OnInit {

  @Output() filterPastryListTypeOf: EventEmitter<string> = new EventEmitter<string>();
  @Output() filterPastryListOcassion: EventEmitter<string> = new EventEmitter<string>();
  @Output() filterPastryListAllergies: EventEmitter<string> = new EventEmitter<string>();
  @Input() selectedTypeOf: string[] = [];
  @Input() selectedOcassion: string[] = [];
  @Input() selectedAllergies: string[] = [];

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

  typeOfChecked(value): boolean {
    return this.selectedTypeOf.findIndex((element) => element === value) !== -1;
  }

  allergiesChecked(value): boolean {
    return this.selectedAllergies.findIndex((element) => element === value) !== -1;
  }

  ocassionChecked(value): boolean {
    return this.selectedOcassion.findIndex((element) => element === value) !== -1;
  }
}
