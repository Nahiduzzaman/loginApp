import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/app-login/services/auth.service';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit {

  posts: any[];

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  getData() {
    this.authService.getData().subscribe(data => {
      this.posts = data;
      console.log(data);
    });
  }

  getPostDetails(id:number) {
    this.router.navigate(['home',id]);
  }

  ngOnInit(): void {
    this.getData();
  }

}
