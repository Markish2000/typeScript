"use strict";
var Validations;
(function (Validations) {
    Validations.validateExt = (text) => {
        return text.length > 3 ? true : false;
    };
    Validations.validateDate = (myDate) => {
        return isNaN(myDate.valueOf()) ? false : true;
    };
})(Validations || (Validations = {}));
console.log(Validations.validateExt('Mar'));
//# sourceMappingURL=main.js.map