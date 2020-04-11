import { Request, Response } from 'express';
import createUser from './services/CreateUser';

// string, number, boolean, object, array
// interfaces

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    name: 'Anderson',
    email: 'andersonstst@gmail.com',
    password: '123456',
    techs: [
        'NodeJS', 
        'ReactJS', 
        'React Native',
        { title: 'JavaScript', experience: 100 },
      ],
    appointments: ['12:12', '4:14']
  });

  // console.log(user.name);

  return response.json({ mensagem: 'Hello World '});
}