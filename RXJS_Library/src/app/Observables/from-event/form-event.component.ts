import { Component, ElementRef, AfterViewInit, Renderer2, ViewChild } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';

import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-form-event',
  templateUrl: './form-event.component.html',
  styleUrls: ['./form-event.component.css']
})
export class FormEventComponent implements AfterViewInit {

  @ViewChild('addVideoButton') addVideoButton!: ElementRef;

  private count = 1;
  
  private initialized = false;

  constructor(private appService: AppServiceService) {}

  ngAfterViewInit(): void {
    if (!this.initialized) {
      this.initialized = true;

      if (this.addVideoButton.nativeElement && this.addVideoButton) {
        fromEvent(this.addVideoButton.nativeElement, 'click').subscribe(
          () => {
            let val = 'Video ' + this.count++;
            this.appService.print(val, 'elContainer');
            this.appService.print(val, 'elContainer2');
          });
      } else {
        console.error('Element with template reference variable "addVideoButton" not found or is undefined.');
      }
    }
  }


}
