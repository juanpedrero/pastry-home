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

  public getProducts(): Pastry[] {
    return this.getPastries();
  }


  public getProduct(id: number): Pastry {
    return this.getPastries().find((item: Pastry) => {
        return item.id === id;
      });
    }

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

  // getPastryByIdFromList(list: Pastry[], id: number): Pastry {
  //   return list.find((pastry) => id === pastry.id);
  // }

  // getPastryById(id: number): Pastry {
  //   const list = this.getPastries();
  //   return list.find((pastry:Pastry) => id === pastry.id);
  // }


  fillPastryListWithAuthor(list: Pastry[], idAuthor: number): Pastry[] {
    const filledList: Pastry[] = [...list];
    const author = this.authorService.getAuthorById(idAuthor);
    filledList.map((pastry) => pastry.author = author)
    return filledList;
  }



  createListWithTypeOfFilters(list: Pastry[], filters: string[]): Pastry[] {
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

  createListWithAllergiesFilters(list: Pastry[], filters: string[]): Pastry[] {
    let newArray2 = [];
    filters.forEach((filter) => {
      const filteredArray = list.filter((element) => {
        const index = element.allergy.findIndex(e => filter === e);
        return index !== -1;
      })

      newArray2 = newArray2.concat(filteredArray);
    });
    return newArray2;
  }

  createListWithOccasionFilters(list: Pastry[], filters: string[]): Pastry[] {
    let newArray3 = [];
    filters.forEach((filter) => {
      const filteredArray = list.filter((element) => {
        const index = element.ocassion.findIndex(e => filter === e);
        return index !== -1;
      })

      newArray3 = newArray3.concat(filteredArray);
    });
    return newArray3;
  }



  getPastryFiltersTypeOf(): Object[] {
    return [
      { name: 'Tarta', value: 'cake', id: '1' },
      { name: 'Postre', value: 'dessert', id: '2' },
      { name: 'Helado', value: 'iceCream', id: '3' },
      { name: 'Pastas', value: 'teaBiscuit', id: '4' },
      { name: 'Chocolate', value: 'chocolate', id: '5' }
    ]
  }

  getPastryFiltersAllergy(): Object[] {
    return [
      { allergy: 'Gluten', value: 'gluten', id: '6' },
      { allergy: 'Huevo', value: 'egg', id: '7' },
      { allergy: 'Frutos Secos', value: 'nuts', id: '8' },
      { allergy: 'Cacahuete', value: 'peanuts', id: '9' },
      { allergy: 'Soja', value: 'soja', id: '10' },
      { allergy: 'Leche', value: 'milk', id: '11' }
    ]
  }

  getPastryFiltersOcassion(): Object[] {
    return [
      { ocassion: 'Cumpleaños', value: 'birthday', id: '12' },
      { ocassion: 'Boda', value: 'wedding', id: '13' },
      { ocassion: 'Baby Shower', value: 'babyShower', id: '14' },
      { ocassion: 'Con amigos', value: 'friends', id: '15' },
    ]
  }



  getPastries(): Pastry[] {
    return <Pastry[]> [
      {
        id: 1,
        img: '../assets/images/brazo_navidad.jpg',
        name: "Brazo de Navidad",
        idAuthor: 1,
        description: 'Denominado brazo gitano o Manga Gitana, tiene su origen legendario en un monje berciano que en el medievo recorrió el mundo y en un monasterio egipcio descubrió este postre y lo trajo a España (algunos aventuran su origen como «brazo egipciano»).' ,
        description2:'Otra versión menos legendaria sobre su origen se refiere a los caldereros gitanos que, desde principios del XIX y primera mitad del siglo XX, recorrían las pastelerías de Barcelona vendiendo recipientes de cobre y otras chamarilerías y que eran ‘recompensados’ con recortes sobrantes de bizcocho que ‘apoyaban sobre su brazo’. Así lo relataba el presidente del Gremio de Pastisseria de Barcelona, Joan Turull i Estatuet citando a los caldereros de etnia gitana que, habiendo formado su propio gremio en la reparación y venta de cacharrería en cobre batido, laminado o forjado (ollas, calderos, cazos, chocolateras, moldes, etc.), recibían junto al pago por su trabajo los recortes que sobraban de los pasteles del día, que para poder ser transportados enrollaban en una plancha de bizcocho. “Cuando se marchaban con su cilindro de recortes apoyado en el brazo –contaba Turull i Estatuet–, los operarios del obrador comentaban: ‘Qué bien va el pastel en el brazo del gitano',
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
        typeOf: ['dessert'],
        allergy: [
          'gluten'
        ],
        ocassion: [
          'birthday',
        ],
        quantity: 1
      },
      {
        id: 2,
        img: '../assets/images/carlota.jpg',
        name: "Tarta Carlota",
        idAuthor: 1,
        description: "La charlotte nació en el siglo XVIII en el Reino Unido, y se llamaba Charlotte (en español: Carlota) en honor de la reina Carlota de Mecklemburgo-Strelitz, esposa de Jorge III. Se preparaba en un molde tapizado con pan de molde untado con mantequilla o brioche, y relleno de compota de fruta (manzanas o ciruelas). Era une especie de pudding que se horneaba durante horas.",
        description2:"En 1800, el chef francés Marie-Antoine Carême (1784-1833) adaptó la receta inglesa convirtiéndola en un postre frío elaborado en un molde redondo, colocando bizcochos de soletilla alrededor del molde y rellenándolo de crema bávara. Lo llamó primero charlotte à la parisienne (Carlota a la parisina), pero años más tarde, cuando estaba al servicio del zar Alejandro I de Rusia, renombró el postre como Charlotte à la russe (Carlota a la rusa), nombre que sigue llevando en Francia.",
        rating: 3,
        price: 17,
        categories: [
          'Helado',
          'Chocolate'
        ],
        ingredients: [
          'Harina, ',
          'huevos, ',
          'leche y ',
          'chocolate'
        ],
        typeOf: ['dessert', 'cake'],
        allergy: [
          'milk',

        ],
        ocassion: [
          'babyShower'
        ],
        quantity: 1

      },
      {
        id: 3,
        img: '../assets/images/cheesecake.jpg',
        name: "Tarta de Queso",
        idAuthor: 2,
        description: "Una antigua forma de pastel de queso podría haber sido un plato muy popular en la Antigua Grecia, incluso antes de la adopción romana del platillo con la conquista de Grecia. ​La mención escrita más temprana de un pastel de queso fue hecha por el médico griego Aegimus, que escribió un libro sobre el arte de hacer queso. ​Catón el Viejo, en su manual De Agri Cultura (también llamado De Re Rustica) incluye recetas de tres pasteles para usos religiosos. ​​Es importante señalar que a pesar de que a estas primeras formas se les llamó 'pasteles de queso', diferían mucho en sabor y consistencia de la tarta de queso contemporánea.",
        description2:"Integrado definitivamente al patrimonio gastronómico europeo, este postre cruzó el atlántico con el flujo de inmigrantes que llegaron a Estados Unidos en busca de mejores condiciones de vida. En 1872 un quesero norteamericano al intentar copiar el neufchâtel, un queso de origen francés, terminó creando un queso cremoso que con el tiempo daría lugar al nacimiento del famoso queso philadelphia.",
        rating: 5,
        price: 19,
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
          'egg'
        ],
        ocassion: [
          'birthday'
        ],
        quantity: 1

      },
      {
        id: 4,
        img: '../assets/images/cherry_pie.jpg',
        name: "Tarta de Cerezas",
        idAuthor: 2,
        description: "Este bonito y delicado fruto porque estamos en temporada, resulta fácil de realizar y riquísima de comer.La receta original del postre se hace con cerezas ácidas llamadas morello pero nosotros hemos empleado cerezas normales que encontramos en las fruterías y hemos incorporado una pequeña cantidad de manzana granny Smith.",
        description2:"En cuanto a la base, se trata de masa quebrada que podemos elaborar nosotros mismos, o podemos comprarla en el súper.",
        rating: 3.5,
        price: 16,
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

          'soja'
        ],
        ocassion: [
          'wedding'
        ],
        quantity: 1

      },
      {
        id: 5,
        img: '../assets/images/choco_cake.jpg',
        name: "Chococake",
        idAuthor: 3,
        description: "El pastel de chocolate, tarta de chocolate o torta de chocolate, es un postre conocido internacionalmente, que se popularizó a finales del siglo XIX y se sirve frecuentemente en reuniones, como fiestas de cumpleaños y bodas. Los ingredientes pueden variar dependiendo de la receta, pero por lo general incluyen una combinación de huevos, azúcar, polvo de cacao, chocolate, mantequilla o aceite, agua o leche, sal y bicarbonato de sodio. Otras variaciones pueden incluir chocolate derretido, crema ácida, suero de mantequilla, jugo de frutas o jarabes.",
        description2:"Los panaderos usan extracto de vainilla, licores o líquidos condimentados como el café, para añadir diferentes gustos al sabor del chocolate. Se usan además una variedad de decorados, escarchados o glaseados, así como especias.",
        rating: 3.5,
        price: 12,
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
        typeOf: ['chocolate', 'dessert'],
        allergy: [

          'egg'
        ],
        ocassion: [
          'friends'
        ],
        quantity: 1

      },
      {
        id: 6,
        img: '../assets/images/churros.jpg',
        name: "Churros (12uds)",
        idAuthor: 4,
        description: "El churro es una masa a base de harina cocinada en aceite, una comida de las denominadas «frutas de sartén». Los churros son populares en España, Portugal, Francia, América Latina, Filipinas, Bélgica y algunas zonas de los Estados Unidos. La fabricación y venta se realiza en locales especializados denominados churrerías o fábricas de churros.1​",
        description2:"Su forma puede ser recta, en forma de bastón, en lazos o rulos (espirales). En sus variantes modernas, a veces pueden tener relleno o estar rebozados de azúcar, chocolate, crema pastelera o dulce de leche.",
        rating: 3.5,
        price: 6,
        categories: [
          'Fritos'
        ],
        ingredients: [
          'Harina de arroz, ',
          'agua y ',
          'sal',
        ],
        typeOf: ['dessert'],
        allergy: [
          'peanut'
        ],
        ocassion: [
          'friends'
        ],
        quantity: 1
      },
      {
        id: 7,
        img: '../assets/images/cupcakes.jpg',
        name: "Magdalenas de chocolate",
        idAuthor: 2,
        description: "La receta lleva los siguientes ingredientes:​ huevos, azúcar, mantequilla, harina de trigo, levadura, y aroma de limón obtenido generalmente de la cáscara. En España es costumbre utilizar también la ralladura de la cáscara de una naranja. En la receta tradicional francesa, se baten las claras de huevo a punto de nieve para dar más ligereza a la masa.",
        description2:"En esta ocasión se le ha añadido chocolate 70% para darle el intenso sabor que gusta a los más golosos",
        rating: 2,
        price: 8,
        categories: [

          'Vegano',
          'Sin Gluten'
        ],
        ingredients: [
          'Harina de arroz, ',
          'huevos, ',
          'leche y ',
          'queso',
        ],
        typeOf: ['dessert', 'chocolate'],
        allergy: [
          'gluten'
        ],
        ocassion: [
          'babyShower'
        ],
        quantity: 1

      },
      {
        id: 8,
        img: '../assets/images/milhojas.jpg',
        name: "Milhojas",
        idAuthor: 4,
        description: "El milhojas es un dulce tradicional atribuido a la repostería francesa (Mille-feuille en francés), aunque su origen sea incierto. Es un pastel de forma rectangular, que contiene merengue o crema pastelera entre dos capas de hojaldre espolvoreado con azúcar glas.",
        description2:"En esta ocasión se ha rellenado con crema pastelera al limón, y se le ha añadido un glaseado con toques de chocolate.",
        rating: 3.5,
        price: 15,
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
        typeOf: ['dessert'],
        allergy: [
          'gluten',

        ],
        ocassion: [
          'birthday'
        ],
        quantity: 1
      },
      {
        id: 9,
        img: '../assets/images/strawberrie.jpg',
        name: "Tarta de Fresa",
        idAuthor: 1,
        description: "Tarta de fresa Fraisier. Así se llama este precioso pastel de fresas que toma su nombre del francés (fraise es fresa en francés) y que es la tarta favorita de mi madre, y es que esta Tarta de fresa es ideal para cualquier día pero también para una celebración especial porque es muy vistoso, no es complicado de preparar, congela muy bien y porque gusta a todo el mundo. es un postre fácil de tomar y gusta a mayores y pequeños.",
        description2: "Se hace con un bizcocho genovés muy fino y se rellena con fresas y una crema de nata con crema de vainilla y además de estar riquísimo es precioso.",
        rating: 3.5,
        price: 22,
        categories: [
          'Frutas'
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
          'wedding'
        ],
        quantity: 1

      },
      {
        id: 10,
        img: '../assets/images/flan.jpg',
        name: "Flan (2 uds)",
        idAuthor: 1,
        description: "El huevo, al cocerse al baño María, se cuaja y toma la forma del molde, adquiriendo una textura ligera, gelatinosa y cremosa. Junto a los huevos son necesarios otros ingredientes que le aporten sabor, generalmente leche aromatizada con vainilla, canela o cáscara de limón. ",
        description2:"Tradicionalmente se vierte caramelo en el molde, para que una vez terminada la cocción cuando se invierte el molde el flan quede cubierto por el caramelo.",
        rating: 3.5,
        price: 4.5,
        categories: [
          'Sin gluten',
        ],
        ingredients: [
          'Harina, ',
          'huevos y ',
          'leche',
        ],
        typeOf: ['dessert'],
        allergy: [
          'gluten'
        ],
        ocassion: [
          'friends'
        ],
        quantity: 1


      },
      {
        id: 11,
        img: '../assets/images/cruasan.jpg',
        name: "Cruasán (ud)",
        idAuthor: 1,
        description: "El cruasán (del francés croissant, “creciente”),​ es una pieza de panadería de origen austriaco, cuya versión hojaldrada se desarrolló en Francia. Está hecho con una masa de hojaldre específica que contiene levadura, mantequilla o margarina.",
        description2: "La costumbre de elaborar pastelitos con forma de medialuna curva remonta a una tradición milenaria, que perdura hoy en día en pasteles dulces como el tchareke de Argelia, el kaab el ghzal de Marruecos o el ay çöreği de Turquía que los turcos habrían introducido en Europa en el siglo XVII.",
        rating: 3.5,
        price: 1.5,
        categories: [
          'Sin gluten',
        ],
        ingredients: [
          'Harina, ',
          'huevos y ',
          'leche',
        ],
        typeOf: ['dessert'],
        allergy: [

          'soja'
        ],
        ocassion: [
          'friends'
        ],
        quantity: 1

      },
      {
        id: 12,
        img: '../assets/images/ginger_cookie.jpg',
        name: "Cookies de jengibre (ud)",
        idAuthor: 1,
        description: "Las galletas de jengibre son un dulce tradicional de Navidad, especialmente en Europa. Se le pueden dar multitud de formas para crear un ambiente más navideño: estrella, abeto, corazón, casa... Pero una de las formas más extendidas es la de muñeco.",
        description2: "Su origen se remonta a la reina Isabel I de Inglaterra, que regalaba galletas de jengibre con forma de hombre. Se pueden aprovechar las fiestas de Navidad para pedir a los niños que nos ayuden a elaborar estas galletas. Disfrutarán mucho decorándolas.",
        rating: 3.5,
        price: 1.2,
        categories: [
          'Sin gluten',
        ],
        ingredients: [
          'Harina, ',
          'huevos y ',
          'leche',
        ],
        typeOf: ['dessert', 'teaBiscuit'],
        allergy: [
          'gluten'
        ],
        ocassion: [
          'friends'
        ],
        quantity: 1

      },
      {
        id: 13,
        img: '../assets/images/tiramisu.jpg',
        name: "Tiramisú",
        idAuthor: 1,
        description: "El tiramisú (del italiano tiramisù) es un postre frío de cuchara que se monta en capas. No existe una receta única de elaboración, sino variantes a partir de una serie de ingredientes base que pueden ser representados por distintos productos.",
        description2:"Entre los años setenta, ochenta y noventa, la receta utilizada en el restaurante Toulá de Milán utilizaba cinco ingredientes: huevos y azúcar batidos, bizcochos Savoiardi mojados en café expresso y cacao en polvo.",
        rating: 3.5,
        price: 19,
        categories: [
          'Sin gluten',
        ],
        ingredients: [
          'Harina, ',
          'huevos y ',
          'leche',
        ],
        typeOf: ['dessert'],
        allergy: [
          'gluten'
        ],
        ocassion: [
          'birthday'
        ],
        quantity: 1

      },
      {
        id: 14,
        img: '../assets/images/macarons.jpg',
        name: "Macarons (12uds)",
        idAuthor: 1,
        description: "El macarón es un tipo de galleta tradicional de la Gastronomía de Francia e Italia hecha de clara de huevo, almendra molida, azúcar glas y azúcar. De origen Francés, el dulce se dio a conocer en el siglo XVI, surgiendo del horno del pastelero de la corte francesa como cúpulas redondas con base plana, y en el siglo XIX se empezaron a unir de dos en dos con un relleno en medio.",
        description2:"Los macarones actuales son pastelitos hechos con dos galletas y una crema o ganache entre ambas. No deben confundirse con los dulces de nombre parecido llamados macaroons, que son dulces densos hechos con almendra y clara de huevo o con una pasta de almendra gruesa.",
        rating: 5,
        price: 16,
        categories: [
          'Sin gluten',
        ],
        ingredients: [
          'Harina, ',
          'huevos y ',
          'leche',
        ],
        typeOf: ['teaBiscuit'],
        allergy: [
          'gluten'
        ],
        ocassion: [
          'babyShower'
        ],
        quantity: 1

      },
      {
        id: 15,
        img: '../assets/images/helado_mora.jpg',
        name: "Helado de mora",
        idAuthor: 1,
        description: "Helado de moras silvestres, sin azúcar y con un toque ácido que hará disfrutar a tu pladar. Elaborado con leche de primera calidad, te sorprenderá por su increible untuosidad",
        rating: 3.5,
        price: 6,
        categories: [
          'Frutas'
        ],
        ingredients: [
          'Harina, ',
          'huevos y ',
          'leche',
        ],
        typeOf: [],
        allergy: [
          'milk'
        ],
        ocassion: [
          'Con amigos',
        ],
        quantity: 1

      },
      {
        id: 16,
        img: '../assets/images/magdalena_arandano.jpg',
        name: "Magdalena de arándanos (ud)",
        idAuthor: 1,
        description: "Magdalenas recién horneadas con un toque de vainilla y arándanos negros. Para los amantes de los sabores ácidos y dulces. ¡No podrás resistirte!",
        rating: 4,
        price: 1.5,
        categories: [
          'Frutas'
        ],
        ingredients: [
          'Harina, ',
          'huevos, ',
          'leche',
          'y arándanos'
        ],
        typeOf: ['dessert'],
        allergy: [
          'gluten',
          'millk'
        ],
        ocassion: [
          'friends',
        ],
        quantity: 1
      },
      {
        id: 17,
        img: '../assets/images/tartaleta_fruta.jpg',
        name: "Tartaleta de frutas (ud)",
        idAuthor: 1,
        description: "Una varidada selección de frutas de temporada con una base de crema pastelera. Base de hojaldre de la mejor calidad para darle ese toque crujiente y aireado a este delicioso dulce.",
        rating: 5,
        price: 4,
        categories: [
          'Frutas'
        ],
        ingredients: [
          'Harina, ',
          'huevos, ',
          'leche',
          'y arándanos'
        ],
        typeOf: ['dessert'],
        allergy: [
          'gluten',
          'millk'
        ],
        ocassion: [
          'friends',
        ],
        quantity: 1
      },
      {
        id: 18,
        img: '../assets/images/tartita_maracuya.jpg',
        name: "Tartita de maracuyá (ud)",
        idAuthor: 5,
        description: "Delicioso maracuyá maduro con intenso dulzor, sobre una base de crema pastelera con toques ácidos para disfrutar de los contrastes más exóticos. ",
        rating: 5,
        price: 5,
        categories: [
          'Fruta',
        ],
        ingredients: [
          'Harina, ',
          'huevos, ',
          'leche, ',
          'levadura fresca ',
          'y maracuýa'
        ],
        typeOf: ['dessert'],
        allergy: [
          'gluten',
          'millk'
        ],
        ocassion: [
          'babyShower',
        ],
        quantity: 1
      },
      {
        id: 19,
        img: '../assets/images/helado_fresa.jpg',
        name: "Helado de fresas",
        idAuthor: 5,
        description: "Fresas de las mejores huertas se unen en esta incomparable creación para refrescar los días de verano. Elaboración artesanal sin colorantes ni conservantes ",
        rating: 5,
        price: 5,
        categories: [
          'Fruta',
        ],
        ingredients: [
          'huevos, ',
          'leche, ',
          'fresa ',
          'y azúcar'
        ],
        typeOf: ['iceCream'],
        allergy: [
          'gluten',
          'millk'
        ],
        ocassion: [
          'friends',
        ],
        quantity: 1
      },
    ];
  }
}
