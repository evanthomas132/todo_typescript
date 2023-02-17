
//TodoClass to create a new todo 

export class TodoClass {
  public  text: string;
  public readonly id: number;
  public completed: boolean;

  constructor(text: string, id: number, completed: boolean) {
    this.text = text;
    this.id = id;
    this.completed = completed;
  }
  format () {
   return  `${this.text}`  }
}
