/**
 * P/ criar um user: email, name, password
 */

interface TechObject {
  title: string;
  experience: number;
}


interface CreateUserData { // Interfaces definem os tipos de um conjunto de dados.
  name?: string; // O ponto de interrogação significa que o name é opcional.
  email: string;
  password: string;
  techs: Array<string | TechObject> // array que pode incluir strign e/ou objeto.
  appointments: string[] // Array de strings
} 

export default function createUser({ name, email, password }: CreateUserData) { 
  const user = {
    name,
    email,
    password
  }

  return user;
}