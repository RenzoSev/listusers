import axios from 'axios';

export interface UserDocument {
  img: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface UsersContract {
  getUsers: (length: number) => Promise<UserDocument[]>;
}

export class Users<T> implements UsersContract {
  constructor(private readonly fetcher: T) {}

  async getUsers(length: number) {
    const users = Array.from({ length }, () => ({
      img: 'www.myimg.com.br',
      firstName: 'Renzo',
      lastName: 'Sevilha',
      email: 'renzosevilha@proton.me',
      phone: '+55 (11) 991576545',
    }));

    return Promise.resolve(users);
  }
}
