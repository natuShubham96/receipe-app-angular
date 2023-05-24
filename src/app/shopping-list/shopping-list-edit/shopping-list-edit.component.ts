import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ShoppingListService } from '../shopping-list-service.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {
  @Output() ingredientAdd = new EventEmitter<{name: string, amount: number}>();
  @ViewChild('itemName') itemName?: ElementRef;
  @ViewChild('itemAmount') itemAmount?: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  onAdd() {
    const itemName: string = this.itemName?.nativeElement.value;
    const itemAmount: number = this.itemAmount?.nativeElement.value;
    this.shoppingListService.onIngredientAdd({name: itemName, amount: itemAmount});
  }
}
