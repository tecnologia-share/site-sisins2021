export class AuthTokenError extends Error {
  constructor() {
    super('Error with authentication token.');
    Object.setPrototypeOf(this, AuthTokenError.prototype);
  }
}
