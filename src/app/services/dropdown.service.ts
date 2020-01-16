import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {
  private typeOfPastry = [
    { id: 1, itemName: "Tarta" },
    { id: 2, itemName: "Postre" },
    { id: 3, itemName: "Postre" },
    { id: 4, itemName: "Helado" },
    { id: 5, itemName: "Pastas" },
    { id: 6, itemName: "Chocolate" }
  ];
  private allergies = [
    { id: 1, itemName: "Gluten" },
    { id: 2, itemName: "Huevo" },
    { id: 3, itemName: "Frutos Secos" },
    { id: 4, itemName: "Cacahuete" },
    { id: 5, itemName: "Soja" },
    { id: 6, itemName: "Leche" },
  ];
  private ocassion = [
    { id: 1, itemName: "Cumpleaños" },
    { id: 2, itemName: "Boda" },
    { id: 3, itemName: "Baby Shower" },
    { id: 4, itemName: "Comunión" },
    { id: 5, itemName: "Con Amigos" }
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
