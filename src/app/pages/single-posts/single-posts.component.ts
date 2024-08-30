import { Component } from '@angular/core';
import { PostCardComponent } from "../../layouts/post-card/post-card.component";

@Component({
  selector: 'app-single-posts',
  standalone: true,
  imports: [PostCardComponent],
  templateUrl: './single-posts.component.html',
  styleUrl: './single-posts.component.css'
})
export class SinglePostsComponent {

}
