import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-screenone',
  templateUrl: './screenone.component.html',
  styleUrls: ['./screenone.component.css']
})
export class ScreenoneComponent implements OnInit {

  userData:any=[];

  adduser = new FormGroup({
    username: new FormControl("", Validators.required),
    password:new FormControl("", Validators.required),
    email:new FormControl("",[Validators.required,Validators.email]),
    role:new FormControl("", Validators.required)   
  })
  isShow1:Boolean=false;
  isShow2:Boolean=true;
  index:any;

  constructor() { }

  onSubmit(){
    // console.log(this.adduser.value);
    if (!this.isShow1) {
      this.userData.push(this.adduser.value);
    this.adduser.reset(this.adduser.value=="");
    }
    if (!this.isShow2) {
      this.userData[this.index]=this.adduser.value;
      this.adduser.reset(this.adduser.value=="");
      this.isShow1=false;
      this.isShow2=true;
    }
  }
  editData(i){
    this.adduser.setValue(this.userData[i]);
    this.index=i;
    this.isShow1=true;
    this.isShow2=false;
  }
  deleteData(i){
    this.userData.splice(i,1);
  }


  // avtar(event){
    
  // }


  ngOnInit(): void {
  }

}
