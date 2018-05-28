import { Component, OnInit } from '@angular/core';
import { User } from "../user/user";
import { Router, ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../user/user-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  errorMessage: string;
  user: User = new User();
  constructor(private route: ActivatedRoute, private userService: UserServiceService, private router: Router) { }
  title: string;
  form: FormGroup;
  private id;
  address: FormGroup;
  ngOnInit() {

    this.form = new FormGroup({
      'name': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'email': new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")

      ]),
      'phone': new FormControl('', Validators.required),
      'street': new FormControl('', Validators.required),

      address: new FormGroup({
        'suite': new FormControl('', [
          Validators.required

        ]),
        'city': new FormControl('', [Validators.required,
        Validators.maxLength(30)]),
        'zipcode': new FormControl('', [Validators.required,
        Validators.pattern('^([0-9]){5}([-])([0-9]){4}$')])

      }),

    });


    var id = this.route.params.subscribe(params => {
      var id = params['id'];
      this.id = id;
      this.title = id ? 'Edit User' : 'New User';

      if (!id)
        return;

      this.userService.getUsersById(id)
        .subscribe(
          user => {
            this.user = user,
              //console.log(user)
              response => {
                // if (response.status == 404) {
                //   this.router.navigate(['NotFound']);
                // }
              }
          },
          error => {
            this.errorMessage = error
          }
        );
    });



  }

  get name() { return this.form.get('name'); }
  get email() { return this.form.get('email'); }
  get phone() { return this.form.get('phone'); }
  get street() { return this.form.get('street'); }
  get suite() { return this.form.get('address').get('suite'); }
  get city() { return this.form.get('address').get('city'); }
  get zipcode() { return this.form.get('address').get('zipcode'); }

  save() {
    var result;
    var userValue = this.form.value;

    if (this.id) {
      result = this.userService.updateUser(userValue);
    } else {
      result = this.userService.addUser(userValue);
    }

    result.subscribe(data => this.router.navigate(['Users']),
      error => { this.errorMessage = error }
    );
  }
}
