(() => {
  const hero: string = 'Flash';

  const returnName = (): string => {
    return hero;
  };

  const activateBatSignal = (): string => {
    return '¡Batiseñal activada!';
  };
  console.log(typeof activateBatSignal);
  const heroName = returnName();
})();
