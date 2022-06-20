import { Component, OnInit, ViewChild } from '@angular/core';
import { ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: ingredient[] = [];
  ingredientToAdd: ingredient;
  constructor(private shoppinglistService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppinglistService.getIngredients();
    this.shoppinglistService.ingredientChanged.subscribe(
      (ingredients: ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }
}
