import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Pastry } from '../types/pastry';
import { AuthorService } from '../services/author.service';

@Component({
  selector: 'app-pastry-card',
  templateUrl: './pastry-card.component.html',
  styleUrls: ['./pastry-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PastryCardComponent implements OnInit {

  @Input() pastry: Pastry;
  constructor(private authorService: AuthorService) { }

  ngOnInit() {
    this.pastry.author = this.authorService.getAuthorById(this.pastry.idAuthor);
  }

  public getCurrency(): string {
    return '€';
  }

}
