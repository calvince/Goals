export class Goal {
  public showDescription: boolean;
  constructor(public id: number, public name: string, public description: string, public completeDate: Date)  {}
}

export class Newgoal {
  public showDescription: boolean;
  constructor(public id: number, public name: string, public description: string, public completeDate: Date) {
    this.showDescription = false;
  }
}
