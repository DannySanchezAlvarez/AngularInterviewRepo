import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApirestService } from 'src/app/services/apirest.service';
import { User } from 'src/app/models/user';
import { MatDialog } from '@angular/material/dialog';
import { UserDetailsComponent } from 'src/app/modals/user-details/user-details.component';
import { DeleteConfirmationComponent } from 'src/app/modals/delete-confirmation/delete-confirmation.component';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit {
  usersForTable: User[] = [];
  constructor(
    public route: Router,
    public service: ApirestService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  showUserDetailsModal(
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    avatar: string
  ) {
    const dialogRef = this.dialog.open(UserDetailsComponent, {
      data: {
        user_id: id,
        user_f_name: first_name,
        user_l_name: last_name,
        user_email: email,
        user_avatar: avatar,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }

  deleteUserModal(id: number, name: string) {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent, {
      data: {
        user_id: id,
        user_name: name
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }

  getAllUsers() {
    let url = 'https://reqres.in/api/users';

    this.service.queryGet(url).subscribe(
      (response: any) => {
        if (!!response) {
          this.usersForTable = response['data'];
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
