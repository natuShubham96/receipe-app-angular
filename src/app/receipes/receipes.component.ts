import { Component } from '@angular/core';
import { Receipe } from './receipe.model';
import { ReceipeService } from './receipe-service.service';

@Component({
  selector: 'app-receipes',
  templateUrl: './receipes.component.html',
  styleUrls: ['./receipes.component.css'],
  providers: [ReceipeService]
})
export class ReceipesComponent {
  receipeSelected: Receipe = { name: '', description: '', imagePath: '', ingredients: [] }
  
  constructor(private receipeService: ReceipeService) { 
        this.receipeService.receipeSelected.subscribe(receipe => this.receipeSelected = receipe)
  }
}
