import { Component, OnInit } from '@angular/core';
import { Pastry } from 'src/app/types/pastry';
import { PastryService } from 'src/app/services/pastry.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-pastry-list',
  templateUrl: './pastry-list.component.html',
  styleUrls: ['./pastry-list.component.scss']
})
export class PastryListComponent implements OnInit {
  protected pastryList: Pastry[];
  protected categoryName: string;
  protected category: string;
  protected selectedFilterListTypeOf: string[] = [];
  protected selectedFilterListAllergy: string[] = [];
  protected selectedFilterListOcassion : string[] = [];


  constructor(private pastryService: PastryService, private activatedRoute: ActivatedRoute, private categoryService: CategoryService, private router: Router) { }

  ngOnInit() {

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });

    this.activatedRoute.params.subscribe((params) => {
      this.category = params.category;
      this.categoryName = this.categoryService.transformCategoryFromSlug(params.category);
      this.pastryList = this.pastryService.getPastriesByCategory(params.category);
    });

  }

  //filterResults(event) {
  //  this.pastryList = this.pastryList.filter((pastry) => pastry.name.match(event.target.value));
  //}

  updatePastryListWithTypeOf(name: string) {
    const index = this.selectedFilterListTypeOf.findIndex((filter) => filter === name);
    if (index !== -1) {
      this.selectedFilterListTypeOf.splice(index, 1);
    } else {
      this.selectedFilterListTypeOf.push(name);
    }

    const newPastryList = this.pastryService.getPastriesByCategory(this.category);

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

    const newPastryList = this.pastryService.getPastriesByCategory(this.category);
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

    const newPastryList = this.pastryService.getPastriesByCategory(this.category);
    const filteredList = this.pastryService.createListWithTypeOfFilters(newPastryList, this.selectedFilterListTypeOf);
    const filteredList2 = this.pastryService.createListWithOccasionFilters(newPastryList, this.selectedFilterListAllergy);


    if (this.selectedFilterListOcassion.length > 0) {
      this.pastryList = this.pastryService.createListWithOccasionFilters(filteredList, this.selectedFilterListOcassion);
    } else {
      this.pastryList = filteredList;
    }

  }

}
