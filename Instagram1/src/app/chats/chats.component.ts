// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-chats',
//   templateUrl: './chats.component.html',
//   styleUrl: './chats.component.css'
// })
// export class ChatsComponent {
//   chats = [
//     {
//       username: 'user1',
//       lastMessage: 'Hey, how are you?'
//     },
//     {
//       username: 'user2',
//       lastMessage: 'Let\'s catch up later!'
//     }
//   ];

//   constructor() { }

//   ngOnInit(): void {
//   }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {
  chats = [
    {
      username: 'johndeo',
      lastMessage: 'Hey, how are you?',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      username: 'janedoe',
      lastMessage: 'Let\'s catch up later!',
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
      username: 'mikalle',
      lastMessage: 'Did you see that post?',
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg'
    },
    {
      username: 'sairath',
      lastMessage: 'Haha, that was funny!',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
      username: 'aleska',
      lastMessage: 'Where are you?',
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg'
    },
    {
      username: 'emily',
      lastMessage: 'Can we talk?',
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void { }
}

