import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from './user/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private router: Router, private authService:AuthService) { }

  checkActive(): boolean {
    return (this.router.url.startsWith('/User'));
  }
}
