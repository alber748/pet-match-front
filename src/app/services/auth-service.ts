

import users, { User } from '../../data/users';

export const addUser = (user: User): void => {
      const newUser: User = user;
      users.push(newUser);
      console.log('Usuario agregado correctamente.');
};
