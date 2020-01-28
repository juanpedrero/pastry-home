import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pastry } from 'src/app/types/pastry';
import { PastryService } from 'src/app/services/pastry.service';
import { AuthorService } from 'src/app/services/author.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-pastry-detail',
  templateUrl: './pastry-detail.component.html',
  styleUrls: ['./pastry-detail.component.scss']
})
export class PastryDetailComponent implements OnInit {

  public product: Pastry = {};

  protected idProduct: number;
  protected pastry: Pastry;
  protected message: string;

  // @Output() addItemToCart: EventEmitter<Pastry> = new EventEmitter<Pastry>();

  constructor(private activatedRoute: ActivatedRoute, private pastryService: PastryService, private authorService: AuthorService, private cartService: CartService) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params)=>{
      this.idProduct = parseInt(params.id);
      this.pastry = this.pastryService.getProduct(this.idProduct);
      this.pastry.author = this.authorService.getAuthorById(this.pastry.idAuthor);
    })
  }

  addToCart2(pastry: Pastry){
    console.log(pastry)
     this.cartService.addToCart(pastry);
    // console.log('hola');
    // this.pastry = this.pastryService.getProduct(this.idProduct);
  }

}
