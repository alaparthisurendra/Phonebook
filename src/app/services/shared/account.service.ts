import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
//Step 1: Create BehaviourSubject with default value for subscribing at first
private userAccount = new BehaviorSubject<string>("Premium");
//step 2: create observable for the behaviourSubject,so any one can subscribe it.

latestPricingPlan=this.userAccount.asObservable(); //latestPricingPlan is subsribable
  constructor() { }

  updatePricingPlan(newPlan){
    this.userAccount.next(newPlan);
  }

}
