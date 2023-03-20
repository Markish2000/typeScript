(() => {
  class Avenger {
    static age: number = 35;
    static getAge() {
      return this.name;
    }
    constructor(
      private name: string,
      private team: string,
      public realName?: string
    ) {}

    public bio() {
      return `${this.name} (${this.team})`;
    }
  }

  const antMan: Avenger = new Avenger('AntMan', 'Capitan', 'Scott Lang');
  // console.log(antMan);
  // console.log(Avenger.getAge());
})();
