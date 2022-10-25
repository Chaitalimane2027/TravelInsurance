import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nav-bar></nav-bar>
  <footer-bar></footer-bar>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RealProject';
}
