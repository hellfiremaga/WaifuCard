// TuileImages.js (exemple de composant React)
// Place ce fichier dans src/components/TuileImages.js

import React, { useState, useRef } from 'react';
import './GoddessStory.css'; // Crée ce fichier CSS à côté

const images = [
  {
    src: '/WaifuCard/img-waifu/NS-2M01-300x300.webp',
    titre: 'NS-2M01',
    details: [
        'Cartes par boîte : 180',
        'Cartes dans le set : 189',
        'Nb cartes par sachet : 6',
        'Nb sachets par boîte : 30',
        'Rareté : R, SR, SSR, PTR',
        'Année : 09/2020'
    ],
    raretes: {PTR: 9, SSR: 27, SR: 45, R: 99},
    imagesSet: [],
  },
  {
    src: '/WaifuCard/img-waifu/NS-2M02-300x300.webp',
    titre: 'NS-2M02',
    details: [
        'Cartes par boîte : 180',
        'Cartes dans le set : 198',
        'Nb cartes par sachet : 6',
        'Nb sachets par boîte : 30',
        'Rareté : R, SR, SSR, PTR, PR',
        'Année : 03/2021'
    ],
    raretes: {PR: 18, PTR: 9, SSR: 27, SR: 45, R: 99},
    imagesSet: [],
  },
  {
    src: '/WaifuCard/img-waifu/NS-2M03-300x300.webp',
    titre: 'NS-2M03',
    details: [
        'Cartes par boîte : 180',
        'Cartes dans le set : 90',
        'Nb cartes par sachet : 6',
        'Nb sachets par boîte : 30',
        'Rareté : R, SR, SSR, PTR, PR',
        'Année : 06/2021'
    ],
    raretes: {PR: 18, PTR: 9, SSR: 27, SR: 18, R: 18},
    imagesSet: [],
  },
  {
    src: '/WaifuCard/img-waifu/NS-2M04-300x300.webp',
    titre: 'NS-2M04',
    details: [
        'Cartes par boîte : 180',
        'Cartes dans le set : 84',
        'Nb cartes par sachet : 6',
        'Nb sachets par boîte : 30',
        'Rareté : R, SR, SSR, PTR, PR',
        'Année : 09/2021'
    ],
    raretes: {PR: 12, PTR: 9, SSR: 27, SR: 18, R: 18},
    imagesSet: [],
  },
  {
    src: '/WaifuCard/img-waifu/NS-2M05-300x300.webp',
    titre: 'NS-2M05',
    details: [
        'Cartes par boîte : 180',
        'Cartes dans le set : 90',
        'Nb cartes par sachet : 6',
        'Nb sachets par boîte : 30',
        'Rareté : R, SR, SSR, PTR, PR',
        'Année : 12/2021'
    ],
    raretes: {PR: 18, PTR: 9, SSR: 27, SR: 18, R: 18},
    imagesSet: [],
  },
  {
    src: '/WaifuCard/img-waifu/NS-2M06-300x300.webp',
    titre: 'NS-2M06',
    details: [
        'Cartes par boîte : 180',
        'Cartes dans le set : 84',
        'Nb cartes par sachet : 6',
        'Nb sachets par boîte : 30',
        'Rareté : R, SR, SSR, PTR, PR',
        'Année : 04/2022'
    ],
    raretes: {PR: 12, PTR: 9, SSR: 27, SR: 18, R: 18},
    imagesSet: [],
  },
  {
    src: '/WaifuCard/img-waifu/NS-2M07-300x300.webp',
    titre: 'NS-2M07',
    details: [
        'Cartes par boîte : 180',
        'Cartes dans le set : 84',
        'Nb cartes par sachet : 6',
        'Nb sachets par boîte : 30',
        'Rareté : R, SR, SSR, PTR, PR',
        'Année : 05/2022'
    ],
    raretes: {PR: 12, PTR: 9, SSR: 27, SR: 18, R: 18},
    imagesSet: [],
  },
  {
    src: '/WaifuCard/img-waifu/NS-2M08-300x300.webp',
    titre: 'NS-2M08',
    details: [
        'Cartes par boîte : 180',
        'Cartes dans le set : 84',
        'Nb cartes par sachet : 6',
        'Nb sachets par boîte : 30',
        'Rareté : R, SR, SSR, PTR, PR',
        'Année : 02/2023'
    ],
    raretes: {PR: 12, PTR: 9, SSR: 27, SR: 18, R: 18},
    imagesSet: [
      '/WaifuCard/img-long-waifu/NS-2M08_promo.avif',
      '/WaifuCard/img-long-waifu/NS-2M08_short.png'
    ],
  },
  {
    src: '/WaifuCard/img-waifu/NS-2M09-300x300.webp',
    titre: 'NS-2M09',
    details: [
        'Cartes par boîte : 180',
        'Cartes dans le set : 132',
        'Nb cartes par sachet : 6',
        'Nb sachets par boîte : 30',
        'Rareté : R, CR, SR, SCR, SSR, PTR, SER, UR, PR',
        'Année : 06/2023'
    ],
    raretes: {PR: 12, UR: 6,SER: 6, PTR: 9, SSR: 27, SCR: 18, SR: 18, CR: 18, R: 18},
    imagesSet: [
      '/WaifuCard/img-long-waifu/NS-2M09_promo.png',
    ],
  },
  {
    src: '/WaifuCard/img-waifu/NS-2M10-300x300.webp',
    titre: 'NS-2M10',
    details: [
        'Cartes par boîte : 180',
        'Cartes dans le set : 132',
        'Nb cartes par sachet : 6',
        'Nb sachets par boîte : 30',
        'Rareté : R, CR, SR, SCR, SSR, PTR, SER, UR, PR',
        'Année : 09/2023'
    ],
    raretes: {PR: 12, UR: 6,SER: 6, PTR: 9, SSR: 27, SCR: 18, SR: 18, CR: 18, R: 18},
    imagesSet: [
      '/WaifuCard/img-long-waifu/NS-2M10_full.jpg',
    ],
  },
  {
    src: '/WaifuCard/img-waifu/NS-2M11.png',
    titre: 'NS-2M11',
    details: [
        'Cartes par boîte : 180',
        'Cartes dans le set : 138',
        'Nb cartes par sachet : 6',
        'Nb sachets par boîte : 30',
        'Rareté : R, CR, SR, SCR, SSR, PTR, SER, UR, MSR, PR',
        'Année : 12/2023'
    ],
    raretes: {PR: 12, MSR: 6, UR: 6, SER: 6, PTR: 9, SSR: 27, SCR: 18, SR: 18, CR: 18, R: 18},
    imagesSet: [
      '/WaifuCard/img-long-waifu/NS-2M11_full.jpg',
    ],
  },
  {
    src: '/WaifuCard/img-waifu/NS-2M12.png',
    titre: 'NS-2M12',
    details: [
        'Cartes par boîte : 180',
        'Cartes dans le set : 138',
        'Nb cartes par sachet : 6',
        'Nb sachets par boîte : 30',
        'Rareté : R, CR, SR, SCR, SSR, PTR, SER, UR, MSR, PR',
        'Année : 03/2024'
    ],
    raretes: {PR: 12, MSR: 6, UR: 6, SER: 6, PTR: 9, SSR: 27, SCR: 18, SR: 18, CR: 18, R: 18},
    imagesSet: [
      '/WaifuCard/img-long-waifu/NS-2M12_full.png',
    ],
  },
  {
    src: '/WaifuCard/img-waifu/NS-2M13.png',
    titre: 'NS-2M13',
    details: [
        'Cartes par boîte : 180',
        'Cartes dans le set : 148',
        'Nb cartes par sachet : 6',
        'Nb sachets par boîte : 30',
        'Rareté : R, CR, SR, SCR, SSR, PTR, SER, UR, MSR, PR',
        'Année : 10/2024'
    ],
    raretes: {PR: 22, MSR: 6, UR: 6, SER: 6, PTR: 9, SSR: 27, SCR: 18, SR: 18, CR: 18, R: 18},
    imagesSet: [
      '/WaifuCard/img-long-waifu/NS-2M13_promo.avif',
      '/WaifuCard/img-long-waifu/NS-2M13_full.avif',
    ],
  },
  {
    src: '/WaifuCard/img-waifu/NS-2M14.png',
    titre: 'NS-2M14',
    details: [
        'Cartes par boîte : 180',
        'Cartes dans le set : 148',
        'Nb cartes par sachet : 6',
        'Nb sachets par boîte : 30',
        'Rareté : R, CR, SR, SCR, SSR, PTR, SER, UR, MSR, PR',
        'Année : 10/2024'
    ],
    raretes: {PR: 22, MSR: 6, UR: 6, SER: 6, PTR: 9, SSR: 27, SCR: 18, SR: 18, CR: 18, R: 18},
    imagesSet: [
      '/WaifuCard/img-long-waifu/NS-2M14_promo.jpg',
      '/WaifuCard/img-long-waifu/NS-2M14_full.jpg',
      '/WaifuCard/img-long-waifu/NS-2M14_short.jpg',
    ],
  },
  {
    src: '/WaifuCard/img-waifu/NS-2M16.png',
    titre: 'NS-2M16',
    details: [
        'Cartes par boîte : 180',
        'Cartes dans le set : 148',
        'Nb cartes par sachet : 6',
        'Nb sachets par boîte : 30',
        'Rareté : R, CR, SR, SCR, SSR, PTR, SER, UR, MSR, PR',
        'Année : 10/2026'
    ],
    raretes: {PR: 18, MSR: 6, UR: 6, SER: 6, PTR: 9, SSR: 27, SCR: 18, SR: 18, CR: 18, R: 18},
    imagesSet: [
      '/WaifuCard/img-long-waifu/NS-2M16_full.jpg',
      '/WaifuCard/img-long-waifu/NS-2M16_small.jpg',
      '/img-bonus/NS-2M16_boxPres.jpg',
    ],
  },
  {
    src: '/WaifuCard/img-waifu/NS-2M17.png',
    titre: 'NS-2M17',
    details: [
        'Cartes par boîte : 180',
        'Cartes dans le set : 148',
        'Nb cartes par sachet : 6',
        'Nb sachets par boîte : 30',
        'Rareté : R, CR, SR, SCR, SSR, PTR, SER, UR, MSR, PR',
        'Année : 10/2026'
    ],
    raretes: {PR: 18, MSR: 6, UR: 6, SER: 6, PTR: 9, SSR: 27, SCR: 18, SR: 18, CR: 18, R: 18},
    imagesSet: [
      '/WaifuCard/img-long-waifu/NS-2M17_full.png',
      '/WaifuCard/img-long-waifu/NS-2M17_small.png',
      '/img-bonus/NS-2M17_boxPres.jpg',
      '/img-bonus/NS-2M17_summary.jpg',
      '/img-bonus/NS-2M17_summary2.jpg',
    ],
  },
];

export default function DeuxY() {
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