import { Component, OnInit } from '@angular/core';
import { ApirestService } from 'src/app/services/apirest.service';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  constructor(public service: ApirestService, public router: Router) {}
  userForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  user_id: number = 0;

  ngOnInit(): void {}

  register() {
    let url = 'https://reqres.in/api/register';

    let body = Object.assign({}, this.userForm.value);

    this.service.queryPost(url, body).subscribe(
      (response: any) => {
        if (!!response) {
          console.log('success', response);
          localStorage.setItem('token', response['token']);
          this.user_id = response['id'];

          this.getUserInfo(this.user_id);

          this.router.navigateByUrl('/all-users');
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getUserInfo(id: number) {
    let url = `https://reqres.in/api/users/${id}`;

    this.service.queryGet(url).subscribe(
      (response: any) => {
        if (!!response) {
          console.log(response['data']);
          localStorage.setItem('id', response['data']['id']);
          localStorage.setItem('first_name', response['data']['first_name']);
          localStorage.setItem('last_name', response['data']['last_name']);
          localStorage.setItem('email', response['data']['email']);
          localStorage.setItem('avatar', response['data']['avatar']);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  get email() {
    return this.userForm.get('email');
  }
  get password() {
    return this.userForm.get('password');
  }
}
