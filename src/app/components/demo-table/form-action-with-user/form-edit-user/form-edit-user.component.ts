import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';

import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-form-edit-user',
  templateUrl: './form-edit-user.component.html',
  styleUrls: ['./form-edit-user.component.scss'],
})
export class FormEditUserComponent implements OnInit, OnChanges {
  @Input() user: User = {
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
  @Output() submitEdit = new EventEmitter<any>();

  constructor(private userService: UserService) {}
  positions: any[] = [];
  checked: boolean = false;
  objEdit: User = {
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

  ngOnChanges() {
    this.objEdit = JSON.parse(JSON.stringify(this.user));
  }

  ngOnInit(): void {
    this.userService
      .getCategoriesPosition()
      .subscribe((item) => (this.positions = item));
  }
  onSubmit() {
    this.userService.editUser(this.objEdit);
    this.submitEdit.emit();
  }
}
