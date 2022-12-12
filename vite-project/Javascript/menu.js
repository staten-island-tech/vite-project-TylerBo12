const roster = [
  {
    Row1: [
      {
        name: `Mario`,
        series: `Super Mario Bros`,
      },
      {
        name: `Donkey Kong`,
        series: `Super Mario Bros, Donkey Kong`,
      },
      {
        name: `Link`,
      },
      {
        name: `Samus`,
      },
      {
        name: `Dark Samus`,
      },
      {
        name: `Yoshi`,
        series: `Super Mario Bros`,
      },
      {
        name: `Kirby`,
      },
      {
        name: `Fox`,
      },
      {
        name: `Pikachu`,
      },
      {
        name: `Luigi`,
        series: `Super Mario Bros`,
      },
      {
        name: `Ness`,
      },
      {
        name: `Captain Falcon`,
      },
      {
        name: `Jigglypuff`,
      },
    ],

    Row2: [
      {
        name: `Mario`,
      },
      {
        name: `Donkey Kong`,
      },
      {
        name: `Link`,
      },
      {
        name: `Samus`,
      },
      {
        name: `Dark Samus`,
      },
      {
        name: `Yoshi`,
      },
      {
        name: `Kirby`,
      },
      {
        name: `Fox`,
      },
      {
        name: `Pikachu`,
      },
      {
        name: `Luigi`,
      },
      {
        name: `Ness`,
      },
      {
        name: `Captain Falcon`,
      },
      {
        name: `Jigglypuff`,
      },
    ],
  },
];

roster.forEach((row) => {
  row.forEach((character) => {
    console.log(character.name);
  });
});
