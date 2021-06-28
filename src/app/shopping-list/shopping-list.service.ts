import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/Ingredient.model';

export class ShoppingListService {
  startedEditing = new Subject<number>();
  ingredientsChanged = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Orange', 7),
    new Ingredient('Tomato', 10),
  ];

  getIngredients = () => [...this.ingredients];

  getIngredient = (index: number) => this.ingredients[index];

  addIngredient = (ingredient: Ingredient) => {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next([...this.ingredients]);
  };

  addIngredients = (ingredients: Ingredient[]) => {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next([...this.ingredients]);
  };

  updateIngredient = (index: number, newIngredient: Ingredient) => {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next([...this.ingredients]);
  };

  deleteItem = (index: number) => {
    // const newIngredientsArray = this.ingredients.filter(
    //   (ing, idx) => idx !== index
    // );

    // this.ingredientsChanged.next([...newIngredientsArray]);

    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next([...this.ingredients]);
  };
}
