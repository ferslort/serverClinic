export class MedicModel {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public password: string,
    public role: string,
    public createdAt: Date,
    public updatedAt: Date
  ) {}
}
