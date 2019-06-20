import { Component, OnInit } from '@angular/core';
//String Interpolation
@Component({
  selector: 'app-si',
  templateUrl: './si.component.html',
  styles: []
})
export class SiComponent implements OnInit {

  myName: string = "Punith";
  exp: number = 7;
  isLoggedIn: boolean = false;
  skills: any[] = ['html', 'js']

  myProfile: object =
    {
      role: "SE",
      naam: 1
    }


  constructor() { }

  ngOnInit() {
  }

  getExperience(): string {
    return this.exp + "years"
  }

}
