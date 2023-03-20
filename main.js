"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    Avenger.age = 35;
    const antMan = new Avenger('AntMan', 'Capitan', 'Scott Lang');
    console.log(Avenger.age);
})();
//# sourceMappingURL=main.js.map