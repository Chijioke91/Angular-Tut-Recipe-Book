import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Orange', 7),
    new Ingredient('Tomato', 10),
  ];

  constructor() {}

  OnIngredientAdded(data) {
    this.ingredients.push(data);
  }

  ngOnInit(): void {}
}
