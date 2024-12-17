import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-hackthon',
  templateUrl: './hackthon.component.html',
  styleUrls: ['./hackthon.component.css']
})
export class HackthonComponent implements OnInit {
  allquestion:any;
  data:any;
  constructor(private api:AppService, private http:HttpClient){
    this.data=this.getAllData();
    if(this.data=true){
      this.allquestion = JSON.parse(this.data);
    }
  }
  ngOnInit(): void{
    this.getAllData;
  }
  getAllData(){
    this.api.getAllQuestion().subscribe((res)=>{
      this.allquestion=res.data;
    })
  }

}
