export class RegisterModel {
  name: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;

  constructor() {
    this.name = 'Vladana';
    this.lastName = 'Pandurevic';
    this.email = 'a@gmail.com';
    this.password = 'radijator';
    this.confirmPassword = 'radijator';
  }
}
