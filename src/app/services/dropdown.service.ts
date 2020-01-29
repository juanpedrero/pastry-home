import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {
  private typeOfPastry = [
    { id: 1, itemName: "Tarta", value: "cake" },
    { id: 2, itemName: "Postre", value: 'dessert' },
    { id: 4, itemName: "Helado", value: 'iceCream' },
    { id: 5, itemName: "Pastas", value: 'teaBiscuit' },
    { id: 6, itemName: "Chocolate", value: 'chocolate' }
  ];
  private allergies = [
    { id: 1, itemName: "Gluten", value: 'gluten' },
    { id: 2, itemName: "Huevo",  value: 'egg' },
    { id: 3, itemName: "Frutos Secos", value: 'nuts' },
    { id: 4, itemName: "Cacahuete", value: 'peanuts' },
    { id: 5, itemName: "Soja", value: 'soja' },
    { id: 6, itemName: "Leche", value: 'milk' },
  ];
  private ocassion = [
    { id: 1, itemName: "Cumpleaños", value: 'birthday' },
    { id: 2, itemName: "Boda", value: 'wedding' },
    { id: 3, itemName: "Baby Shower", value: 'babyShower' },
    { id: 5, itemName: "Con Amigos", value: 'friends' }
  ];

  constructor() { }

  public getTypeOfPastry(): Array<any> {
    return this.typeOfPastry;
  }

  public getAllergies(): Array<any> {
    return this.allergies;
  }

  public getOcassion(): Array<any> {
    return this.ocassion;
  }
}
