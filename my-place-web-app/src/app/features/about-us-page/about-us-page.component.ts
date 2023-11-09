import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us-page',
  templateUrl: './about-us-page.component.html',
  styleUrls: ['./about-us-page.component.css']
})
export class AboutUsPageComponent {
  onBackButtonClick() {
    // Simulate escape key press
    // This will close the modal
    const esc = new KeyboardEvent('keydown', { code: 'Escape' });
    document.dispatchEvent(esc);
    throw new Error('Method not implemented.');
  }

}
