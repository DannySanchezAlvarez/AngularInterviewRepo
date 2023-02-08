import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { ApirestService } from 'src/app/services/apirest.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public service: ApirestService
  ) {}
  user_id: string | null = '';

  user = [];

  ngOnInit(): void {
    ;
    this.getUserDetailsEdit();
  }

  userEditForm = new FormGroup({
    id: new FormControl('', [Validators.required]),
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    avatar: new FormControl('', [Validators.required]),
  });

  getUserDetailsEdit() {
    this.userEditForm.controls['id'].disable()

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.user_id = params!.get('id');
    });

    let url = `https://reqres.in/api/users/${this.user_id}`;

    this.service.queryGet(url).subscribe(
      (response: any) => {
        if (!!response) {
          this.user = response['data'];

          this.userEditForm.controls['id'].setValue(response['data']['id']);
          this.userEditForm.controls['first_name'].setValue(response['data']['first_name']);
          this.userEditForm.controls['last_name'].setValue(response['data']['last_name']);
          this.userEditForm.controls['email'].setValue(response['data']['email']);
          this.userEditForm.controls['avatar'].setValue(response['data']['avatar']);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  updateUser() {
    let url = `https://reqres.in/api/users/${this.user_id}`;

    let body = Object.assign({}, this.userEditForm.value);

    delete body.id;

    this.service.queryPut(url, body).subscribe(
      (response: any) => {
        if (!!response) {
          window.alert('Editado');
          this.router.navigateByUrl('/all-users')
        }
      },
      (err) => {
        window.alert('no editado');
        this.router.navigateByUrl('/all-users')
      }
    );
  }

  get first_name() {
    return this.userEditForm.get('first_name');
  }
  get last_name() {
    return this.userEditForm.get('last_name');
  }
  get email() {
    return this.userEditForm.get('email');
  }
  get avatar() {
    return this.userEditForm.get('avatar');
  }
  
}
