import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { RecipeDetailComponent } from './content/recipe-list/recipe-item/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './content/recipe-list/recipe-item/recipe-item.component';
import { RecipeComponentList } from './content/recipe-list/recipe-list.component';
import { ShoppingListEditComponent } from './content/shopping/shopping-list-edit/shopping-list-edit.component';
import { ShoppingListComponent } from './content/shopping/shopping-list/shopping-list.component';
import { ShoppingComponent } from './content/shopping/shopping.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    RecipeComponentList,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingComponent,
    ShoppingListComponent,
    ShoppingListEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
