import { EventEmitter, Injectable, Input } from '@angular/core';
import { ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {
  @Input() ingredientChanged = new EventEmitter<ingredient[]>();

  private ingredients: ingredient[] = [
    new ingredient('apples', 5),
    new ingredient('tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: ingredient[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}
