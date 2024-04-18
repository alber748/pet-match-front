// data/users.ts

export interface User {
      email: string;
      password: string;
      name : string;
      lastname: string;
      phone: string;
      location: string;
      kindRol: string;
}

export interface UserLogin {
      email: string;
      password: string;
    }
    
const users: User[] = [];
    
export default users;
    