
const NS03 = {
  id: "NS-03",
  name: "Goddess Story NS-03",

  rarityOrder: [
    "SSR",
    "SR",
    "R"
  ],

  rarities: [
    {
      name: "SSR",
      cards: [
        { id: "001", owned: false },
        { id: "002", owned: true },
        { id: "003", owned: false },
        { id: "004", owned: false },
        { id: "005", owned: false },
        { id: "006", owned: true },
        { id: "007", owned: false },
        { id: "008", owned: false },
        { id: "009", owned: false },
        { id: "010", owned: false },
        { id: "011", owned: true },
        { id: "012", owned: true },
        { id: "013", owned: false },
        { id: "014", owned: true },
        { id: "015", owned: false },
        { id: "016", owned: false },
        { id: "017", owned: true },
        { id: "018", owned: false },
      ]
    },
    {
      name: "SR",
      cards: [
        { id: "019", owned: true },
        { id: "020", owned: true },
        { id: "021", owned: true },
        { id: "022", owned: true },
        { id: "023", owned: true },
        { id: "024", owned: false },
        { id: "025", owned: true },
        { id: "026", owned: true },
        { id: "027", owned: true },
        { id: "028", owned: false },
        { id: "029", owned: false },
        { id: "030", owned: false },
        { id: "031", owned: true },
        { id: "032", owned: true },
        { id: "033", owned: true },
        { id: "034", owned: true },
        { id: "035", owned: true },
        { id: "036", owned: true },
        { id: "037", owned: false },
        { id: "038", owned: true },
        { id: "039", owned: false },
        { id: "040", owned: true },
        { id: "041", owned: false },
        { id: "042", owned: false },
        { id: "043", owned: true },
        { id: "044", owned: true },
        { id: "045", owned: true },
        { id: "046", owned: true },
        { id: "047", owned: true },
        { id: "048", owned: false },
        { id: "049", owned: true },
        { id: "050", owned: true },
        { id: "051", owned: true },
        { id: "052", owned: true },
        { id: "053", owned: false },
        { id: "054", owned: false },
      ]
    },
    {
      name: "R",
      cards: [
        { id: "055", owned: true },
        { id: "056", owned: true },
        { id: "057", owned: true },
        { id: "058", owned: true },
        { id: "059", owned: true },
        { id: "060", owned: true },
        { id: "061", owned: true },
        { id: "062", owned: true },
        { id: "063", owned: true },
        { id: "064", owned: true },
        { id: "065", owned: true },
        { id: "066", owned: true },
        { id: "067", owned: true },
        { id: "068", owned: true },
        { id: "069", owned: true },
        { id: "070", owned: true },
        { id: "071", owned: true },
        { id: "072", owned: true },
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
            { rarity: "R" },
          ]
        }
      },
      {
        position: 2,
        variants: {
            packs: 30,
            rarities: [
              { rarity: "R" },
            ]
          }
      },
      {
        position: 3,
        variants: {
          packs: 30,
          rarities: [
            { rarity: "R" },
          ]
        }
      },
      {
        position: 4,
        variants: {
          packs: 30,
          rarities: [
            { rarity: "R" },
          ]
        }
      },
      {
          position: 5,
          variants: [
          {
              packs: 24,
              rarities: [
                { rarity: "SR" },
              ]
          },
          {
              packs: 6,
              rarities: [
                { rarity: "SSR"},
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
        set: "NS-02",
        rarity: "R",
        numbers: "all",
        count: 72
      },
    ],
  },
};

export default NS03;
