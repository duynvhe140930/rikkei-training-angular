import { DatePipe } from '@angular/common';
import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-form-create-user',
  templateUrl: './form-create-user.component.html',
  styleUrls: ['./form-create-user.component.scss'],
})
export class FormCreateUserComponent implements OnInit {
  @Output() submitCreateUser = new EventEmitter<any>();

  constructor(private userService: UserService) {}
  checked: boolean = false;
  positions: any[] = [];
  users: User[] = [];
  pipe = new DatePipe('en-US');
  newUser: User = {
    id: '',
    name: '',
    startDate: '',
    position: '',
    email: '',
    address: '',
    phone: '',
    status: '',
    admin: false,
  };

  ngOnInit(): void {
    this.userService
      .getCategoriesPosition()
      .subscribe((item) => (this.positions = item));
    this.newUser.position = this.positions[0];
    this.userService.getAllUser().subscribe((item) => (this.users = item));
  }

  checkExistUser() {
    let isExist;
    let temp;
    temp = this.users.findIndex((obj) => obj.id === this.newUser.id);
    temp === -1 ? (isExist = true) : (isExist = false);
    return isExist;
  }

  onSubmit() {
    if (this.checkExistUser()) {
      this.newUser.startDate = `${this.pipe.transform(
        this.newUser.startDate,
        'dd-MM-yyyy'
      )}`;
      this.submitCreateUser.emit();
      this.userService.addNewUser(this.newUser);
      this.newUser = {
        id: '',
        name: '',
        startDate: '',
        position: '',
        email: '',
        address: '',
        phone: '',
        status: '',
        admin: false,
      };
    } else {
      alert('id exist!');
    }
  }
}
