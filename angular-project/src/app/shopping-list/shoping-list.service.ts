import { Injectable, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {
  @Input() ingredientChanged = new Subject<ingredient[]>();
  startEditing = new Subject<number>();

  private ingredients: ingredient[] = [
    new ingredient('apples', 5),
    new ingredient('tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientChanged.next(this.ingredients.slice());
  }
}
