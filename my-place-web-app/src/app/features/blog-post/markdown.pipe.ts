import { Pipe, PipeTransform } from "@angular/core";
import * as marked from "marked"; // Adjusted import

@Pipe({
  name: "markdown",
  standalone: true,
})
export class MarkdownPipe implements PipeTransform {
  transform(content: string): string {
    return marked.parse(content); // Adjusted usage
  }
}
