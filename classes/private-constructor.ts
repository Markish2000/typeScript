(() => {
  class Apocalipsis {
    static instance: Apocalipsis;

    private constructor(public name: string) {}
    static callApocalipsis() {
      if (!Apocalipsis.instance) {
        Apocalipsis.instance = new Apocalipsis('Soy Apocalipsis el único');
      }
      return Apocalipsis.instance;
    }
    changeName(newName: string): void {
      this.name = newName;
    }
  }
  const apocalipsis1 = Apocalipsis.callApocalipsis();
  const apocalipsis2 = Apocalipsis.callApocalipsis();
  const apocalipsis3 = Apocalipsis.callApocalipsis();
  apocalipsis1.changeName('Xavier');
})();
