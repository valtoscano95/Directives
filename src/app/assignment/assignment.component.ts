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

    console.log('clicks sin class: ' + this.buttonClicks)
    console.log('clicks con class: ' + this.buttonClicksClass)
    
    





    //use ngClass and ngStyle

    







    //defines the list and the list element
    this.ul = document.getElementById('list');
    this.li = document.createElement("span");
    // this.li = document.createElement("li");

    // this.li.classList.add('blue');
    // this.li.innerHTML='hello';
    // console.log(this.li)
    


    //check if it's the first element, and add a blue background
    // if(this.buttonClicks.length>4){
    //   this.li.className='blue';
    //   console.log(this.li);
    // }

    //Create a list element using the last element of the array (length-1) and appends it to the ul element
    // this.li.appendChild(document.createTextNode(this.buttonClicks[this.buttonClicks.length-1]));
    

    //crear un span
    this.li.innerHTML="<li [ngClass]=\"{blue: counter>=5}\">test</li>"
    //cambiar el innerHTML
    


    //check if it's the first element
    
    this.ul.appendChild(this.li);

  }

  constructor() {
    
   }

  ngOnInit(): void {
  }

}
