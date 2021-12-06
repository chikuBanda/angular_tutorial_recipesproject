import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { RecipeDetailComponent } from './content/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './content/recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeComponentList } from './content/recipes/recipe-list/recipe-list.component';
import { RecipesComponent } from './content/recipes/recipes.component';
import { ShoppingListEditComponent } from './content/shopping/shopping-list-edit/shopping-list-edit.component';
import { ShoppingListComponent } from './content/shopping/shopping-list/shopping-list.component';
import { ShoppingComponent } from './content/shopping/shopping.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeComponentList,
    ShoppingListEditComponent,
    ShoppingListComponent,
    ShoppingComponent,
    HeaderComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
