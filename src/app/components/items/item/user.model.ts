export class User {
  public readonly id: number;
  public name: string;

  constructor(data: any = {}) {
    this.id = data.id;
    this.name = data.name ? data.name : '';
  }
}
