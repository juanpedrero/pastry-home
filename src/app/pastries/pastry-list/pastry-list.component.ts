import { Component, OnInit } from '@angular/core';
import { Pastry } from 'src/app/types/pastry';
import { PastryService } from 'src/app/services/pastry.service';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-pastry-list',
  templateUrl: './pastry-list.component.html',
  styleUrls: ['./pastry-list.component.scss']
})
export class PastryListComponent implements OnInit {
  protected pastryList: Pastry[];
  protected categoryName: string;
  constructor(private pastryService: PastryService, private activatedRoute: ActivatedRoute, private categoryService: CategoryService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.categoryName = this.categoryService.transformCategoryFromSlug(params.category);
      this.pastryList = this.pastryService.getPastriesByCategory(params.category);
    })
  }

}
