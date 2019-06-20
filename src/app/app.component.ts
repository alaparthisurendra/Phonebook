import { Component } from '@angular/core';
//Component should be usable in some selector.
@Component({
  selector: 'app-root', //exposed in selector -- must
  templateUrl: './app.component.html', //html-- must
  styleUrls: ['./app.component.css'] //css --optional
})
export class AppComponent {
  title = 'phone-book';
}
