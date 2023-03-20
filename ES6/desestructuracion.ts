(() => {
  type Avengers = {
    nick: string;
    ironMan: string;
    vision: string;
    activo: boolean;
    poder: number;
  };

  const avengers: Avengers = {
    nick: 'Samuel L. Rackson',
    ironMan: 'Robert Downey Jr.',
    vision: 'Paul Bettany',
    activo: true,
    poder: 1500.123123,
  };
  // const { poder, vision } = avengers;
  // console.log(poder.toFixed(2), vision.toLowerCase());
  const printAvenger = ({ ironMan, ...resto }: Avengers) => {
    console.log(avengers.vision, resto);
  };
  // printAvenger(avengers);

  const avengersArr: [string, boolean, number] = ['Cap. América', true, 150.15];
  const [capitan, ironMan, seriUnNumbero] = avengersArr;
  // console.log({ ironMan, capitan });
})();
