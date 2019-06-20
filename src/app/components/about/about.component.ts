import { Component, OnInit } from '@angular/core';
import {AccountService} from 'src/app/services/shared/account.service'
import{FormGroup,FormControl,Validators} from '@angular/forms'
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {
  planName: string; 
  newPlan: string;
  birthDate= new Date(2019,10,10);
  loremIpsum: string = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam nulla soluta debitis molestiae mollitia temporibus? Voluptate odio, delectus nesciunt, architecto consequuntur fuga laudantium, ab velit iusto aperiam accusantium odit commodi.";
//For Reactive form
contactForm= new FormGroup({
firstName:new FormControl('',Validators.required),
lastName:new FormControl('',Validators.required),
email:new FormControl('',[Validators.required,Validators.email]),
password: new FormControl('',[Validators.required,Validators.minLength(6)])


})


  constructor( private accountService:AccountService) {
    this.accountService.latestPricingPlan.subscribe((plan)=>{
      console.log(plan);

      this.planName = plan;
    });
  }

  ngOnInit() {
  }

  changePlan(){
    this.accountService.updatePricingPlan(this.newPlan);
  }

}

  