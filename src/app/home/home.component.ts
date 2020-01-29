import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PastryService } from '../services/pastry.service';
import { Pastry } from '../types/pastry';
import { Author } from '../types/author';
import { CategoryService } from '../services/category.service';
import { DropdownService } from '../services/dropdown.service';
import { NgForm } from '@angular/forms';
import { Filter } from '../types/filter';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  protected categories: string[];
  protected pastries: Pastry[];
  protected authors: Author[];
  private filter: Filter;

  constructor(private categoryService: CategoryService, private dropdownService: DropdownService, private router: Router) {
    this.filter = new Filter ("", "", "")
   }


  selectedItems: any = "";
  dropdownSettings = {};
  selectedItems2: any = "";
  dropdownSettings2 = {};
  selectedItems3: any = "";
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
      singleSelection: true,
      enableCheckAll: false,
      text: 'Tipos de dulce',
      classes: "dropdown myclass custom-class"
    };
    this.dropdownSettings2 = {
      singleSelection: true,
      enableCheckAll: false,
      text: '¿Alergías y/o intolerancias?',
      classes: "dropdown myclass custom-class"
    };
    this.dropdownSettings3 = {
      singleSelection: true,
      enableCheckAll: false,
      text: 'Elige un evento',
      classes: "dropdown myclass custom-class"
    };
  }

  submit(form: NgForm){
    // console.log('hola');
    // // console.log(this.typeOfPastry);
    // console.log(this.selectedItems);
    // console.log(this.selectedItems2);
    // console.log(this.selectedItems3);

    this.router.navigate(['/product/result'], { queryParams: { type: this.selectedItems[0].value, allergy: this.selectedItems2[0].value, event: this.selectedItems3[0].value}});
    localStorage.setItem("datos_busqueda",  this.selectedItems[0].value);
    localStorage.setItem("datos_busqueda2",  this.selectedItems2[0].value);
    localStorage.setItem("datos_busqueda3",  this.selectedItems3[0].value);
    // console.log(this.selectedItems3);
   }



  // onItemSelect(item: []) {
  //   console.log('hola', item)
  // }

}
