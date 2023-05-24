import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredients.model'
import { ShoppingListService } from './shopping-list-service.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit{
  ingredientLIST: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) {
    this.ingredientLIST = this.shoppingListService.getIngredientList();
  }

  ngOnInit(): void {
    this.ingredientLIST = this.shoppingListService.getIngredientList();
    this.shoppingListService.ingredientsChanged.subscribe(ing => this.ingredientLIST = ing);
  }
}
