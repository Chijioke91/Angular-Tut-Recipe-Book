import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  private ingredientChangedSub: Subscription;

  constructor(private shoppingService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();
    this.ingredientChangedSub =
      this.shoppingService.ingredientsChanged.subscribe(
        (newIngredientArray: Ingredient[]): void => {
          this.ingredients = newIngredientArray;
        }
      );
  }

  ngOnDestroy(): void {
    this.ingredientChangedSub.unsubscribe();
  }
}
