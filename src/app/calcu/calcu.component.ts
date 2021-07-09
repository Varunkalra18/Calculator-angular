import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcu',
  templateUrl: './calcu.component.html',
  styleUrls: ['./calcu.component.scss']
})
export class CalcuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  result:string = "" ;
  x:string = "";
  y:string="";
  answer:string="" ;
  dis(val:string)
  {
    this.result+=val;
    console.log(this.result);
  }
  solve():string
  {
      this.x = this.result ;
      this.y = eval(this.x)
      this.result = this.y ;
      console.log(this.result);
      this.answer = this.result ;
      return this.answer ;
  }
           
         //function that clear the display
  clr()
  {
    this.answer = ""
  }
}
