import { Injectable } from '@angular/core';
import { Pastry } from '../types/pastry';
import { AuthorService } from './author.service';
import { Author } from '../types/author';
import { CategoryService } from './category.service';
import { TransferState } from '@angular/platform-browser';


@Injectable({
  providedIn: 'root'
})
export class PastryService {

  constructor(private authorService: AuthorService, private categoryService: CategoryService) { }

  getPastriesWithBestRatingFromList(list: Pastry[], limit: number): Pastry[] {
    const sortedList = [...list];
    sortedList.sort((a, b) => b.rating - a.rating);
    return sortedList.slice(0, limit);
  }

  getPastriesByCategoryAndRating(category: string, limit: number): Pastry[] {
    const pastries = this.getPastries();
    let filteredPastries = this.getPastriesByCategoryFromList(pastries, category);
    filteredPastries = this.getPastriesWithBestRatingFromList(filteredPastries, limit);
    return filteredPastries;
  }

  getPastriesByCategoryFromList(list: Pastry[], category: string): Pastry[] {
    return list.filter((pastry) => {
      return pastry.categories.find((pastryCategory) => this.categoryService.transformCategoryToSlug(pastryCategory) === this.categoryService.transformCategoryToSlug(category)) !== undefined;
    });
  }

  getPastriesByCategory(category: string): Pastry[] {
    const list = this.getPastries();
    return list.filter((pastry) => {
      return pastry.categories.find((pastryCategory) => this.categoryService.transformCategoryToSlug(pastryCategory) === this.categoryService.transformCategoryToSlug(category)) !== undefined;
    });
  }

  getPastryByIdFromList(list: Pastry[], id: number): Pastry {
    return list.find((pastry)=> id === pastry.id);
  }

  getPastryById(id: number): Pastry {
    const list = this.getPastries();
    return list.find((pastry)=> id === pastry.id);
  }


  fillPastryListWithAuthor(list: Pastry[], idAuthor: number): Pastry[] {
    const filledList: Pastry[] = [...list];
    const author = this.authorService.getAuthorById(idAuthor);
    filledList.map((pastry) => pastry.author = author)
    return filledList;
  }

  createListWithTypeOfFilters(list: Pastry[], filters: string[]): Pastry[]{
    let newArray = [];
    filters.forEach((filter) => {
      const filteredArray = list.filter((element) => {
        const index = element.typeOf.findIndex(e => filter === e);
        return index !== -1;
      })

      newArray = newArray.concat(filteredArray);
    });
    return newArray;
  }

  createListWithAlleriesFilters(list: Pastry[], filters: string[]): Pastry[]{
    let newArray2 = [];
    filters.forEach((filter) => {
      const filteredArray = list.filter((element) => {
        const index = element.typeOf.findIndex(e => filter === e);
        return index !== -1;
      })

      newArray2 = newArray2.concat(filteredArray);
    });
    return newArray2;
  }

  getPastryFiltersTypeOf(): Object[] {
    return [
      {name: 'Tarta', value: 'cake'},
      {name: 'Postre', value: 'dessert'} ,
      {name: 'Helado', value: 'iceCream'},
      {name: 'Pastas', value: 'teaBiscuit'},
      {name: 'Chocolate', value: 'chocolate'}
    ]
  }

  getPastryFiltersAllergy(): Object[] {
    return [
      {name: 'Gluten', value: 'gluten'},
      {name: 'Huevo', value: 'egg'} ,
      {name: 'Frutos Secos', value: 'nuts'},
      {name: 'Cacahuete', value: 'peanuts'},
      {name: 'Soja', value: 'soja'},
      {name: 'Leche', vaue: 'milk'}
    ]
  }



  getPastries(): Pastry[] {
    return [
      {
        id: 1,
        img: '../assets/images/brazo_navidad.jpg',
        name: "Brazo de Navidad",
        idAuthor: 1,
        description: "Lorem fistrum llevame al sircoo ese que llega al ataquerl papaar papaar la caidita. Me cago en tus muelas quietooor pecador está la cosa muy malar a wan quietooor qué dise usteer la caidita. Qué dise usteer la caidita torpedo diodenoo pecador no puedor. Apetecan está la cosa muy malar torpedo a peich llevame al sircoo amatomaa jarl llevame al sircoo benemeritaar. Torpedo ese que llega condemor sexuarl torpedo torpedo condemor a gramenawer por la gloria de mi madre a wan te voy a borrar el cerito. A peich te va a hasé pupitaa a gramenawer se calle ustée jarl a peich al ataquerl de la pradera. Diodeno papaar papaar al ataquerl a peich la caidita diodeno. De la pradera qué dise usteer jarl diodeno te va a hasé pupitaa va usté muy cargadoo. Sexuarl fistro a gramenawer a peich hasta luego Lucas de la pradera te va a hasé pupitaa la caidita.",
        rating: 4.5,
        price: 14,
        categories: [
          'Sin Gluten',
          'Vegano'
        ],
        ingredients: [
          'Harina de maiz, ',
          'huevos, ',
          'leche, '
        ],
        typeOf: ['cake', 'dessert'],
        allergy: [
          'leche' ,
          'huevos'
        ],
        ocassion: [
          'Con amigos',
        ],
      },
      {
        id: 2,
        img: '../assets/images/carlota.jpg',
        name: "Tarta Carlota",
        idAuthor: 1,
        description: "Lorem fistrum llevame al sircoo ese que llega al ataquerl papaar papaar la caidita. Me cago en tus muelas quietooor pecador está la cosa muy malar a wan quietooor qué dise usteer la caidita. Qué dise usteer la caidita torpedo diodenoo pecador no puedor. Apetecan está la cosa muy malar torpedo a peich llevame al sircoo amatomaa jarl llevame al sircoo benemeritaar. Torpedo ese que llega condemor sexuarl torpedo torpedo condemor a gramenawer por la gloria de mi madre a wan te voy a borrar el cerito. A peich te va a hasé pupitaa a gramenawer se calle ustée jarl a peich al ataquerl de la pradera. Diodeno papaar papaar al ataquerl a peich la caidita diodeno. De la pradera qué dise usteer jarl diodeno te va a hasé pupitaa va usté muy cargadoo. Sexuarl fistro a gramenawer a peich hasta luego Lucas de la pradera te va a hasé pupitaa la caidita.",
        rating: 3,
        price: 7.50,
        categories: [
          'Chocolate'
        ],
        ingredients: [
          'Harina, ',
          'huevos, ',
          'leche y ',
          'chocolate'
        ],
        typeOf: ['cake'],
        allergy: [
          'leche' ,
          'huevos'
        ],
        ocassion: [
          'Con amigos',
        ],
      },
      {
        id: 3,
        img: '../assets/images/cheesecake.jpg',
        name: "Tarta de Queso",
        idAuthor: 2,
        description: "Lorem fistrum llevame al sircoo ese que llega al ataquerl papaar papaar la caidita. Me cago en tus muelas quietooor pecador está la cosa muy malar a wan quietooor qué dise usteer la caidita. Qué dise usteer la caidita torpedo diodenoo pecador no puedor. Apetecan está la cosa muy malar torpedo a peich llevame al sircoo amatomaa jarl llevame al sircoo benemeritaar. Torpedo ese que llega condemor sexuarl torpedo torpedo condemor a gramenawer por la gloria de mi madre a wan te voy a borrar el cerito. A peich te va a hasé pupitaa a gramenawer se calle ustée jarl a peich al ataquerl de la pradera. Diodeno papaar papaar al ataquerl a peich la caidita diodeno. De la pradera qué dise usteer jarl diodeno te va a hasé pupitaa va usté muy cargadoo. Sexuarl fistro a gramenawer a peich hasta luego Lucas de la pradera te va a hasé pupitaa la caidita.",
        rating: 5,
        price: 20,
        categories: [
          'Sin gluten',
          'Fritos'
        ],
        ingredients: [
          'Harina de arroz, ',
          'huevos, ',
          'leche y ',
          'queso'
        ],
        typeOf: ['cake'],
        allergy: [
          'huevos'
        ],
        ocassion: [
          'Con amigos',
          'Cumpleaños'
        ],
      },
      {
        id: 4,
        img: '../assets/images/cherry_pie.jpg',
        name: "Tarta de Cerezas",
        idAuthor: 2,
        description: "Lorem fistrum llevame al sircoo ese que llega al ataquerl papaar papaar la caidita. Me cago en tus muelas quietooor pecador está la cosa muy malar a wan quietooor qué dise usteer la caidita. Qué dise usteer la caidita torpedo diodenoo pecador no puedor. Apetecan está la cosa muy malar torpedo a peich llevame al sircoo amatomaa jarl llevame al sircoo benemeritaar. Torpedo ese que llega condemor sexuarl torpedo torpedo condemor a gramenawer por la gloria de mi madre a wan te voy a borrar el cerito. A peich te va a hasé pupitaa a gramenawer se calle ustée jarl a peich al ataquerl de la pradera. Diodeno papaar papaar al ataquerl a peich la caidita diodeno. De la pradera qué dise usteer jarl diodeno te va a hasé pupitaa va usté muy cargadoo. Sexuarl fistro a gramenawer a peich hasta luego Lucas de la pradera te va a hasé pupitaa la caidita.",
        rating: 3.5,
        price: 17,
        categories: [
          'Sin gluten',
          'Vegano',
          'Chocolate'
        ],
        ingredients: [
          'Harina de arroz, ',
          'huevos, ',
          'leche y ',
          'queso ',
        ],
        typeOf: ['cake'],
        allergy: [
          'leche' ,
          'soja'
        ],
        ocassion: [
          'Con amigos',
          'Comunion'
        ],
      },
      {
        id: 5,
        img: '../assets/images/choco_cake.jpg',
        name: "Muerte por chocolate",
        idAuthor: 3,
        description: "Lorem fistrum llevame al sircoo ese que llega al ataquerl papaar papaar la caidita. Me cago en tus muelas quietooor pecador está la cosa muy malar a wan quietooor qué dise usteer la caidita. Qué dise usteer la caidita torpedo diodenoo pecador no puedor. Apetecan está la cosa muy malar torpedo a peich llevame al sircoo amatomaa jarl llevame al sircoo benemeritaar. Torpedo ese que llega condemor sexuarl torpedo torpedo condemor a gramenawer por la gloria de mi madre a wan te voy a borrar el cerito. A peich te va a hasé pupitaa a gramenawer se calle ustée jarl a peich al ataquerl de la pradera. Diodeno papaar papaar al ataquerl a peich la caidita diodeno. De la pradera qué dise usteer jarl diodeno te va a hasé pupitaa va usté muy cargadoo. Sexuarl fistro a gramenawer a peich hasta luego Lucas de la pradera te va a hasé pupitaa la caidita.",
        rating: 3.5,
        price: 17,
        categories: [
          'Vegano',
          'Chocolate'
        ],
        ingredients: [
          'Harina de arroz, ',
          'huevos, ',
          'leche. ',
          'queso, ',
        ],
        typeOf: ['cake'],
        allergy: [
          'soja' ,
          'huevos'
        ],
        ocassion: [
          'Con amigos',
          'Comunion',
          'Cumpleaños'
        ],
      },
      {
        id: 6,
        img: '../assets/images/churros.jpg',
        name: "Churros",
        idAuthor: 4,
        description: "Lorem fistrum llevame al sircoo ese que llega al ataquerl papaar papaar la caidita. Me cago en tus muelas quietooor pecador está la cosa muy malar a wan quietooor qué dise usteer la caidita. Qué dise usteer la caidita torpedo diodenoo pecador no puedor. Apetecan está la cosa muy malar torpedo a peich llevame al sircoo amatomaa jarl llevame al sircoo benemeritaar. Torpedo ese que llega condemor sexuarl torpedo torpedo condemor a gramenawer por la gloria de mi madre a wan te voy a borrar el cerito. A peich te va a hasé pupitaa a gramenawer se calle ustée jarl a peich al ataquerl de la pradera. Diodeno papaar papaar al ataquerl a peich la caidita diodeno. De la pradera qué dise usteer jarl diodeno te va a hasé pupitaa va usté muy cargadoo. Sexuarl fistro a gramenawer a peich hasta luego Lucas de la pradera te va a hasé pupitaa la caidita.",
        rating: 3.5,
        price: 17,
        categories: [
          'Fritos'
        ],
        ingredients: [
          'Harina de arroz, ',
          'agua y ',
          'sal',
        ],
        typeOf: ['postre'],
        allergy: [
          'gluten'
        ],
        ocassion: [
          'Con amigos',
        ],
      },
      {
        id: 7,
        img: '../assets/images/cupcakes.jpg',
        name: "Cupcakes",
        idAuthor: 2,
        description: "Lorem fistrum llevame al sircoo ese que llega al ataquerl papaar papaar la caidita. Me cago en tus muelas quietooor pecador está la cosa muy malar a wan quietooor qué dise usteer la caidita. Qué dise usteer la caidita torpedo diodenoo pecador no puedor. Apetecan está la cosa muy malar torpedo a peich llevame al sircoo amatomaa jarl llevame al sircoo benemeritaar. Torpedo ese que llega condemor sexuarl torpedo torpedo condemor a gramenawer por la gloria de mi madre a wan te voy a borrar el cerito. A peich te va a hasé pupitaa a gramenawer se calle ustée jarl a peich al ataquerl de la pradera. Diodeno papaar papaar al ataquerl a peich la caidita diodeno. De la pradera qué dise usteer jarl diodeno te va a hasé pupitaa va usté muy cargadoo. Sexuarl fistro a gramenawer a peich hasta luego Lucas de la pradera te va a hasé pupitaa la caidita.",
        rating: 2,
        price: 17,
        categories: [
          'Frutas',
          'Vegano',
          'Sin Gluten'
        ],
        ingredients: [
          'Harina de arroz, ',
          'huevos, ',
          'leche y ',
          'queso',
        ],
        typeOf: ['postre'],
        allergy: [
          'gluten'
        ],
        ocassion: [
          'Con amigos',
          'Cumpleaños',
          'Con amigos'
        ],
      },
      {
        id: 8,
        img: '../assets/images/milhojas.jpg',
        name: "Milhojas",
        idAuthor: 4,
        description: "Lorem fistrum llevame al sircoo ese que llega al ataquerl papaar papaar la caidita. Me cago en tus muelas quietooor pecador está la cosa muy malar a wan quietooor qué dise usteer la caidita. Qué dise usteer la caidita torpedo diodenoo pecador no puedor. Apetecan está la cosa muy malar torpedo a peich llevame al sircoo amatomaa jarl llevame al sircoo benemeritaar. Torpedo ese que llega condemor sexuarl torpedo torpedo condemor a gramenawer por la gloria de mi madre a wan te voy a borrar el cerito. A peich te va a hasé pupitaa a gramenawer se calle ustée jarl a peich al ataquerl de la pradera. Diodeno papaar papaar al ataquerl a peich la caidita diodeno. De la pradera qué dise usteer jarl diodeno te va a hasé pupitaa va usté muy cargadoo. Sexuarl fistro a gramenawer a peich hasta luego Lucas de la pradera te va a hasé pupitaa la caidita.",
        rating: 3.5,
        price: 17,
        categories: [
          'Sin gluten',
          'Vegano',
        ],
        ingredients: [
          'Harina, ',
          'huevos, ',
          'mantequilla y ',
          'chocolate',
        ],
        typeOf: ['postre'],
        allergy: [
          'gluten' ,
          'soja'
        ],
        ocassion: [
          'Con amigos',
          'Comunion',
          'Boda'
        ],
      },
      {
        id: 9,
        img: '../assets/images/strawberrie.jpg',
        name: "Tarta de Fresa",
        idAuthor: 1,
        description: "Lorem fistrum llevame al sircoo ese que llega al ataquerl papaar papaar la caidita. Me cago en tus muelas quietooor pecador está la cosa muy malar a wan quietooor qué dise usteer la caidita. Qué dise usteer la caidita torpedo diodenoo pecador no puedor. Apetecan está la cosa muy malar torpedo a peich llevame al sircoo amatomaa jarl llevame al sircoo benemeritaar. Torpedo ese que llega condemor sexuarl torpedo torpedo condemor a gramenawer por la gloria de mi madre a wan te voy a borrar el cerito. A peich te va a hasé pupitaa a gramenawer se calle ustée jarl a peich al ataquerl de la pradera. Diodeno papaar papaar al ataquerl a peich la caidita diodeno. De la pradera qué dise usteer jarl diodeno te va a hasé pupitaa va usté muy cargadoo. Sexuarl fistro a gramenawer a peich hasta luego Lucas de la pradera te va a hasé pupitaa la caidita.",
        rating: 3.5,
        price: 17,
        categories: [
          'Sin gluten',
        ],
        ingredients: [
          'Harina, ',
          'huevos y ',
          'leche',
        ],
        typeOf: ['postre'],
        allergy: [
          'gluten'
        ],
        ocassion: [
          'Con amigos',
        ],
      },
      {
        id: 10,
        img: '../assets/images/strawberrie.jpg',
        name: "Tarta de Fresa",
        idAuthor: 1,
        description: "Lorem fistrum llevame al sircoo ese que llega al ataquerl papaar papaar la caidita. Me cago en tus muelas quietooor pecador está la cosa muy malar a wan quietooor qué dise usteer la caidita. Qué dise usteer la caidita torpedo diodenoo pecador no puedor. Apetecan está la cosa muy malar torpedo a peich llevame al sircoo amatomaa jarl llevame al sircoo benemeritaar. Torpedo ese que llega condemor sexuarl torpedo torpedo condemor a gramenawer por la gloria de mi madre a wan te voy a borrar el cerito. A peich te va a hasé pupitaa a gramenawer se calle ustée jarl a peich al ataquerl de la pradera. Diodeno papaar papaar al ataquerl a peich la caidita diodeno. De la pradera qué dise usteer jarl diodeno te va a hasé pupitaa va usté muy cargadoo. Sexuarl fistro a gramenawer a peich hasta luego Lucas de la pradera te va a hasé pupitaa la caidita.",
        rating: 3.5,
        price: 17,
        categories: [
          'Sin gluten',
        ],
        ingredients: [
          'Harina, ',
          'huevos y ',
          'leche',
        ],
        typeOf: ['cake'],
        allergy: [
          'gluten'
        ],
        ocassion: [
          'Con amigos',
          'baby shower'
        ],

      },
      {
        id: 11,
        img: '../assets/images/strawberrie.jpg',
        name: "Tarta de Fresa",
        idAuthor: 1,
        description: "Lorem fistrum llevame al sircoo ese que llega al ataquerl papaar papaar la caidita. Me cago en tus muelas quietooor pecador está la cosa muy malar a wan quietooor qué dise usteer la caidita. Qué dise usteer la caidita torpedo diodenoo pecador no puedor. Apetecan está la cosa muy malar torpedo a peich llevame al sircoo amatomaa jarl llevame al sircoo benemeritaar. Torpedo ese que llega condemor sexuarl torpedo torpedo condemor a gramenawer por la gloria de mi madre a wan te voy a borrar el cerito. A peich te va a hasé pupitaa a gramenawer se calle ustée jarl a peich al ataquerl de la pradera. Diodeno papaar papaar al ataquerl a peich la caidita diodeno. De la pradera qué dise usteer jarl diodeno te va a hasé pupitaa va usté muy cargadoo. Sexuarl fistro a gramenawer a peich hasta luego Lucas de la pradera te va a hasé pupitaa la caidita.",
        rating: 3.5,
        price: 17,
        categories: [
          'Sin gluten',
        ],
        ingredients: [
          'Harina, ',
          'huevos y ',
          'leche',
        ],
        typeOf: ['postre'],
        allergy: [
          'gluten'
        ],
        ocassion: [
          'Con amigos',
        ],
      },
      {
        id: 12,
        img: '../assets/images/strawberrie.jpg',
        name: "Tarta de Fresa",
        idAuthor: 1,
        description: "Lorem fistrum llevame al sircoo ese que llega al ataquerl papaar papaar la caidita. Me cago en tus muelas quietooor pecador está la cosa muy malar a wan quietooor qué dise usteer la caidita. Qué dise usteer la caidita torpedo diodenoo pecador no puedor. Apetecan está la cosa muy malar torpedo a peich llevame al sircoo amatomaa jarl llevame al sircoo benemeritaar. Torpedo ese que llega condemor sexuarl torpedo torpedo condemor a gramenawer por la gloria de mi madre a wan te voy a borrar el cerito. A peich te va a hasé pupitaa a gramenawer se calle ustée jarl a peich al ataquerl de la pradera. Diodeno papaar papaar al ataquerl a peich la caidita diodeno. De la pradera qué dise usteer jarl diodeno te va a hasé pupitaa va usté muy cargadoo. Sexuarl fistro a gramenawer a peich hasta luego Lucas de la pradera te va a hasé pupitaa la caidita.",
        rating: 3.5,
        price: 17,
        categories: [
          'Sin gluten',
        ],
        ingredients: [
          'Harina, ',
          'huevos y ',
          'leche',
        ],
        typeOf: ['postre'],
        allergy: [
          'gluten'
        ],
        ocassion: [
          'Con amigos',
        ],
      },
      {
        id: 13,
        img: '../assets/images/strawberrie.jpg',
        name: "Tarta de Fresa",
        idAuthor: 1,
        description: "Lorem fistrum llevame al sircoo ese que llega al ataquerl papaar papaar la caidita. Me cago en tus muelas quietooor pecador está la cosa muy malar a wan quietooor qué dise usteer la caidita. Qué dise usteer la caidita torpedo diodenoo pecador no puedor. Apetecan está la cosa muy malar torpedo a peich llevame al sircoo amatomaa jarl llevame al sircoo benemeritaar. Torpedo ese que llega condemor sexuarl torpedo torpedo condemor a gramenawer por la gloria de mi madre a wan te voy a borrar el cerito. A peich te va a hasé pupitaa a gramenawer se calle ustée jarl a peich al ataquerl de la pradera. Diodeno papaar papaar al ataquerl a peich la caidita diodeno. De la pradera qué dise usteer jarl diodeno te va a hasé pupitaa va usté muy cargadoo. Sexuarl fistro a gramenawer a peich hasta luego Lucas de la pradera te va a hasé pupitaa la caidita.",
        rating: 3.5,
        price: 17,
        categories: [
          'Sin gluten',
        ],
        ingredients: [
          'Harina, ',
          'huevos y ',
          'leche',
        ],
        typeOf: ['postre'],
        allergy: [
          'gluten'
        ],
        ocassion: [
          'Con amigos',
        ],
      },
      {
        id: 14,
        img: '../assets/images/strawberrie.jpg',
        name: "Tarta de Fresa",
        idAuthor: 1,
        description: "Lorem fistrum llevame al sircoo ese que llega al ataquerl papaar papaar la caidita. Me cago en tus muelas quietooor pecador está la cosa muy malar a wan quietooor qué dise usteer la caidita. Qué dise usteer la caidita torpedo diodenoo pecador no puedor. Apetecan está la cosa muy malar torpedo a peich llevame al sircoo amatomaa jarl llevame al sircoo benemeritaar. Torpedo ese que llega condemor sexuarl torpedo torpedo condemor a gramenawer por la gloria de mi madre a wan te voy a borrar el cerito. A peich te va a hasé pupitaa a gramenawer se calle ustée jarl a peich al ataquerl de la pradera. Diodeno papaar papaar al ataquerl a peich la caidita diodeno. De la pradera qué dise usteer jarl diodeno te va a hasé pupitaa va usté muy cargadoo. Sexuarl fistro a gramenawer a peich hasta luego Lucas de la pradera te va a hasé pupitaa la caidita.",
        rating: 3.5,
        price: 17,
        categories: [
          'Sin gluten',
        ],
        ingredients: [
          'Harina, ',
          'huevos y ',
          'leche',
        ],
        typeOf: ['postre'],
        allergy: [
          'gluten'
        ],
        ocassion: [
          'Con amigos',
        ],
      },
      {
        id: 15,
        img: '../assets/images/strawberrie.jpg',
        name: "Tarta de Fresa",
        idAuthor: 1,
        description: "Lorem fistrum llevame al sircoo ese que llega al ataquerl papaar papaar la caidita. Me cago en tus muelas quietooor pecador está la cosa muy malar a wan quietooor qué dise usteer la caidita. Qué dise usteer la caidita torpedo diodenoo pecador no puedor. Apetecan está la cosa muy malar torpedo a peich llevame al sircoo amatomaa jarl llevame al sircoo benemeritaar. Torpedo ese que llega condemor sexuarl torpedo torpedo condemor a gramenawer por la gloria de mi madre a wan te voy a borrar el cerito. A peich te va a hasé pupitaa a gramenawer se calle ustée jarl a peich al ataquerl de la pradera. Diodeno papaar papaar al ataquerl a peich la caidita diodeno. De la pradera qué dise usteer jarl diodeno te va a hasé pupitaa va usté muy cargadoo. Sexuarl fistro a gramenawer a peich hasta luego Lucas de la pradera te va a hasé pupitaa la caidita.",
        rating: 3.5,
        price: 17,
        categories: [
          'Sin gluten',
        ],
        ingredients: [
          'Harina, ',
          'huevos y ',
          'leche',
        ],
        typeOf: ['postre'],
        allergy: [
          'gluten'
        ],
        ocassion: [
          'Con amigos',
        ],
      },
            {
        id: 16,
        img: '../assets/images/strawberrie.jpg',
        name: "Tarta de Fresa",
        idAuthor: 1,
        description: "Lorem fistrum llevame al sircoo ese que llega al ataquerl papaar papaar la caidita. Me cago en tus muelas quietooor pecador está la cosa muy malar a wan quietooor qué dise usteer la caidita. Qué dise usteer la caidita torpedo diodenoo pecador no puedor. Apetecan está la cosa muy malar torpedo a peich llevame al sircoo amatomaa jarl llevame al sircoo benemeritaar. Torpedo ese que llega condemor sexuarl torpedo torpedo condemor a gramenawer por la gloria de mi madre a wan te voy a borrar el cerito. A peich te va a hasé pupitaa a gramenawer se calle ustée jarl a peich al ataquerl de la pradera. Diodeno papaar papaar al ataquerl a peich la caidita diodeno. De la pradera qué dise usteer jarl diodeno te va a hasé pupitaa va usté muy cargadoo. Sexuarl fistro a gramenawer a peich hasta luego Lucas de la pradera te va a hasé pupitaa la caidita.",
        rating: 3.5,
        price: 17,
        categories: [
          'Sin gluten',
        ],
        ingredients: [
          'Harina, ',
          'huevos y ',
          'leche',
        ],
        typeOf: ['postre'],
        allergy: [
          'gluten'
        ],
        ocassion: [
          'Con amigos',
        ],
      },
    ];
  }
}
