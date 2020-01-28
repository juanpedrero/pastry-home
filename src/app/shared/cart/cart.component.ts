import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Pastry } from 'src/app/types/pastry';
import { Observable, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public shoppingCartItems$: Observable<Pastry[]>;
  public shoppingCartItems: Pastry[] = [];
  public allTotal: number;
  // public quantityItems:Pastry[] = this.shoppingCartItems.filter(pastry => pastry.quantity === pastry.quantity)

  // protected productList: Pastry[];
  // protected product: Pastry[];

  // public productListQty$: Observable<Pastry[]>;
  // public productListQty: Pastry[] = i[];


  // protected message: string;

  // dafualtQuantity:number=1;
  // productAddedTocart:Pastry[];
  // allTotal:number;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.shoppingCartItems$ = this
      .cartService
      .getItems();

    this.shoppingCartItems$.subscribe(data => {
      this.shoppingCartItems = data
    });
    //  this.productListQty$.subscribe(data => this.quantityItems = data )
    this.loadStripe();
  }

  deleteItemCart(pastry: Pastry) {
    this.cartService.removeFromCart(pastry);

  }


  sumProduct(pastry: Pastry) {
    this.cartService.sumProductToCart(pastry);
  }

  restProduct(pastry: Pastry) {
    this.cartService.restProductToCart(pastry);
  }

  getTotal(pastries) {
    let total = 0;
    pastries.forEach(pastry => {
      total = total + pastry.quantity
    })
    return total;
  }

  // getTotalPrice(pastries) {
  //   let total = 0;
  //   // pastries.find(pastry => pastry.id == pastry.id);
  //   pastries.forEach(pastry => {
  //     total = total + pastry.quantity * pastry.price;
  //   })
  //   return total;
  // }

  getTotalPrice(allItems: Pastry[]) {
    let total = 0;
    for (let i in allItems) {
      total = total + (allItems[i].quantity * allItems[i].price);
    }
    return this.allTotal = total;
  }

  loadStripe() {
    if (!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      window.document.body.appendChild(s);
    }
  }

  pay(amount) {

    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_aeUUjYYcx4XNfKVW60pmHTtI',
      locale: 'ES',
      currency: '€',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token)
        alert('Token Created!!');
        let data = {'currency': 'ES'}
      }
    });

    handler.open({
      name: 'PastryHome',
      currency: 'ES',
      amount: amount * 100
    });

}

  // getTotalPrice(): Observable<number>{
  //   return this.shoppingCartItems.map((items: Pastry[]) => {
  //     return items.reduce((prev, curr:Pastry) => {
  //       return prev + curr.price;
  //     }, 0)
  //   });
  // }


  //  this.productList = this.cartService.getCartLength();
  //   this.createProductList();



  //   this.productAddedTocart=this.cartService.getProductFromCart();
  //   for (let i in this.productAddedTocart) {
  //     this.productAddedTocart[i].quantity=1;
  //  }
  //  this.cartService.removeAllProductFromCart();
  //  this.cartService.addProductToCart(this.productAddedTocart);
  //  this.calculteAllTotal(this.productAddedTocart);


  // createProductList() {
  //  this.productList = this.cartService.getItems(this.cartList);
  // }

  // removeProduct(id) {
  //   this.shoppingCartItems.splice(id, 1);
  //   this.createProductList();
  //   console.log(this.shoppingCartItems);
  // }

  // addProduct(id) {
  //   this.cartList.push(id)
  //   this.createProductList();
  //   console.log(this.cartList);
  // }

  // onAddQuantity(product: Pastry)
  // {
  //   //Get Product
  //   this.productAddedTocart=this.cartService.getProductFromCart();
  //   this.productAddedTocart.find(p=>p.id==product.id).quantity = product.quantity+1;
  //   //Find produc for which we want to update the quantity
  //   //let tempProd= this.productAddedTocart.find(p=>p.Id==product.Id);
  //   //tempProd.Quantity=tempProd.Quantity+1;

  //   //this.productAddedTocart=this.productAddedTocart.splice(this.productAddedTocart.indexOf(product), 1)
  //  //Push the product for cart
  //  // this.productAddedTocart.push(tempProd);
  // this.cartService.removeAllProductFromCart();
  // this.cartService.addProductToCart(this.productAddedTocart);
  // this.calculteAllTotal(this.productAddedTocart);

  // }
  // onRemoveQuantity(product:Pastry)
  // {
  //   this.productAddedTocart=this.cartService.getProductFromCart();
  //   this.productAddedTocart.find(p=>p.id==product.id).quantity = product.quantity-1;
  //   this.cartService.removeAllProductFromCart();
  //   this.cartService.addProductToCart(this.productAddedTocart);
  //   this.calculteAllTotal(this.productAddedTocart);

  // }

  // calculteAllTotal(allItems:Pastry[])
  // {
  //   let total=0;
  //   for (let i in allItems) {
  //     total= total+(allItems[i].quantity *allItems[i].price);
  //  }
  //  this.allTotal=total;
  // }


































  // deleteProduct(id) {
  //   this.product
  //   if(this.product(id) > 1){
  //     this.cartList.splice(id, 1);
  //     this.createProductList();
  //   }
  //   this.cartList.push(id)
  //   this.createProductList();
  //   console.log(this.cartList);
  // }
}
