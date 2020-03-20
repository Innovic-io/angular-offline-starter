export class RegisterModel {
  name: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;

  constructor() {
    this.name = 'Milana';
    this.lastName = 'Bijeljanin';
    this.email = 'mika@gmail.com';
    this.password = 'mikamala';
    this.confirmPassword = 'mikamala';
  }
}
