import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-deferred-styles-loader',
  template: '',
  styleUrls: []
})
export class DeferredStylesLoaderComponent implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.loadDeferredStyles();
  }

  loadDeferredStyles(): void {
    const addStylesNode = this.el.nativeElement.querySelector('#deferred-styles');
    if (addStylesNode) {
      const replacement = this.renderer.createElement('div');
      this.renderer.setProperty(replacement, 'innerHTML', addStylesNode.textContent);
      this.renderer.appendChild(document.body, replacement);
      this.renderer.removeChild(addStylesNode.parentElement, addStylesNode);
    }
  }
}
