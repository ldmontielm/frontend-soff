import { DefaultSession, DefaultUser } from "next-auth";

interface IUser extends DefaultUser {
    access_token: string;
    status: boolean;
    permissions: Array<string>
}

declare module "next-auth" {
  interface User extends IUser {}
  interface Session {
    user?: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends IUser {}
}