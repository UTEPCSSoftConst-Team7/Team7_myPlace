import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { BlogPost} from "../../../core/models/blog-post/blog-post.model";
import { RouterLink } from "@angular/router";
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-blog-post-meta',
  templateUrl: './blog-post-meta.component.html',
  styleUrls: ['./blog-post-meta.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, DatePipe],
  standalone: true,
})

export class BlogPostMetaComponent {
  @Input() blogPost!: BlogPost;
}
