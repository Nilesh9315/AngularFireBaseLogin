import { Component, OnInit,ChangeDetectorRef} from '@angular/core';
import { GithubService } from 'src/app/services/github.service';
GithubService
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 user=null;
 userName:string;
 error=null;
  constructor(private githubServices:GithubService,private ref:ChangeDetectorRef) { }
  
  ngOnInit(): void {
  }
 
  handleUser(){
    this.githubServices.getUserDetails(this.userName).subscribe((user)=>{
      this.user=user
      this.error=null;
      this.ref.detectChanges()},(err)=>{
        this.user=null;
        this.error="User Not Found";
        this.ref.detectChanges();
      })
  }

}
