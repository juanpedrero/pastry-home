import { Injectable } from '@angular/core';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private utilService: UtilService) { }

  getCategories(): string[] {
    return ['Sin gluten', 'Chocolate', 'Vegano', 'Frutas', 'Fritos'];
  }

  transformCategoryToSlug(category: string): string {
    return category.replace(" ", "-").toLowerCase();
  }

  transformCategoryFromSlug(categorySlug: string): string {
    return this.utilService.capitalizeFirstLetter(categorySlug.replace("-", ""));
  }
}
