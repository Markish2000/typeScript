(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {
      console.log('Constructor Avenger llamado!');
    }
    protected getFullName() {
      return `${this.name} ${this.realName}`;
    }
  }
  class XMen extends Avenger {
    constructor(name: string, realName: string, public isMutant: boolean) {
      super(name, realName);
      console.log('Constructor XMen llamado');
    }

    get fullName() {
      return `${this.name} - ${this.realName}`;
    }

    set fullName(name: string) {
      if (name.length < 3) {
        throw new Error('El nombre debe ser mayor de 3 letras');
      }
      this.name = name;
    }

    getFullNameXMen() {
      console.log(super.getFullName());
    }
  }

  const wolverine = new XMen('Wolverine', 'Logan', true);
  console.log(wolverine);
  wolverine.fullName = 'Marcos';
})();
