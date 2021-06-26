import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a simple test for recipes',
      'https://images.unsplash.com/photo-1559070135-f259b369bf87?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVjaXBlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      [new Ingredient('meat', 1), new Ingredient('Bread', 5)]
    ),
    new Recipe(
      'Nice Recipe Test',
      'This is a Nice recipe test',
      'https://images.unsplash.com/photo-1559070135-f259b369bf87?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVjaXBlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      [new Ingredient('Sugar', 3), new Ingredient('Milk', 2)]
    ),
  ];

  constructor(private shoppingService: ShoppingListService) {}

  getRecipes = (): Recipe[] => [...this.recipes];

  getRecipe = (index: number): Recipe => this.recipes[index];

  addIngredientsToShoppingList = (ingredients: Ingredient[]) => {
    this.shoppingService.addIngredients(ingredients);
  };
}
