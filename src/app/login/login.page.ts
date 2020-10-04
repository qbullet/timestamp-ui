import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage {

  constructor() {}

  loginSubmit({username, password}: {username: string, password: string}) {
    console.log(`username: ${username} `);
  }
}
