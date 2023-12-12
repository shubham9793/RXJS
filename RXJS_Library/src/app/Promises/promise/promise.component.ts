import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {

  constructor() { }

  dellAvailable() {
    return false;
  }

  hpAvailable() {
    return true;
  }

  dell = {
    brand:"Dell",
    HardDisk:"2 TB",
    color:"Black"
  }

  hp = {
    brand:"HP",
    HardDisk:"1TB",
    color:"Silver"
  }

  notAvil={
    brand:"Not Available",
    status: "Faild"
  }

  promiseValue:any;
  buyLaptop:any;

  ngOnInit(): void {

    let buyLaptop = new Promise((resolve,reject)=> {
     if(this.dellAvailable()) {
      return setTimeout(() => {
        resolve("Dell is available... "+ this.dell.brand);
      }, 3000);

     } else if(this.hpAvailable()) {
        return  setTimeout(()=>{
          resolve("HP is available... "+ this.hp.brand + " " + this.hp.HardDisk +  " " + this.hp.color);
        },3000)
     } else {
      return setTimeout(()=>{
        reject("Laptop is not available... "+this.notAvil);
      },3000)
     }
    });

    buyLaptop.then(res=>{
      console.log(res);
      this.promiseValue = res;

    }).catch(error=>{
      console.log(error);
      this.promiseValue = error;
    })
  }

  myFunction() {

    this.buyLaptop = "Laptop is Purchased!";
  }

}
