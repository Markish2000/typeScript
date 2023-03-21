"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
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
    const printName = (character) => {
        console.log(character.name);
    };
    printName(wolverine);
})();
(() => {
    class Avenger {
        static getAge() {
            return this.name;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    Avenger.age = 35;
    const antMan = new Avenger('AntMan', 'Capitan', 'Scott Lang');
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Constructor Avenger llamado!');
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class XMen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log('Constructor XMen llamado');
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
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
//# sourceMappingURL=main.js.map