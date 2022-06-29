import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';

import { HomeComponent } from './components/home/home.component';
import { DemoTableComponent } from './components/demo-table/demo-table.component';
import { DemoTodoListComponent } from './components/demo-todo-list/demo-todo-list.component';

import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { FormCreateUserComponent } from './components/demo-table/form-action-with-user/form-create-user/form-create-user.component';
import { FormEditUserComponent } from './components/demo-table/form-action-with-user/form-edit-user/form-edit-user.component';
import { UserService } from './services/user.service';
import { TodoListComponent } from './components/demo-todo-list/common/todo-list/todo-list.component';
import { TodoItemComponent } from './components/demo-todo-list/common/todo-item/todo-item.component';
import { HeaderComponent } from './components/demo-todo-list/common/header/header.component';
import { FooterComponent } from './components/demo-todo-list/common/footer/footer.component';
import { TodoInputComponent } from './components/demo-todo-list/common/todo-input/todo-input.component';
import { TodoService } from './services/todo.service';
import { LayoutComponent } from './components/layout/layout.component';
import { NextPageOneComponent } from './components/next-page-one/next-page-one.component';
import { NextPageTwoComponent } from './components/next-page-two/next-page-two.component';
import { LayoutTwoComponent } from './components/layout-two/layout-two.component';
import { MenuTypeFilmComponent } from './components/home/common/menu-type-film/menu-type-film.component';
import { TypeFilmComponent } from './components/home/common/type-film/type-film.component';
import { DetailMovieComponent } from './components/home/common/detail-movie/detail-movie.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DemoTableComponent,
    DemoTodoListComponent,
    FormCreateUserComponent,
    FormEditUserComponent,
    TodoListComponent,
    TodoItemComponent,
    HeaderComponent,
    FooterComponent,
    TodoInputComponent,
    LayoutComponent,
    NextPageOneComponent,
    NextPageTwoComponent,
    LayoutTwoComponent,
    MenuTypeFilmComponent,
    TypeFilmComponent,
    DetailMovieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    TableModule,
    BrowserAnimationsModule,
    InputTextModule,
    FormsModule,
    CheckboxModule,
    ConfirmDialogModule,
    DynamicDialogModule,
    DialogModule,
  ],
  providers: [DynamicDialogRef, DynamicDialogConfig, UserService, TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
