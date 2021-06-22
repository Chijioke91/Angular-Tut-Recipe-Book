import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipeEvent = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a simple test for recipes',
      'https://images.unsplash.com/photo-1559070135-f259b369bf87?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVjaXBlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    ),
  ];

  onRecipeSelected(recipe: Recipe) {
    console.log(recipe);
    this.selectedRecipeEvent.emit(recipe);
  }

  constructor() {}

  ngOnInit(): void {}
}
