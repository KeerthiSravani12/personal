
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Post {
  img: string;
  liked: boolean;
  saved: boolean;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  title:string=`posts`
  post: Post | null = null;
  imageUrl: string | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.imageUrl = params['imageUrl'];
      if (this.imageUrl) {
        this.post = {
          img: this.imageUrl,
          liked: false,
          saved: false
        };
      }
    });
  }

  likePost(): void {
    if (this.post) {
      this.post.liked = !this.post.liked;
    }
  }

  savePost(): void {
    if (this.post) {
      this.post.saved = !this.post.saved;
    }
  }
}



