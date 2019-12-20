import { Component, OnInit, Input } from '@angular/core';
import { Pastry } from '../types/pastry';
import { AuthorService } from '../services/author.service';

@Component({
  selector: 'app-pastry-card',
  templateUrl: './pastry-card.component.html',
  styleUrls: ['./pastry-card.component.scss']
})
export class PastryCardComponent implements OnInit {
  @Input() pastry: Pastry;
  constructor(private authorService: AuthorService) { }

  ngOnInit() {
    this.pastry.author = this.authorService.getAuthorById(this.pastry.idAuthor);
  }

}
