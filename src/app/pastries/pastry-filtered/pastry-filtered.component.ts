import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PastryService } from 'src/app/services/pastry.service';
import { Pastry } from 'src/app/types/pastry';

@Component({
  selector: 'app-pastry-filtered',
  templateUrl: './pastry-filtered.component.html',
  styleUrls: ['./pastry-filtered.component.scss']
})
export class PastryFilteredComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private pastryService: PastryService) { }

  protected pastryList: Pastry[];
  protected products = [];
  protected pastriesFiltered: Pastry[] = [];
  protected typeOfSelected = [];
  protected ocassionSelected = [];
  protected allergySelected = [];
  protected selectedFilterListTypeOf: string[] = [];
  protected selectedFilterListAllergy: string[] = [];
  protected selectedFilterListOcassion : string[] = [];

  ngOnInit() {
    this.products = this.pastryService.getPastries();

    this.activatedRoute.queryParams.subscribe((params) => {
      this.products = this.pastryService.getPastries();
      // const allergyFilter = this.pastryService.getPastryFiltersAllergy();

      if (params.type) {
        this.typeOfSelected.push(params.type.toLowerCase());
      }

      if (params.allergy) {
        this.allergySelected.push(params.allergy.toLowerCase());
      }

      if (params.event) {
        this.ocassionSelected.push(params.event.toLowerCase());
      }

      this.products = this.pastryService.createListWithTypeOfFilters(this.products, this.typeOfSelected);
      this.products = this.pastryService.createListWithAllergiesFilters(this.products, this.allergySelected);
      this.products = this.pastryService.createListWithOccasionFilters(this.products, this.ocassionSelected);
      this.pastriesFiltered = this.products;
      // allergyFilter.forEach((filter) => {
      //   const filteredAllergy = allergyFilter.filter((element) => {

      //   })
      // })

    });
  }

  updatePastryListWithTypeOf(name: string) {
    const index = this.selectedFilterListTypeOf.findIndex((filter) => filter === name);
    if (index !== -1) {
      this.selectedFilterListTypeOf.splice(index, 1);
    } else {
      this.selectedFilterListTypeOf.push(name);
    }

    const newPastryList = this.pastryService.getPastries();

    if (this.selectedFilterListTypeOf.length > 0) {
      this.pastryList = this.pastryService.createListWithTypeOfFilters(newPastryList, this.selectedFilterListTypeOf);
    } else {
      this.pastryList = newPastryList;
    }

  }

  updatePastryListWithAllergy(allergy: string) {
    const index = this.selectedFilterListAllergy.findIndex((filter) => filter === allergy);
    if (index !== -1) {
      this.selectedFilterListAllergy.splice(index, 1);
    } else {
      this.selectedFilterListAllergy.push(allergy);
    }

    const newPastryList = this.pastryService.getPastries();
    const filteredList = this.pastryService.createListWithTypeOfFilters(newPastryList, this.selectedFilterListTypeOf);

    if (this.selectedFilterListAllergy.length > 0) {
      this.pastryList = this.pastryService.createListWithAllergiesFilters(filteredList, this.selectedFilterListAllergy);
    } else {
      this.pastryList = filteredList;
    }

  }


  updatePastryListWithOcassion(allergy: string) {
    const index = this.selectedFilterListOcassion.findIndex((filter) => filter === allergy);
    if (index !== -1) {
      this.selectedFilterListOcassion.splice(index, 1);
    } else {
      this.selectedFilterListOcassion.push(allergy);
    }

    const newPastryList = this.pastryService.getPastries();
    const filteredList = this.pastryService.createListWithTypeOfFilters(newPastryList, this.selectedFilterListTypeOf);
    const filteredList2 = this.pastryService.createListWithOccasionFilters(newPastryList, this.selectedFilterListAllergy);


    if (this.selectedFilterListOcassion.length > 0) {
      this.pastryList = this.pastryService.createListWithOccasionFilters(filteredList, this.selectedFilterListOcassion);
    } else {
      this.pastryList = filteredList;
    }

  }

}
