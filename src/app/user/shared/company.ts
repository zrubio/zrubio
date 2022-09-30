export class Company {
  private name: string;
  constructor() {}
  public getName(): string {
    return this.name;
  }
  public setName(name: string): void{
    this.name = name;
  }
}