import { Component } from '@angular/core';
import { Receipe } from './receipe.model';

@Component({
  selector: 'app-receipes',
  templateUrl: './receipes.component.html',
  styleUrls: ['./receipes.component.css']
})
export class ReceipesComponent {
  receipeSelected: Receipe = {name: '', description: '', imagePath: ''}

  onReceipeClick(receipe: Receipe) {
    this.receipeSelected.name = receipe.name;
  }
}
