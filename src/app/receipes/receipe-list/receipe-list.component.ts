import { Component, EventEmitter, Output } from '@angular/core';
import { Receipe } from '../receipe.model';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent {
  receipeItems: Receipe[] = [new Receipe('Test Receipe', 'This is a test receipe', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.uaex.uada.edu%2Flife-skills-wellness%2Ffood-nutrition%2Feating-well%2FEFNEP%2Fimages%2FRecipes-Banner.jpg&tbnid=AVbvsS4oLmjvpM&vet=12ahUKEwj7pP366dj-AhXyodgFHd-7AUUQMygnegUIARD3Ag..i&imgrefurl=https%3A%2F%2Fwww.uaex.uada.edu%2Flife-skills-wellness%2Ffood-nutrition%2Feating-well%2FEFNEP%2Frecipes-for-your-family.aspx&docid=pjjCrcOfK4KNiM&w=1024&h=576&q=recipe%20image&client=safari&ved=2ahUKEwj7pP366dj-AhXyodgFHd-7AUUQMygnegUIARD3Ag')]
  @Output() receipeClick = new EventEmitter<Receipe>()

  onReceipeClick(receipe: Receipe) {
    this.receipeClick.emit(receipe);
  } 
}
