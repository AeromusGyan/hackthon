import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  stringifiedData:any;
  myData = {  

    name:"",
    email: "",  
    password: ""
  };  
  constructor() { }

  ngOnInit(): void {
    console.log(this.myData);  
    // Convert to JSON  
    this.stringifiedData = JSON.stringify(this.myData);  
    console.log("With Stringify :" , this.stringifiedData);  
  }
  login(){
    alert (JSON.stringify(this.myData));
  }

}
