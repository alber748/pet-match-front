// data/users.ts

export interface User {
      email: string;
      password: string;
      name: string;
      lastname: string;
      phone: string;
      location: string;
      kindRol: string;
      entidad: string;
}

export interface UserLogin {
      email: string;
      password: string;
}

export interface UserEditInfo {
      email: string;
      name: string;
      lastname: string;
      phone: string;
      location: string;
      kindRol: string;
      entidad: string;
}
export interface UserEditPassword {
      email: string,
      oldPassword: string,
      newPassword: string
}
const users: User[] = [];

export default users;
