import { Component } from '@angular/core';
import { AuthService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taskmanager-demo-ui';

  constructor(private authService: AuthService) {
      authService.handleAuthentication();
  }
}
