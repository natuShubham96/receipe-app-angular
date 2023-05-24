import { Component, Input } from '@angular/core';
import { Receipe } from '../receipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list-service.service';

@Component({
  selector: 'app-receipe-details',
  templateUrl: './receipe-details.component.html',
  styleUrls: ['./receipe-details.component.css'],
})
export class ReceipeDetailsComponent {
  @Input() receipeSelected?: Receipe;

  constructor(private shoppiingListService: ShoppingListService) { }

  onSelect(event: any) {
    console.log('type',event.target.value)
      console.log("here")
      this.shoppiingListService.onIngredientAdd({name: String(this.receipeSelected?.name), amount: 1})
  }
}
