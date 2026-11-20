// TuileImages.js (exemple de composant React)
// Place ce fichier dans src/components/TuileImages.js

import React, { useState, useRef } from 'react';
import '../GoddessStory.css'; // Crée ce fichier CSS à côté

const boxComposition = [
  {
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
        variants: [
        {
          packs: 30,
          rarities: [
            { rarity: "R", chance: 5/6 },
            { rarity: "CR", chance: 1/6 }
          ]
        }
        ]
      },
      {
        position: 2,
        variants: [
          {
            packs: 30,
            rarities: [
              { rarity: "R", chance: 5/6 },
              { rarity: "CR", chance: 1/6 }
            ]
          }
        ]
      },
      {
        position: 3,
        variants: [
          {
            packs: 30,
            rarities: [
              { rarity: "R", chance: 5/6 },
              { rarity: "CR", chance: 1/6 }
            ]
          }
        ]
      },
      {
          position: 4,
          variants: [
            {
              packs: 30,
              rarities: [
                { rarity: "R", chance: 5/6 },
                { rarity: "CR", chance: 1/6 }
              ]
            }
          ]
      },
      {
          position: 5,
          variants: [
          {
              packs: 22,
              rarities: [
                { rarity: "SR", chance: 18/22 },
                { rarity: "SCR", chance: 4/22 }
              ]
          },
          {
              packs: 6,
              rarities: [
                { rarity: "SSR", chance: 5/6 },
                { rarity: "SER", chance: 1/6 }
              ]
          },
          {
              packs: 2,
              rarities: [
                { rarity: "GR", chance: 2/2 }
              ]
          }
        ]
      }
    ],
    notes: [
      "L'ordre des boosters dans la box est aléatoire, leur composition est fixe."
    ],
    reprints: [
      {
        set: "NS-14",
        rarity: "R",
        numbers: "all",
        count: 18
      },
    ],
  },
]