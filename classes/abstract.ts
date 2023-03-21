(() => {
  abstract class Mutante {
    constructor(public name: string, public realName: string) {}
  }

  class XMen extends Mutante {
    salvarMundo() {
      return 'Mundo a salvo!';
    }
  }

  class Villain extends Mutante {
    conquistarMundo() {
      return 'Mundo conquistado';
    }
  }

  const wolverine = new XMen('Wolverine', 'Logan');
  const magneto = new Villain('Magneto', 'Magnus');

  const printName = (character: Mutante) => {
    console.log(character.name);
  };
  printName(wolverine);
})();
