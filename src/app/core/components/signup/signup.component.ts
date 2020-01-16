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

  constructor() {
    this.eye = '/assets/sprite.svg#eye';
    this.eyeSlash = '/assets/sprite.svg#eye-slash';
    this.user = new User("", "", "", "", "");
    this.passwordType = 'password';
    this.password = ''
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
      this.eye = this.eyeSlash;
     } else {
      this.passwordType = 'password';
      this.eyeSlash = this.eye;
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


