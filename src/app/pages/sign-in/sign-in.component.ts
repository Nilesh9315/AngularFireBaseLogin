import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm){
 const {email,password} = f.form.value;
 console.log(email)
 console.log(password)

this.auth.signIn(email,password).then((res)=>{this.router.navigateByUrl('/');
this.toastr.success("signIn success")})
.catch((err)=>{console.log(err.message);
this.toastr.error("signIn Failed")})
  }

}
