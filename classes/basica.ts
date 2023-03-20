(() => {
  class Avenger {
    static age: number = 35;
    constructor(
      private name: string,
      private team: string,
      public realName?: string
    ) {}
  }

  const antMan: Avenger = new Avenger('AntMan', 'Capitan', 'Scott Lang');
  // console.log(antMan);
  console.log(Avenger.age);
})();
