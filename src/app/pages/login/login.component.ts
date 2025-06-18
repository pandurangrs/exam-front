import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData:FormGroup;

  constructor(private fb:FormBuilder,private snackBar:MatSnackBar) { }

  ngOnInit() {
    this.loginData=this.fb.group({
      userName:['',Validators.required],
      password:['',Validators.required],
    });
  }


 
  formSubmit(){
    console.log("login btn clicked");
    const userName = this.loginData.get('userName')?.value?.trim();
    if(!userName){
      this.snackBar.open("UserName is Required",'',{
        duration:2000
      });
      return;
    }
  }
  



  formReset(){
      this.loginData.reset();
  }

}
