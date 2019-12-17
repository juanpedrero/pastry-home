import { InjectionToken } from '@angular/core';
import { Pastry } from '../types/pastry';

export const Pastries: Pastry[] = [
  {
    img: '../assets/images/carlota.jpg',
    namePastry: "string",
    nameAuthor: "string",
    description: "string",
    rating: "string",
    price: 20,
  },
  {
    img: "string",
    namePastry: "string",
    nameAuthor: "string",
    description: "string",
    rating: "string",
    price: 10,
   },
   {
    img: "string",
    namePastry: "string",
    nameAuthor: "string",
    description: "string",
    rating: "string",
    price: 14,
  },
  {
    img: "string",
    namePastry: "string",
    nameAuthor: "string",
    description: "string",
    rating: "string",
    price: 15,
  },
  {
    img: "string",
    namePastry: "string",
    nameAuthor: "string",
    description: "string",
    rating: "string",
    price: 24,
   },
   {
    img: "string",
    namePastry: "string",
    nameAuthor: "string",
    description: "string",
    rating: "string",
    price: 12,
   },
   {
    img: "string",
    namePastry: "string",
    nameAuthor: "string",
    description: "string",
    rating: "string",
    price: 11,
   }
];
export const PASTRIES = new InjectionToken<Pastry[]>('app.pastries');
