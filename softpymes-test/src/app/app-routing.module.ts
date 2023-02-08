import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { CreateUserComponent } from './core/create-user/create-user.component';
import { HomeComponent } from './core/home/home.component';
import { ListUsersComponent } from './core/list-users/list-users.component';
import { AuthguardGuard } from './shared/authguard.guard';
import { EditUserComponent } from './core/edit-user/edit-user.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: CreateUserComponent},
  {path: 'all-users', component: ListUsersComponent, canActivate: [AuthguardGuard]},
  {path: 'edit-user/:id', component: EditUserComponent, canActivate: [AuthguardGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
