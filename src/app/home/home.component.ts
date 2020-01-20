import { Component, OnInit } from '@angular/core';
import { PastryService } from '../services/pastry.service';
import { Pastry } from '../types/pastry';
import { Author } from '../types/author';
import { CategoryService } from '../services/category.service';
import { DropdownService } from '../services/dropdown.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  protected categories: string[];
  protected pastries: Pastry[];
  protected authors: Author[];

  constructor(private categoryService: CategoryService, private dropdownService: DropdownService) { }


  selectedItems = [];
  dropdownSettings = {};
  selectedItems2 = [];
  dropdownSettings2 = {};
  selectedItems3 = [];
  dropdownSettings3 = {};

  private typeOfPastry: Array<Object> = [];
  private allergies: Array<Object> = [];
  private ocassion: Array<Object> = [];

  ngOnInit() {
    this.categories = this.categoryService.getCategories();


    this.typeOfPastry = this.dropdownService.getTypeOfPastry();
    this.allergies = this.dropdownService.getAllergies();
    this.ocassion = this.dropdownService.getOcassion();

    this.dropdownSettings = {
      singleSelection: false,
      enableCheckAll: true,
      text: 'Tipo de dulce',
      classes: "dropdown myclass custom-class"
    };
    this.dropdownSettings2 = {
      singleSelection: false,
      enableCheckAll: true,
      text: '¿Alergías y/o intolerancias?',
      classes: "dropdown myclass custom-class"
    };
    this.dropdownSettings3 = {
      singleSelection: true,
      enableCheckAll: false,
      text: 'Ocasión',
      classes: "dropdown myclass custom-class"
    };

    console.log(this.typeOfPastry);

  }




  // public onItemSelect(item) {
  //   console.log('hola', item)
  // }

  submit(form) {
    console.log(form.value);
  }




}
