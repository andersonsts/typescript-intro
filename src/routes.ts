import { Request, Response } from 'express';

export function helloWorld(request: Request, response: Response) {
  return response.json({ mensagem: 'Hello World '});
}