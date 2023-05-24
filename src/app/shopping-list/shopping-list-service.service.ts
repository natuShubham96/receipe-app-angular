import { EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredients.model'

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>()
    private ingredientLIST: Ingredient[] = [new Ingredient('I1', 50), new Ingredient('I2', 100)]
    
    getIngredientList() {
        return this.ingredientLIST.slice();
    }

    isIngredientPresent(name: string) {
        let index = -1;
        index = this.ingredientLIST.findIndex(ing => name === ing.name)
        return index;
    }

    onIngredientAdd(ing: { name: string, amount: number }) {
        console.log("add",ing)
        const index = this.isIngredientPresent(ing.name);
        if (index=== -1) {
            this.ingredientLIST.push(ing);
        } else {
            const ing = this.ingredientLIST[index];
            ing.amount++;
            this.ingredientLIST = [...this.ingredientLIST.slice(0, index), ing, ...this.ingredientLIST.slice(index + 1)];
        }
        this.ingredientsChanged.emit(this.ingredientLIST.slice());
    }
}