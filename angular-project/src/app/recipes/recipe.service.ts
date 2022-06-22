import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shoping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new Subject<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.bbcgoodfoodme.com/assets/legacy/recipe/recipe-image/2018/09/profiterole-salted-toffee-ice-cream-sandwiches.jpg',
      [new ingredient('Meat', 1), new ingredient('French Fries', 20)]
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chicken_stew-670d71c.jpg?quality=90&resize=440,400',
      [new ingredient('Meat', 1), new ingredient('Milk', 20)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice(); // return  a copy of the array
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
