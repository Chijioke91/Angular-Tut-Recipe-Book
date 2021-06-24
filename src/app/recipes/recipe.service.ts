import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a simple test for recipes',
      'https://images.unsplash.com/photo-1559070135-f259b369bf87?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVjaXBlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    ),
  ];

  getRecipes = (): Recipe[] => [...this.recipes];
}
