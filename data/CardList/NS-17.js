
const NS17 = {
  id: "NS-17",
  name: "Goddess Story NS-17",

  rarityOrder: [
    "SER",
    "GR",
    "SSR",
    "SCR",
    "SR",
    "CR",
    "R"
  ],

  rarities: [
    {
      name: "SER",
      cards: [
        { id: "001", owned: false },
        { id: "002", owned: false },
        { id: "003", owned: false },
      ]
    },
    {
      name: "GR",
      cards: [
        { id: "001", owned: false },
        { id: "002", owned: false },
        { id: "003", owned: false },
        { id: "004", owned: true },
        { id: "005", owned: false },
        { id: "006", owned: true },
      ]
    },
    {
      name: "SSR",
      cards: [
        { id: "001", owned: true },
        { id: "002", owned: false },
        { id: "003", owned: false },
        { id: "004", owned: false },
        { id: "005", owned: false },
        { id: "006", owned: true },
        { id: "007", owned: true },
        { id: "008", owned: true },
        { id: "009", owned: true },
        { id: "010", owned: false },
        { id: "011", owned: false },
        { id: "012", owned: true },
        { id: "013", owned: false },
        { id: "014", owned: true },
        { id: "015", owned: true },
        { id: "016", owned: false },
        { id: "017", owned: true },
        { id: "018", owned: false },
      ]
    },
    {
      name: "SCR",
      cards: [
        { id: "001", owned: true },
        { id: "002", owned: false },
        { id: "003", owned: false },
        { id: "004", owned: true },
        { id: "005", owned: true },
        { id: "006", owned: false },
        { id: "007", owned: false },
        { id: "008", owned: false },
        { id: "009", owned: false },
        { id: "010", owned: false },
        { id: "011", owned: false },
        { id: "012", owned: true },
        { id: "013", owned: false },
        { id: "014", owned: false },
        { id: "015", owned: false },
        { id: "016", owned: false },
        { id: "017", owned: false },
        { id: "018", owned: false },
      ]
    },
    {
      name: "SR",
      cards: [
        { id: "001", owned: false },
        { id: "002", owned: false },
        { id: "003", owned: false },
        { id: "004", owned: false },
        { id: "005", owned: false },
        { id: "006", owned: true },
        { id: "007", owned: false },
        { id: "008", owned: false },
        { id: "009", owned: true },
        { id: "010", owned: true },
        { id: "011", owned: true },
        { id: "012", owned: true },
        { id: "013", owned: true },
        { id: "014", owned: true },
        { id: "015", owned: true },
        { id: "016", owned: true },
        { id: "017", owned: true },
        { id: "018", owned: true },
        { id: "019", owned: true },
        { id: "020", owned: true },
        { id: "021", owned: false },
        { id: "022", owned: false },
        { id: "023", owned: true },
        { id: "024", owned: true },
        { id: "025", owned: false },
        { id: "026", owned: false },
        { id: "027", owned: false },
        { id: "028", owned: false },
        { id: "029", owned: false },
        { id: "030", owned: true },
        { id: "031", owned: false },
        { id: "032", owned: false },
        { id: "033", owned: false },
        { id: "034", owned: true },
        { id: "035", owned: false },
        { id: "036", owned: true },
      ]
    },
    {
      name: "CR",
      cards: [
        { id: "001", owned: true },
        { id: "002", owned: true },
        { id: "003", owned: true },
        { id: "004", owned: true },
        { id: "005", owned: true },
        { id: "006", owned: true },
        { id: "007", owned: true },
        { id: "008", owned: true },
        { id: "009", owned: true },
        { id: "010", owned: true },
        { id: "011", owned: true },
        { id: "012", owned: true },
        { id: "013", owned: true },
        { id: "014", owned: true },
        { id: "015", owned: true },
        { id: "016", owned: true },
        { id: "017", owned: true },
        { id: "018", owned: true },
      ]
    },
    {
      name: "R",
      cards: [
        { id: "001", owned: true },
        { id: "002", owned: true },
        { id: "003", owned: true },
        { id: "004", owned: true },
        { id: "005", owned: true },
        { id: "006", owned: true },
        { id: "007", owned: true },
        { id: "008", owned: true },
        { id: "009", owned: true },
        { id: "010", owned: true },
        { id: "011", owned: true },
        { id: "012", owned: true },
        { id: "013", owned: true },
        { id: "014", owned: true },
        { id: "015", owned: true },
        { id: "016", owned: true },
        { id: "017", owned: true },
        { id: "018", owned: true },
      ]
    },
  ],



  boxComposition: {
    case: {
        boxes: 48
    },
    box: {
        packs: 30,
        cardsPerPack: 5
    },
    slots: [
      {
        position: 1,
        variants: {
          packs: 30,
          rarities: [
              { rarity: "R", chance: "5/6" },
              { rarity: "CR", chance: "1/6" }
          ]
        }
      },
      {
        position: 2,
        variants: {
          packs: 30,
          rarities: [
            { rarity: "R", chance: "5/6" },
            { rarity: "CR", chance: "1/6" }
          ]
        }
      },
      {
        position: 3,
        variants: {
          packs: 30,
          rarities: [
            { rarity: "R", chance: "5/6" },
            { rarity: "CR", chance: "1/6" }
          ]
        }
      },
      {
        position: 4,
        variants: {
          packs: 30,
          rarities: [
            { rarity: "R", chance: "5/6" },
            { rarity: "CR", chance: "1/6" }
          ]
        }
      },
      {
          position: 5,
          variants: [
          {
            packs: 22,
            rarities: [
              { rarity: "SR", chance: "18/22" },
              { rarity: "SCR", chance: "4/22" }
            ]
          },
          {
            packs: 6,
            rarities: [
              { rarity: "SSR", chance: "5/6" },
              { rarity: "SER", chance: "1/6" }
            ]
          },
          {
            packs: 2,
            rarities: [
              { rarity: "GR"}
            ]
          },
        ]
      }
    ],
    notes: [
      "L'ordre des boosters dans la box est aléatoire, leur composition est fixe."
    ],
    reprints: [
      {
        set: "NS-16",
        rarity: "R",
        numbers: "all",
        count: 18
      },
    ],
  },
};

export default NS17;
