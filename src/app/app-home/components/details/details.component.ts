import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/app-login/services/auth.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  post: any;
  likePostValue: any;

  constructor(
    private authService: AuthService,
    private activateRoute: ActivatedRoute
  ) { }

  getDataById(id:number) {
    this.authService.getDataById(id).subscribe(data => {
      this.post = data;
      console.log(data);
    });
  }

  likePost(event:any) {
    console.log(event);
    this.likePostValue = event;
  }
  ngOnInit(): void {
    this.activateRoute.params.subscribe((res)=>{
      console.log('param',res);
      this.getDataById(res.id);
    })
  }

}
