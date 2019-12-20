import { Author } from './author';

export interface Pastry {
  id: number;
  img: string;
  name: string;
  idAuthor: number;
  description: string;
  rating: number;
  price: number;
  categories: string[];
  ingredients: string[];
  author?: Author;
};
