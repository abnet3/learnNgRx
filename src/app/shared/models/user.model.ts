export class User {
  constructor(
    private email: string,
    private token: string,
    private localID: string,
    private expirationdate: Date
  ) {}
}
