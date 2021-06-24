import { Ingredient } from '../shared/Ingredient.model';

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Orange', 7),
    new Ingredient('Tomato', 10),
  ];
}
