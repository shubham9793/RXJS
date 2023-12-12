import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  

  constructor( ) { }

   print(text:any, elementId:any) {
    let val = document.createElement('li');
    val.innerHTML = text;
    document.getElementById(elementId)?.appendChild(val);
  } 

}
