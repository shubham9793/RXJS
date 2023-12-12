import { Component, OnInit } from '@angular/core';
import { Subscription, interval, timer } from 'rxjs';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {


  // Interval Operater 
   obsMsg: any;
   obsMsg2:any;

  constructor(private appService: AppServiceService) { }

  ngOnInit(): void {
    const brodCastVideo = interval(1000);
    

   const sub =  brodCastVideo.subscribe(res => {
      this.obsMsg = 'IntervalVideo ' + res;

      this.appService.print(this.obsMsg,'elContainer1')
      this.appService.print(this.obsMsg,'elContainer2')
      this.appService.print(this.obsMsg,'elContainer3')
      if (res >= 5) {
        sub.unsubscribe();
      }
    });

     // Timer Operator 

     const timerbrodCastVideo = timer(5000,1000);

     const sub1 =  timerbrodCastVideo.subscribe(res => {
      this.obsMsg2 = 'TimerVideo ' + res;
      this.appService.print(this.obsMsg2,'timerelContainer1')
      this.appService.print(this.obsMsg2,'timerelContainer2')
      this.appService.print(this.obsMsg2,'timerelContainer3')

      if (res >= 5) {
        sub1.unsubscribe();
      }
    });

  }


 



}
