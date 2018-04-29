import { Component, OnInit } from '@angular/core';
import { User } from "../../app/user/user";
import { UserServiceService } from "../../app/user/user-service.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private users: User[];

  constructor(private userService: UserServiceService) { }

  ngOnInit() {

    this.userService.getUsers().subscribe(data => {
      this.users = data;

    });

  }
  deleteUser(user) {
    if (confirm("Are you sure you want to delete " + user.name + "?")) {
      var index = this.users.indexOf(user);
      this.users.splice(index, 1);

      this.userService.deleteUser(user.id)
        .subscribe(data => { console.log(data)},
          err => {
           // alert("Could not delete user.");
            // Revert the view back to its original state
            this.users.splice(index, 0, user);
          });
    }
  }


}
