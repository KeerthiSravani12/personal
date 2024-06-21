import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  posts: any[];

  constructor() {
    this.posts = [];
  }

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    // Replace this with real data fetching logic
    this.posts = [
      {
        id: 1,
        profilePicture:'https://i.pinimg.com/474x/24/e4/a9/24e4a9eb366deebeffc044b9de2f7591.jpg',
        username: 'v',
        time: '1h',
        imageUrl:'https://i.pinimg.com/474x/da/0f/80/da0f803e544368bc495c5fdf7b8d9dd4.jpg',
        caption: '💜💜💜'
      },
      {
        id: 2,
        profilePicture:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9CgGY1pAJKm3bMktu3aEPsjmIkeJcm-mU_A&ss',
        username: 'kajalagarwal',
        time: '2h',
        imageUrl:'https://i.pinimg.com/564x/65/81/c5/6581c52711ab5148f3f17285287a85c8.jpg',
       
        caption: '🦋🦋🦋'
      },
     
      {
        id: 3,
        profilePicture:'https://i.pinimg.com/474x/12/e7/d6/12e7d6b0a41937f40e25d5865f29afbd.jpg',
        username: 'Suriya',
        time: '2h',
        imageUrl: 'https://i.pinimg.com/474x/28/13/b8/2813b8cdc25778aba6a5c8b950bffea5.jpg',
        caption: '💥💥'
      },
      
      {
        id: 4,
        profilePicture:'https://i.pinimg.com/474x/5d/7b/b3/5d7bb3e0c572ee14ecaea621aefe115e.jpg',
        username: 'Aliabhat',
        time: '2h',
        imageUrl: 'https://i.pinimg.com/474x/30/82/ce/3082ce0d257c3cc3d937da6a9c9bcfdc.jpg',
        caption: '💖💖'
      },
      {
        id: 2,
        imageUrl:'https://i.pinimg.com/474x/77/45/ea/7745ea681f81d744f859b04d965bab6c.jpg',
        username: 'devpadikal',
        time: '2h',
        profilePicture: 'https://i.pinimg.com/474x/97/59/f3/9759f39e826fa12d89dc8a9a50f6c00b.jpg',
        caption: '♾💕'
      },
      // Add more posts as needed
    ];
  }
}
