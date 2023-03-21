(() => {
  interface Client {
    name: string;
    age?: number;
    address: Address;
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const client: Client = {
    name: 'Marcos',
    age: 22,
    address: {
      id: 125,
      zip: 'KY2 SUD',
      city: 'Ottawa',
    },
  };

  const client2: Client = {
    name: 'Melissa',
    age: 30,
    address: {
      id: 120,
      zip: 'K2S U2A',
      city: 'Toronto',
    },
  };
})();
