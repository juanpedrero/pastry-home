import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  private eye: string
  private eyeSlash: string
  private passwordType: string
  private user: User
  private password: string
  private showPasswordSvg: string


  constructor() {
    this.eye = '/assets/svg/sprite.svg#openeye';
    this.eyeSlash = '/assets/svg/sprite.svg#closeye';
    this.user = new User("", "", "", "", "");
    this.passwordType = 'password';
    this.password = ''
    this.showPasswordSvg = this.eye;

   }


  ngOnInit() {
  }

  onSubmit() {
    this.user.password = this.password;
    // TODO: verificar si no existe ya un user con ese email, en caso de que no exista, añadir el user al array de users
  }

  showPassword() {
    if(this.passwordType==='password') {
      this.passwordType = 'text';
      this.showPasswordSvg = this.eyeSlash;
     } else {
      this.passwordType = 'password';
      this.showPasswordSvg = this.eye;
     }
  }
}




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


