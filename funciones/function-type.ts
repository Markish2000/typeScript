(() => {
  const addNumbers = (a: number, b: number) => a + b;
  const greet = (name: string) => `Hola ${name}`;
  const saveTheWorld = () => 'El mundo está salvado!';

  //! let myFunction: (y: number, z: number) => number;
  //! myFunction = addNumbers;
  //! console.log(myFunction(1, 2));

  //? let myFunction: (x: string) => string;
  //? myFunction = greet;
  //? console.log(myFunction('Marcos'));

  //* let myFunction: () => void;
  //* myFunction = saveTheWorld;
  //* console.log(myFunction());
})();
