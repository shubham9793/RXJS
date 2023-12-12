import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit {

  obsMsg: any;

  constructor(private appService: AppServiceService) { }

  ngOnInit(): void {

    // OF Operator

    const ob1 = of('Anup', 'Shekhar', 'Sharma');
    ob1.subscribe(res => {
      this.appService.print(res, 'elContainer1');
    });

    const ob3 = of({ a: 'Anup', b: 'Shekhar', c: 'Sharma' });
    ob3.subscribe(res => {
      this.obsMsg = res;
      this.appService.print(res, 'elContainer2');
    });




    // From Operator

    const ob2 = from(['Anup', 'Shekhar', 'Sharma', 'shubham']);
    ob2.subscribe(res => {
      this.appService.print(res, 'FromelContainer1');
    });

    //From- Promise Example
    let promise = new Promise(resolvePromise => {
      setTimeout(() => {
        resolvePromise("Promise resolve");
      }, 3000);
    });

    promise.then(res => {
      console.log(res);
    });
    const obs4 = from(promise);
    obs4.subscribe(res=>{
      this.appService.print(res,'FromelContainer2');
    })

    // form - String Example
   const obs5 = from("Welcome back shubham!");
    obs5.subscribe(res =>{
      this.appService.print(res,'FromelContainer4');
    })

  }
}
