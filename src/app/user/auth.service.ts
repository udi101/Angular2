import { Injectable } from '@angular/core';
import { IUser } from './user.interface';


@Injectable()
export class AuthService {
  currentUser: IUser;

  // ביצוע התחברות למערכת
  loginUser(_userName: string, password: string) {
    this.currentUser = {
      userId:1,
      firstName: 'Udi',
      lastName: 'Mazor',
      userName: _userName
    }
  }

  isAuthenticated(): boolean {
    return this.currentUser==null?false:true;
  }

}