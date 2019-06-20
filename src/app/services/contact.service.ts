import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:Http) { }

  //get data from component
  create(contactData){
    console.log(contactData);
    return this.http.post("https://jsonplaceholder.typicode.com/users", contactData)
            .pipe(map( (resp ) =>{ //3. receive resp from rest api 
              console.log(resp);
              return resp.json(); //4. send the resp back to comp 
            }));
  }

  getContacts(){
  return  this.http.get("https://jsonplaceholder.typicode.com/users")
  .pipe(map( (resp ) =>{ //3. receive resp from rest api 
    console.log(resp);
    return resp.json(); //4. send the resp back to comp 
  }));
  }

  getContatcsById(id){
    return  this.http.get("https://jsonplaceholder.typicode.com/users/"+id)
    .pipe(map( (resp ) =>{ //3. receive resp from rest api 
      console.log(resp);
      return resp.json(); //4. send the resp back to comp 
    }));

  }

update(updatecontactData){
  console.log(updatecontactData);
    return this.http.put("https://jsonplaceholder.typicode.com/users/"+updatecontactData.id, updatecontactData)
            .pipe(map( (resp ) =>{ //3. receive resp from rest api 
              console.log(resp);
              return resp.json(); //4. send the resp back to comp 
            }));
}

}
