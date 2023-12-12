import { Component, OnInit } from '@angular/core';
import { Observable, from,interval,of, take, timer, toArray } from 'rxjs';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit {

  constructor(private appService :AppServiceService) { }

  obsMsg:any;
  obsMsg2:any;
  
  ngOnInit(): void {


    // using From operator
    const ob1 = [{name:'Shubham',skill :'Angular'}];
    const source1 = from(ob1);
    
    source1.pipe(toArray()).subscribe(res=>{
      this.obsMsg = res;
      
    })


        // using OF operator
        const ob2 = of("Ram","Shyam","Babloo");
       
        
        ob2.pipe(toArray()).subscribe(res=>{
          this.obsMsg2 = res;

           
        })


        // using interval oiperator
        const source = interval(1000);
        source.pipe(
          take(10),
          toArray()
        ).subscribe(res=>{  
          this.appService.print(res,'elcontainer') 
        })
    
    

      // Using custome observalbe
     const obs = new Observable(ob1=>{
      ob1.next("Emit value 1")
      ob1.next("Emit value 2")
      ob1.next("Emit value 3")
      ob1.next("Emit value 4")
      ob1.complete();
     })

     obs.subscribe(res=>{
      console.log(res);
     })

     obs.pipe(toArray()).subscribe(res=>{
      this.appService.print(res,'elcontainer4');
     })
  }

}
