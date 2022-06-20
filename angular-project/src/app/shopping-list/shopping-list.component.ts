import { Component, OnInit, ViewChild } from '@angular/core';
import { ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: ingredient[] = [
    new ingredient('apples', 5),
    new ingredient('tomatoes', 10),
  ];

  constructor() {}

  ngOnInit(): void {}

  onIngredientAdded(ingredient: ingredient) {
    this.ingredients.push(ingredient);
  }
}
