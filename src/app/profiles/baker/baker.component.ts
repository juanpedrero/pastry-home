import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PastryService } from 'src/app/services/pastry.service';
import { AuthorService } from 'src/app/services/author.service';
import { Pastry } from 'src/app/types/pastry';
import { Author } from 'src/app/types/author';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-baker',
  templateUrl: './baker.component.html',
  styleUrls: ['./baker.component.scss']
})
export class BakerComponent implements OnInit {

  protected idBaker: number;
  protected pastry: Pastry;
  protected idProduct: number;
  constructor(private activatedRoute: ActivatedRoute, private pastryService: PastryService, private authorService: AuthorService, private categoryService: CategoryService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params)=>{
      this.idProduct = parseInt(params.id);
      this.pastry = this.pastryService.getProduct(this.idProduct);
      this.pastry.author = this.authorService.getAuthorById(this.pastry.idAuthor);

    })
  }

}
