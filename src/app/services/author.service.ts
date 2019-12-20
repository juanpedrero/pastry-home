import { Injectable } from '@angular/core';
import { Author } from '../types/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor() { }

  getAuthorById(id: number): Author {
    const authorList = this.getAuthors();
    return authorList.find((author) => author.id === id);
  }

  getAuthors(): Author[] {
    return [
      {
        id: 1,
        name: 'Tania',
        description: 'Viva Andalucia Manquepierda',
        img: '../assets/images/avatar.jpg',
      },
      {
        id: 2,
        name: 'Juan',
        description: 'Haria y Huevos',
        img: '../assets/images/avatar.jpg',
      },
      {
        id: 3,
        name: 'Jorge',
        description: 'SADASDASDASDASDASDAS',
        img: '../assets/images/avatar.jpg',
      },
      {
        id: 4,
        name: 'Maru',
        description: 'Ven pa ca orejon, pim pam',
        img: '../assets/images/avatar.jpg',
      },
    ]
  }
}
