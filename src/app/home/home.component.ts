import { Component, OnInit } from '@angular/core';
import { PastryService } from '../services/pastry.service';
import { Pastry } from '../types/pastry';
import { Author } from '../types/author';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  protected categories: string[];
  protected pastries: Pastry[];
  protected authors: Author[];
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
  }
}
