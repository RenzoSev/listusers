import { AxiosStatic } from 'axios';

interface APIResponse {
  results: UserAPIResponse[];
  info: Info;
}
interface Info {
  seed: string;
  results: number;
  page: number;
  version: string;
}
interface UserAPIResponse {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  login: Login;
  dob: Dob;
  registered: Dob;
  phone: string;
  cell: string;
  id: Id;
  picture: Picture;
  nat: string;
}
interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}
interface Id {
  name: string;
  value: string;
}
interface Dob {
  date: string;
  age: number;
}
interface Login {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}
interface Location {
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: string;
  coordinates: Coordinates;
  timezone: Timezone;
}
interface Timezone {
  offset: string;
  description: string;
}
interface Coordinates {
  latitude: string;
  longitude: string;
}
interface Street {
  number: number;
  name: string;
}
interface Name {
  title: string;
  first: string;
  last: string;
}

export interface UserDocument {
  id: UserAPIResponse['login']['uuid'];
  img: UserAPIResponse['picture']['medium'];
  firstName: UserAPIResponse['name']['first'];
  lastName: UserAPIResponse['name']['last'];
  email: UserAPIResponse['email'];
  phone: UserAPIResponse['phone'];
  street: UserAPIResponse['location']['street']['name'];
  streetNumber: UserAPIResponse['location']['street']['number'];
  city: UserAPIResponse['location']['city'];
  state: UserAPIResponse['location']['state'];
  postcode: UserAPIResponse['location']['postcode'];
}

export interface UsersContract {
  getUsers: (length: number) => Promise<UserDocument[]>;
}

export class Users implements UsersContract {
  constructor(private readonly fetcher: AxiosStatic) {}

  public parseUser(user: UserAPIResponse): UserDocument {
    return {
      id: user.login.uuid,
      email: user.email,
      firstName: user.name.first,
      lastName: user.name.last,
      img: user.picture.large,
      phone: user.phone,
      street: user.location.street.name,
      streetNumber: user.location.street.number,
      city: user.location.city,
      state: user.location.state,
      postcode: user.location.postcode,
    };
  }

  public async getUsers(length: number) {
    const url = `https://randomuser.me/api/?results=${length}`;

    const {
      data: { results: users },
    } = await this.fetcher.get<APIResponse>(url);

    return users.map(this.parseUser);
  }
}