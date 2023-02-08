import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  constructor(@Inject (MAT_DIALOG_DATA) public data: {user_id: number, user_f_name: string, user_l_name: string, user_email: string, user_avatar: string}) {}
}
