import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PastryService } from 'src/app/services/pastry.service';

@Component({
  selector: 'app-pastry-filtered',
  templateUrl: './pastry-filtered.component.html',
  styleUrls: ['./pastry-filtered.component.scss']
})
export class PastryFilteredComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private pastryService: PastryService) { }

  protected products = [];
  ngOnInit() {
    this.products = this.pastryService.getPastries();

    this.activatedRoute.queryParams.subscribe((params) => {
      this.products = this.pastryService.getPastries();
      const allergyFilter = this.pastryService.getPastryFiltersAllergy();

      allergyFilter.forEach((filter) => {
        const filteredAllergy = allergyFilter.filter((element) => {

        })
      })

    });
  }

}
