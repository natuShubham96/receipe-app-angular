import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() componentChange = new EventEmitter<string>()

  onSelect(component: string) {
    this.componentChange.emit(component);
  }
}
