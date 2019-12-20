import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pastry } from 'src/app/types/pastry';
import { PastryService } from 'src/app/services/pastry.service';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-pastry-detail',
  templateUrl: './pastry-detail.component.html',
  styleUrls: ['./pastry-detail.component.scss']
})
export class PastryDetailComponent implements OnInit {
  protected idProduct: number;
  protected pastry: Pastry;
  constructor(private activatedRoute: ActivatedRoute, private pastryService: PastryService, private authorService: AuthorService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params)=>{
      this.idProduct = parseInt(params.id);
      this.pastry = this.pastryService.getPastryById(this.idProduct);
      this.pastry.author = this.authorService.getAuthorById(this.pastry.idAuthor);
    })
  }

}
