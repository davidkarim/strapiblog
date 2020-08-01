import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from "./nav/nav.component";
import { ArticlesComponent } from "./articles/articles.component";
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
  { path: "", component: ArticlesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ArticlesComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
