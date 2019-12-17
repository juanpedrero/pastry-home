import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
  //   this.subscription = this.modalService.isShown$.subscribe(data => {
  //     if (data !== '' && data === this.nombre) {
  //       this.isShow = !this.isShow;
  //     }
  //   });
  // }

  // ngOnDestroy(): void {
  //  if (this.subscription) {
  //    this.modalService.isShown$.next('');
  //     this.subscription.unsubscribe();

  //   }
  // }

}
