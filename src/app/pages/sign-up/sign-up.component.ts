import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { from } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
 

  constructor(private auth:AuthService, private router:Router, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm){
 const {email,password} = f.form.value;
 console.log(email)
 console.log(password)

this.auth.signUp(email,password).then((res)=>{this.router.navigateByUrl('/');
this.toastr.success("signUp success")})
.catch((err)=>{console.log(err.message);
this.toastr.error("signUp Failed")})
  }

}
