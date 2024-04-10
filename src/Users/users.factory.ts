import { Users } from './users.service';
import axios from 'axios';

export function createUsersService() {
  const usersService = new Users(axios);
  return usersService;
}
