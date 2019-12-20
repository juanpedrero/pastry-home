import { Component, OnInit, Input } from '@angular/core';
import { Pastry } from '../types/pastry';
import { PastryService } from '../services/pastry.service';
import { environment } from 'src/environments/environment';
import { UtilService } from '../services/util.service';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  @Input() category: string;

  protected limit: number = environment.limitHomeCategoryList;
  protected pastriesList: Pastry[];

  constructor(private pastryService: PastryService, private categoryService: CategoryService) { }

  ngOnInit() {
    this.pastriesList = this.pastryService.getPastriesByCategoryAndRating(this.category, this.limit);
  }

  transformCategoryToSlug(category: string): string {
    return this.categoryService.transformCategoryToSlug(category);
  }

}
