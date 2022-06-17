import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { ConfirmationService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-demo-table',
  templateUrl: './demo-table.component.html',
  styleUrls: ['./demo-table.component.scss'],
  providers: [ConfirmationService, DialogService, UserService],
})
export class DemoTableComponent implements OnInit {
  constructor(
    private userService: UserService,
    private confirmationService: ConfirmationService
  ) {}

  users: User[] = [];
  selectedUser?: User;
  isShowDialogEdit: boolean = false;
  isShowDialogAdd: boolean = false;
  userById: User = {
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
    this.getAPIAllUser();
  }
  test() {
    this.isShowDialogEdit = false;
  }

  getAPIAllUser() {
    this.userService.getAllUser().subscribe((data) => (this.users = data));
  }

  onDelete(id: string) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record(' + id + ') ?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.userService.deleteUser(id);
        this.getAPIAllUser();
      },
      reject: () => {
        console.log('not passed func delete ' + id);
      },
    });
  }
  onEdit(id: string) {
    this.isShowDialogEdit = true;
    this.userById = {
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
    this.userService
      .getUserById(id)
      .subscribe((item) => (this.userById = item));
  }

  showModalAdd() {
    this.isShowDialogAdd = true;
  }
}
