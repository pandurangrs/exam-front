import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { UserDto } from 'src/app/core/UserDto';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  constructor(private userService:UserService,private snackBar:MatSnackBar) { }

    userDto:UserDto=new UserDto();
  // public userDto={
  //   userName:'',
  //   password:'',
  //   firstName:'',
  //   lastName:'',
  //   about:'',
  //   phone:'',
  //   email:'',
  //   address:'',
  //   uuid:'',
  // };



  ngOnInit() {
  }

  formSubmit(){
    // alert("submit");
    console.log(this.userDto.userName);
    if(this.userDto.userName==''|| this.userDto.userName==null){
      // alert('user is required');
      this.snackBar.open("Username is required!!",''
        ,{
        duration:2000,
        // verticalPosition:'top'
        // ,horizontalPosition:'right'
      });
      return;
    }

    //addUser : userService
    this.userService.addUser(this.userDto).subscribe(
      (data:any)=>{
      //success
      console.log(data);
      // alert('Success.')
      Swal.fire('Success done !!','User uuid is : '+data.uuid,'success');
      },
      (error)=>{
        //error
        // debugger
        console.log(error);
        // alert('Something went wrong.')
        this.snackBar.open(error.error.message,'',{
          duration:2000
        })
      }
    )
  }


  //clear form
  clearForm(){
    this.userDto=new UserDto();
  }

}
