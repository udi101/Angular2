import { Injectable } from '@angular/core';
import { IUser } from './user.interface';


@Injectable()
export class AuthService {
  currentUser: IUser = null;

  // ביצוע התחברות למערכת
  loginUser(_userName: string, password: string) {
    this.currentUser = {
      userId: 1,
      firstName: 'Udi',
      lastName: 'Mazor',
      userName: _userName
    }
  }

  updateUser(firstName: string, lastName: string): void {
    if (this.currentUser) {
      this.currentUser.firstName = firstName;
      this.currentUser.lastName = lastName;
    }
  }

  isAuthenticated(): boolean {
    return this.currentUser == null ? false : true;
  }

}