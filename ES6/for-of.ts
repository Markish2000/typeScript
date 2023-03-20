(() => {
  type Avengers = {
    name: string;
    weapon: string;
  };

  const ironMan: Avengers = {
    name: 'Ironman',
    weapon: 'Armorsuit',
  };

  const captainAmerica: Avengers = {
    name: 'Capitán América',
    weapon: 'Escudo',
  };

  const thor: Avengers = {
    name: 'Thor',
    weapon: 'Mjolnir',
  };

  const avengers = [ironMan, thor, captainAmerica];

  for (const avenger of avengers) {
    console.log(avenger);
  }
})();
