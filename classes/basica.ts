(() => {
  class Avenger {
    private name: string = 'No name';
    private team: string = 'No team';
    public realName?: string = 'no realName';
    static age: number = 35;
    constructor(name: string, team: string, realName?: string) {
      this.name = name;
      this.team = team;
      this.realName = realName;
    }
  }

  const antMan: Avenger = new Avenger('AntMan', 'Capitan');
  // console.log(antMan);
  console.log(Avenger.age);
})();
