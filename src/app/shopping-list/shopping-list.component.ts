import { Component } from '@angular/core';
import { Ingredient } from '../../shared/ingredients.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredientLIST: Ingredient[]= [new Ingredient('I1',50), new Ingredient('I2',100)]

  onIngredientAdd(ingredientInfor: {name: string, amount: number}) {
    this.ingredientLIST.push(new Ingredient(ingredientInfor.name, ingredientInfor.amount));
  }
}
