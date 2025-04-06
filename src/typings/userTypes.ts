export interface User {
  id: number;
  email: string;
  nickname: string;
  image: string | null;
  password: string;
  refreshToken: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateUserInput = { email: string; nickname: string; hashedPassword: string };
