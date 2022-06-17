import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // constructor(private http: HttpClient) {}
  constructor() {}
  position = ['nhân viên', 'thực tập', 'cộng tác viên', 'trưởng phòng'];
  users: User[] = [
    {
      id: '1',
      name: 'Duy',
      startDate: '07-06-2022',
      position: 'Nhân viên',
      email: 'duynv2@rikkeisoft.com',
      address: 'Hà Nội',
      phone: '0354028575',
      status: '',
      admin: true,
    },
    {
      id: '2',
      name: 'Vinh',
      startDate: '07-06-2022',
      position: 'Nhân viên',
      email: 'vinhpt@rikkeisoft.com',
      address: 'Hà Nội',
      phone: '0123456789',
      status: '',
      admin: false,
    },
    {
      id: '3',
      name: 'Tú',
      startDate: '07-06-2022',
      position: 'Nhân viên',
      email: 'tund@rikkeisoft.com',
      address: 'Hà Nội',
      phone: '0351234567',
      status: '',
      admin: false,
    },
    {
      id: '4',
      name: 'Duy',
      startDate: '07-06-2022',
      position: 'Nhân viên',
      email: 'duynv2@rikkeisoft.com',
      address: 'Hà Nội',
      phone: '0354028575',
      status: '',
      admin: true,
    },
    {
      id: '5',
      name: 'Vinh',
      startDate: '07-06-2022',
      position: 'Nhân viên',
      email: 'vinhpt@rikkeisoft.com',
      address: 'Hà Nội',
      phone: '0123456789',
      status: '',
      admin: false,
    },
    {
      id: '6',
      name: 'Tú',
      startDate: '07-06-2022',
      position: 'Nhân viên',
      email: 'tund@rikkeisoft.com',
      address: 'Hà Nội',
      phone: '0351234567',
      status: '',
      admin: false,
    },
    {
      id: '7',
      name: 'Duy',
      startDate: '07-06-2022',
      position: 'Nhân viên',
      email: 'duynv2@rikkeisoft.com',
      address: 'Hà Nội',
      phone: '0354028575',
      status: '',
      admin: true,
    },
    {
      id: '8',
      name: 'Vinh',
      startDate: '07-06-2022',
      position: 'Nhân viên',
      email: 'vinhpt@rikkeisoft.com',
      address: 'Hà Nội',
      phone: '0123456789',
      status: '',
      admin: false,
    },
    {
      id: '9',
      name: 'Tú',
      startDate: '07-06-2022',
      position: 'Nhân viên',
      email: 'tund@rikkeisoft.com',
      address: 'Hà Nội',
      phone: '0351234567',
      status: '',
      admin: false,
    },
    {
      id: '10',
      name: 'Duy',
      startDate: '07-06-2022',
      position: 'Nhân viên',
      email: 'duynv2@rikkeisoft.com',
      address: 'Hà Nội',
      phone: '0354028575',
      status: '',
      admin: true,
    },
    {
      id: '11',
      name: 'Vinh',
      startDate: '07-06-2022',
      position: 'Nhân viên',
      email: 'vinhpt@rikkeisoft.com',
      address: 'Hà Nội',
      phone: '0123456789',
      status: '',
      admin: false,
    },
    {
      id: '12',
      name: 'Tú',
      startDate: '07-06-2022',
      position: 'Nhân viên',
      email: 'tund@rikkeisoft.com',
      address: 'Hà Nội',
      phone: '0351234567',
      status: '',
      admin: false,
    },
  ];

  // // get user from client
  getAllUser(): Observable<User[]> {
    return of(this.users);
  }

  getCategoriesPosition(): Observable<any> {
    return of(this.position);
  }

  // // get user from server
  // getUser(): Observable<User[]> {
  //   return this.http.get<User[]>('/');
  // }

  getUserById(id: string): Observable<User> {
    let userById = this.users.filter((e) => e.id === id)[0];
    return of(userById);
  }

  // editUser(user: User): Observable<User[]> {
  //   let index = this.users.findIndex((item) => item.id === user.id);
  //   this.users[index] = user;
  // }

  editUser(user: User): Observable<User[]> {
    let index = this.users.findIndex((item) => item.id === user.id);
    this.users[index] = user;

    // return of(this.users);

    // this.users.push(user);
    return of(this.users);
  }

  addNewUser(user: User): Observable<User[]> {
    this.users.push(user);
    return of(this.users);
  }

  deleteUser(id: string): Observable<User[]> {
    let temp = this.users.filter((item) => item.id !== id);
    this.users = temp;
    return of(this.users);
  }
}
