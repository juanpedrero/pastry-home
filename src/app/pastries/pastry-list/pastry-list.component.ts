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
  protected selectedFilterList: string[] = [];
  constructor(private pastryService: PastryService, private activatedRoute: ActivatedRoute, private categoryService: CategoryService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.category = params.category;
      this.categoryName = this.categoryService.transformCategoryFromSlug(params.category);
      this.pastryList = this.pastryService.getPastriesByCategory(params.category);
    });

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
  }

  updatePastryListWithTypeOf(name) {
    const index = this.selectedFilterList.findIndex((filter) => filter === name);
    if (index !== -1) {
      this.selectedFilterList.splice(index, 1);
    } else {
      this.selectedFilterList.push(name);
    }

    const newPastryList = this.pastryService.getPastriesByCategory(this.category);

    if (this.selectedFilterList.length > 0) {
      this.pastryList = this.pastryService.createListWithTypeOfFilters(newPastryList, this.selectedFilterList);
    } else {
      this.pastryList = newPastryList;
    }

  }

  // updatePastryListWithAllergy(name) {
  //   const index = this.selectedFilterList.findIndex((filter) => filter === name);
  //   if (index !== -1) {
  //     this.selectedFilterList.splice(index, 1);
  //   } else {
  //     this.selectedFilterList.push(name);
  //   }

  //   const newPastryList = this.pastryService.getPastriesByCategory(this.category);

  //   if (this.selectedFilterList.length > 0) {
  //     this.pastryList = this.pastryService.createListWithAlleriesFilters(newPastryList, this.selectedFilterList);
  //   } else {
  //     this.pastryList = newPastryList;
  //   }

  // }

}
