import { Component, OnInit } from '@angular/core';
import { AuthService } from "./../../services/auth.service";
import {ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 email= null;

  constructor( private auth: AuthService,
    private rout:Router, 
    private toastr: ToastrService
    ) { auth.getUser().subscribe((user)=>
      {
        this.email=user?.email;
      });
    }

  ngOnInit(): void {
  }
  async handleSignOut(){
    try{
      const res = await this.auth.signOut();
      this.rout.navigateByUrl('/signin');
      this.toastr.info("Login Again");
      this.email = null;

    }
    catch(err){
      this.toastr.error("Something is wrong");
    }
  }
}
