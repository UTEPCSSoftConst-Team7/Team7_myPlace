import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reload-page',
  template: '',
  styleUrls: []
})
export class ReloadPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.checkForReloadFlag();
  }

  handleClick(): void {
    sessionStorage.setItem('reloadOnce', 'true');
    location.href = ''; // Specify the URL to navigate to if it's different from the current page
  }

  checkForReloadFlag(): void {
    if (sessionStorage.getItem('reloadOnce') === 'true') {
      sessionStorage.removeItem('reloadOnce');
      location.href = location.href;
    }
  }
}