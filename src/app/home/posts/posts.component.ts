import { PostsList } from './posts.model';
import { Component, OnInit } from '@angular/core';
import { UsersService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: PostsList
  constructor(private userserive: UsersService) { }

  ngOnInit() {
    this.Posts();
  }

  Posts() {
    this.userserive.getPosts()
      .subscribe(
      posts => this.posts = posts
      );
  }
}
