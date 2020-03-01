import { Component } from '@angular/core';
import {UsersService} from "../services/users.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public usersService: UsersService) {}

}
