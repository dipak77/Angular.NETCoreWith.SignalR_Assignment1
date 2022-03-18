////export class User {
////    userName: string;
////    firstName: string;
////    isLoggedIn: boolean;
////    role: string;
////}
export class User {
  id!: string;
  title!: string;
  userName: string;
  firstName!: string;
  lastName!: string;
  email!: string;
  role!: string;
  isDeleting: boolean = false;
  isLoggedIn: boolean = false;

}
