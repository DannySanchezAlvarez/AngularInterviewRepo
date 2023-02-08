import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Service Imports
import { HttpClientModule } from '@angular/common/http';
// Forms Import
import { ReactiveFormsModule } from '@angular/forms';
// Generated Components Imports
import { LoginComponent } from './auth/login/login.component';
import { ListUsersComponent } from './core/list-users/list-users.component';
import { ShowUserComponent } from './core/show-user/show-user.component';
import { EditUserComponent } from './core/edit-user/edit-user.component';
import { DeleteConfirmationComponent } from './modals/delete-confirmation/delete-confirmation.component';
import { LogoutConfirmationComponent } from './modals/logout-confirmation/logout-confirmation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateUserComponent } from './core/create-user/create-user.component';
// Angular Material Imports
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { NavbarComponent } from './layout/navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HomeComponent } from './core/home/home.component';
import { UserDetailsComponent } from './modals/user-details/user-details.component';
import {MatDialogModule} from '@angular/material/dialog';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListUsersComponent,
    ShowUserComponent,
    EditUserComponent,
    DeleteConfirmationComponent,
    LogoutConfirmationComponent,
    CreateUserComponent,
    NavbarComponent,
    HomeComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
