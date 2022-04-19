import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  post: any;

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
  ngOnInit(): void {
    this.activateRoute.params.subscribe((res)=>{
      console.log('param',res);
      this.getDataById(res.id);
    })
  }

}
