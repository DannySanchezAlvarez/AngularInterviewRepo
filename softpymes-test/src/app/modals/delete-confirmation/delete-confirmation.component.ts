import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApirestService } from 'src/app/services/apirest.service'; 

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.scss']
})
export class DeleteConfirmationComponent {
  constructor(@Inject (MAT_DIALOG_DATA) public data: {user_id: number, user_name: string}, public service: ApirestService) {}

  deleteUser() {
    let url = `https://reqres.in/api/users/${this.data.user_id}`

    this.service.queryDelete(url).subscribe(
      (response: any) => {
        if(!!response) {
          console.log(response)
          console.log('Eliminado')
        }
      },
      err => {
        console.log(err)
      }
    )
  }
}
