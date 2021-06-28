import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/Ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) listForm: NgForm;
  editedItemIndex: number;
  editMode: boolean = false;
  subscription: Subscription;
  editedItem: Ingredient;

  constructor(private shoppingService: ShoppingListService) {}

  onSubmit = () => {
    const { name, amount } = this.listForm.value;

    this.editMode
      ? this.shoppingService.updateIngredient(this.editedItemIndex, {
          name,
          amount,
        })
      : this.shoppingService.addIngredient({ name, amount });
    this.editMode = false;
    this.listForm.reset();
  };

  ngOnInit(): void {
    this.subscription = this.shoppingService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingService.getIngredient(index);
        this.listForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    );
  }

  onClear() {
    this.editMode = false;
    this.listForm.reset();
  }

  onDelete() {
    // console.log(this.editedItemIndex);
    this.onClear();
    this.shoppingService.deleteItem(this.editedItemIndex);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
