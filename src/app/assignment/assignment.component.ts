import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  areDetailsVisible: boolean = true;
  buttonClicks = [];
  buttonClicksClass = [];
  counter:number = 0;
  ul:HTMLElement;
  li:HTMLElement;
  
  showDetails(){
    //checar si los detalles estan visibles, otherwise cambiarlo a false
    this.areDetailsVisible = this.areDetailsVisible ? false : true;
    //agregar un numero al counter
    this.counter++;
    //push the counter

    if(this.buttonClicks.length<4){
      this.buttonClicks.push(this.counter);
    } else{
      this.buttonClicksClass.push(this.counter);
    }

  }

  constructor() {
    
   }

  ngOnInit(): void {
  }

}
