// import { Component, OnInit } from '@angular/core';
// import {Router} from '@angular/router';
// @Component({
//   selector: 'app-profile',
//   templateUrl: './profile.component.html',
//   styleUrls: ['./profile.component.css']
// })
// export class ProfileComponent implements OnInit{
//   Constructor(Private router:Router){}

//   posts = [
//     {img:'https://i.pinimg.com/474x/d0/39/1e/d0391ede1fc604329d47a110ad1d63f4.jpg'},
//     {img:'https://i.pinimg.com/474x/11/6c/be/116cbeb65943b239050b252a4b88737f.jpg'},
//     {img:'https://i.pinimg.com/564x/62/8d/78/628d78cfb7da92c6c51f208037a513d9.jpg'}
        


//   ];

  
   
   
  
  
//   highlights: { imageUrl: string; title: string }[] = [
//     { imageUrl: 'https://i.pinimg.com/474x/59/37/5f/59375f2046d3b594d59039e8ffbf485a.jpg', title: 'flowers🌼' },
//     {imageUrl:'https://i.pinimg.com/474x/8d/f7/c8/8df7c8f673c3b7914d799592cea2a67e.jpg',title:'Its me🦋'},
//     { imageUrl: 'https://i.pinimg.com/474x/5c/1e/b7/5c1eb77bb02b0a04b623760750e35a14.jpg', title: 'pets🐶' },
   
//     // Add more highlights as needed
//   ];
//   ngOnInit(): void {
    
//   }
//   profileimage(post:any): void {
//     this.router.navigate(['/posts'],{querparams:{imageUrl:post.img}})
//   }
// }
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'] // Fixed typo here
})
export class ProfileComponent implements OnInit {
  constructor(private router: Router) {}

  posts = [
    { img: 'https://i.pinimg.com/474x/d0/39/1e/d0391ede1fc604329d47a110ad1d63f4.jpg' },
    { img: 'https://i.pinimg.com/474x/11/6c/be/116cbeb65943b239050b252a4b88737f.jpg' },
    { img: 'https://i.pinimg.com/564x/62/8d/78/628d78cfb7da92c6c51f208037a513d9.jpg' }
  ];

  highlights: { imageUrl: string; title: string }[] = [
    { imageUrl: 'https://i.pinimg.com/474x/59/37/5f/59375f2046d3b594d59039e8ffbf485a.jpg', title: 'flowers🌼' },
    { imageUrl: 'https://i.pinimg.com/474x/8d/f7/c8/8df7c8f673c3b7914d799592cea2a67e.jpg', title: 'Its me🦋' },
    { imageUrl: 'https://i.pinimg.com/474x/5c/1e/b7/5c1eb77bb02b0a04b623760750e35a14.jpg', title: 'pets🐶' },
    // Add more highlights as needed
  ];

  ngOnInit(): void {}

  profileImage(post: any): void {
    this.router.navigate(['/posts'], { queryParams: { imageUrl: post.img } });
  }
}

