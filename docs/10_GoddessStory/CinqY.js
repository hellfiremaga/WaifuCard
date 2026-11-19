// TuileImages.js (exemple de composant React)
// Place ce fichier dans src/components/TuileImages.js

import React, { useState, useRef } from 'react';
import './GoddessStory.css'; // Crée ce fichier CSS à côté

const images = [
  {
    src: '/WaifuCard/img-waifu/NS-5M01-1-300x300.webp',
    titre: 'NS-5M01',
    details: [
        'Cartes par boîte : 140',
        'Cartes dans le set : 207',
        'Nb cartes par sachet : 7',
        'Nb sachets par boîte : 20',
        'Rareté : R, SR, SSR, PTR, MR, ZR',
        'Année : 12/2020'
    ],
    raretes: {ZR: 9, MR: 18, PTR: 27, SSR: 36, SR: 45, R: 72},
    imagesSet: [],
  },
  {
    src: '/WaifuCard/img-waifu/NS-5M02.png',
    titre: 'NS-5M02',
    details: [
        'Cartes par boîte : 140',
        'Cartes dans le set : 126',
        'Nb cartes par sachet : 7',
        'Nb sachets par boîte : 20',
        'Rareté : R, SR, SSR, PTR, MR, ZR, PR',
        'Année : 05/2021'
    ],
    raretes: {PR: 18, ZR: 9, MR: 9, PTR: 12, SSR: 15, SR: 27, R: 36},
    imagesSet: [],
  },
  {
    src: '/WaifuCard/img-waifu/NS-5M03.png',
    titre: 'NS-5M03',
    details: [
        'Cartes par boîte : 140',
        'Cartes dans le set : 126',
        'Nb cartes par sachet : 7',
        'Nb sachets par boîte : 20',
        'Rareté : R, SR, SSR, PTR, MR, ZR, PR',
        'Année : 09/2021'
    ],
    raretes: {PR: 18, ZR: 9, MR: 18, PTR: 18, SSR: 27, SR: 18, R: 18},
    imagesSet: [],
  },
  {
    src: '/WaifuCard/img-waifu/NS-5M04.png',
    titre: 'NS-5M04',
    details: [
        'Cartes par boîte : 140',
        'Cartes dans le set : 162',
        'Nb cartes par sachet : 7',
        'Nb sachets par boîte : 20',
        'Rareté : R, SR, SSR, PTR, MR, ZR, PR',
        'Année : 09/2021'
    ],
    raretes: {PR: 18, ZR: 9, MR: 18, PTR: 18, SSR: 27, SR: 36, R: 36},
    imagesSet: [],
  },
  {
    src: '/WaifuCard/img-waifu/NS-5M05.png',
    titre: 'NS-5M05',
    details: [
        'Cartes par boîte : 140',
        'Cartes dans le set : 135',
        'Nb cartes par sachet : 7',
        'Nb sachets par boîte : 20',
        'Rareté : R, SR, SSR, PTR, MR, ZR, XR, PR',
        'Année : 03/2022'
    ],
    raretes: {PR: 18, XR: 9, ZR: 9, MR: 18, PTR: 18, SSR: 27, SR: 18, R: 18},
    imagesSet: [],
  },
  {
    src: '/WaifuCard/img-waifu/NS-5M05web.png',
    titre: 'NS-5M05 (online)',
    details: [
        'Cartes par boîte : 72',
        'Cartes dans le set : 135',
        'Nb cartes par sachet : 4',
        'Nb sachets par boîte : 18',
        'Rareté : R, SR, SSR, PTR, MR, ZR, XR, PR',
        'Année : 03/2022'
    ],
    raretes: {PR: 18, XR: 9, ZR: 9, MR: 18, PTR: 18, SSR: 27, SR: 18, R: 18},
    imagesSet: [],
  },
  {
    src: '/WaifuCard/img-waifu/NS-5M06.png',
    titre: 'NS-5M06',
    details: [
        'Cartes par boîte : 140',
        'Cartes dans le set : 135',
        'Nb cartes par sachet : 7',
        'Nb sachets par boîte : 20',
        'Rareté : R, SR, SSR, PTR, MR, ZR, XR, PR',
        'Année : 06/2022'
    ],
    raretes: {PR: 18, XR: 9, ZR: 9, MR: 18, PTR: 18, SSR: 27, SR: 18, R: 18},
    imagesSet: [],
  },
  {
    src: '/WaifuCard/img-waifu/NS-5M06web.png',
    titre: 'NS-5M06 (online)',
    details: [
        'Cartes par boîte : 72',
        'Cartes dans le set : 135',
        'Nb cartes par sachet : 4',
        'Nb sachets par boîte : 18',
        'Rareté : R, SR, SSR, PTR, MR, ZR, XR, PR',
        'Année : 06/2022'
    ],
    raretes: {PR: 18, XR: 9, ZR: 9, MR: 18, PTR: 18, SSR: 27, SR: 18, R: 18},
    imagesSet: [],
  },
  {
    src: '/WaifuCard/img-waifu/NS-5M07.png',
    titre: 'NS-5M07',
    details: [
        'Cartes par boîte : 140',
        'Cartes dans le set : 138',
        'Nb cartes par sachet : 7',
        'Nb sachets par boîte : 20',
        'Rareté : R, SR, SSR, PTR, MR, INS, ZR, SZR, XR, PR',
        'Année : 06/2023'
    ],
    raretes: {PR: 12, XR: 9, SZR: 9, ZR: 9, INS: 18, MR: 18, PTR: 18, SSR: 27, SR: 18, R: 18},
    imagesSet: [
      "/WaifuCard/img-long-waifu/NS-5M07_short.png",
    ],
  },
  {
    src: '/WaifuCard/img-waifu/NS-5M07web.png',
    titre: 'NS-5M07 (online)',
    details: [
        'Cartes par boîte : 72',
        'Cartes dans le set : 138',
        'Nb cartes par sachet : 4',
        'Nb sachets par boîte : 18',
        'Rareté : R, SR, SSR, PTR, MR, INS, ZR, SZR, XR, PR',
        'Année : 06/2023'
    ],
    raretes: {PR: 12, XR: 9, SZR: 9, ZR: 9, INS: 18, MR: 18, PTR: 18, SSR: 27, SR: 18, R: 18},
    imagesSet: [
      "/WaifuCard/img-long-waifu/NS-5M07_short.png",
    ],
  },
  {
    src: '/WaifuCard/img-waifu/NS-5M08.png',
    titre: 'NS-5M08',
    details: [
        'Cartes par boîte : 140',
        'Cartes dans le set : 174',
        'Nb cartes par sachet : 7',
        'Nb sachets par boîte : 20',
        'Rareté : R, CR, SR, SCR, SSR, MR, INS, XR, ZR, SZR, PR',
        'Année : 12/2023'
    ],
    raretes: {PR: 12, SZR: 9, ZR: 9, XR: 9, INS: 18, MR: 18, SSR: 27, SCR: 18, SR: 18, CR: 18, R: 18},
    imagesSet: [
      "/WaifuCard/img-long-waifu/NS-5M08_full.png",
    ],
  },
  {
    src: '/WaifuCard/img-waifu/NS-5M09.png',
    titre: 'NS-5M09',
    details: [
        'Cartes par boîte : 140',
        'Cartes dans le set : 233',
        'Nb cartes par sachet : 7',
        'Nb sachets par boîte : 20 + 1',
        'Rareté : R, CR, SR, SCR, SSR, MR, INS, TR, WTR, XR, ZR, SZR, HR, TGR, ACR, MTL, PR',
        'Année : 05/2024'
    ],
    raretes: {PR: 12, MTL: 6, ACR: 9, TGR: 9, HR: 9, SZR: 9, ZR: 9, XR: 9, WTR: 8, TR: 18, INS: 18, MR: 18, SSR: 27, SCR: 18, SR: 18, CR: 18, R: 18},
    imagesSet: [
      "/WaifuCard/img-long-waifu/NS-5M09_promo.png",
      "/WaifuCard/img-long-waifu/NS-5M09_full.jpg"
    ],
  },
  {
    src: '/WaifuCard/img-waifu/NS-5M10.png',
    titre: 'NS-5M10',
    details: [
        'Cartes par boîte : 140',
        'Cartes dans le set : 210',
        'Nb cartes par sachet : 7',
        'Nb sachets par boîte : 20',
        'Rareté : R, CR, SR, SCR, SSR, MR, BHR, XR, ZR, SZR, SD, SSD, HR, TGR, PR',
        'Année : 04/2025'
    ],
    raretes: {PR: 12, TGR: 9, HR: 9, SSD: 9, SD: 9, SZR: 9, ZR: 9, XR: 9, BHR: 18, MR: 18, SSR: 27, SCR: 18, SR: 18, CR: 18, R: 18},
    imagesSet: [
      "/WaifuCard/img-long-waifu/NS-5M10_promo.png",
      "/WaifuCard/img-long-waifu/NS-5M10_full.jpg",
      "/WaifuCard/img-long-waifu/NS-5M10_short.png",
      "/WaifuCard/img-long-waifu/NS-5M10_acrylic.png",
    ],
  },
];

export default function CinqY() {
  const [selected, setSelected] = useState(null);
  const bottomRef = useRef(null);

  const handleShowSet = (idx) => {
    setSelected(idx);
    setTimeout(() => {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100); // Laisse le temps au DOM de s'afficher
  };

  return (
    <>
      <div className="tuile-grid">
        {images.map((img, idx) => (
          <div className="tuile-item" key={idx}>
            <div className="tuile-title">{img.titre}</div>
            <img src={img.src} alt={img.titre} />
            <ul className="tuile-label">
              {img.details.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
            <button className="tuile-btn" onClick={() => handleShowSet(idx)}>
              Voir plus
            </button>
          </div>
        ))}
      </div>

      <div ref={bottomRef} style={{ marginTop: '60px', minHeight: '200px' }}>
        {selected !== null && (
            <div className="set-details">
            <h2>Détails du set {images[selected].titre}</h2>
            {/* Génération dynamique des colonnes */}
            <table className="set-table">
                <thead>
                <tr>
                    {Object.keys(images[selected].raretes || {}).map((key) => (
                    <th key={key}>{key}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                <tr>
                    {Object.values(images[selected].raretes || {}).map((val, i) => (
                    <td key={i}>{val}</td>
                    ))}
                </tr>
                </tbody>
            </table>
            {images[selected].imagesSet && images[selected].imagesSet.length > 0 ? (
                <div className="set-images">
                {images[selected].imagesSet.map((src, i) => (
                    <img
                    key={i}
                    src={src}
                    alt={`Set ${images[selected].titre} - ${i + 1}`}
                    />
                ))}
                </div>
            ) : (
                <div style={{ margin: '2em 0', color: '#888', fontStyle: 'italic' }}>
                Pas d'image pour ce set.
                </div>
            )}
            </div>
        )}
        </div>
    </>
  );
}