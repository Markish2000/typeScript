"use strict";
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
        getFullNameXMen() {
            console.log(super.getFullName());
        }
    }
    const wolverine = new XMen('Wolverine', 'Logan', true);
    console.log(wolverine);
    wolverine.getFullNameXMen();
})();
//# sourceMappingURL=main.js.map