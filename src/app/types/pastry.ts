import { Author } from './author';

export interface Pastry {
  id?: number;
  img?: string;
  name?: string;
  idAuthor?: number;
  description?: string;
  description2?: string;
  rating?: number;
  price?: number;
  categories?: string[];
  ingredients?: string[];
  typeOf?: string[];
  allergy?: string[];
  ocassion?: string[];
  quantity?: number;
  author?: Author;
  currency?: string;
};
