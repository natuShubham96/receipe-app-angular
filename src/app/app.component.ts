import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  componentSelected?: string;

  onComponentChange(component: string) {
    this.componentSelected = component;
  }
}
