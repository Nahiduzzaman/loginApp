import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  @Input() post: any;
  @Output() likeThePostEvent = new EventEmitter<string>();
  
  constructor() { }

  likeThePost() {
    //console.log(event);
    this.likeThePostEvent.emit('liked');
  }

  ngOnInit(): void {
    console.log('From Parent',this.post);
  }

}
