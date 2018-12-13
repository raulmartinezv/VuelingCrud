import { Component } from '@angular/core';

import { NAVITEMS } from './_data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VuelingCrud';

  navItems  = NAVITEMS;
}
