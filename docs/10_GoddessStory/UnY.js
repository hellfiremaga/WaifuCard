// TuileImages.js (exemple de composant React)
// Place ce fichier dans src/components/TuileImages.js

import React, { useState, useRef } from 'react';
import './GoddessStory.css'; // Crée ce fichier CSS à côté

const images = [
  {
    src: '/WaifuCard/img-waifu/NS-01-300x300.webp',
    titre: 'NS-01',
    details: [
        'Cartes par boîte : 150',
        'Cartes dans le set : 154',
        'Nb cartes par sachet : 5',
        'Nb sachets par boîte : 30',
        'Rareté : R, SR, SSR',
        'Année : 07/2020'
    ],
    raretes: {SSR: 18, SR: 36, R: 100},
    imagesSet: [],
  },
  {
    src: '/WaifuCard/img-waifu/NS-02-300x300.webp',
    titre: 'NS-02',
    details: [
        'Cartes par boîte : 150',
        'Cartes dans le set : 126',
        'Nb cartes par sachet : 5',
        'Nb sachets par boîte : 30',
        'Rareté : R, SR, SSR',
        'Année : 03/2021'
    ],
    raretes: {SSR: 18, SR: 36, R: 72},
    imagesSet: [],
  },
  {
    src: '/WaifuCard/img-waifu/NS-03-300x300.webp',
    titre: 'NS-03',
    details: [
        'Cartes par boîte : 150',
        'Cartes dans le set : 72',
        'Nb cartes par sachet : 5',
        'Nb sachets par boîte : 30',
        'Rareté : R, SR, SSR',
        'Année : 06/2021'
    ],
    raretes: {SSR: 18, SR: 36, R: 18},
    imagesSet: [],
  },
  {
    src: '/WaifuCard/img-waifu/NS-04-300x300.webp',
    titre: 'NS-04',
    details: [
        'Cartes par boîte : 150',
        'Cartes dans le set : 72',
        'Nb cartes par sachet : 5',
        'Nb sachets par boîte : 30',
        'Rareté : R, SR, SSR',
        'Année : 09/2021'
    ],
    raretes: {SSR: 18, SR: 36, R: 18},
    imagesSet: [],
  },
  {
    src: '/WaifuCard/img-waifu/NS-05-300x300.webp',
    titre: 'NS-05',
    details: [
        'Cartes par boîte : 150',
        'Cartes dans le set : 72',
        'Nb cartes par sachet : 5',
        'Nb sachets par boîte : 30',
        'Rareté : R, SR, SSR',
        'Année : 12/2021'
    ],
    raretes: {SSR: 18, SR: 36, R: 18},
    imagesSet: [],
  },
  {
    src: '/WaifuCard/img-waifu/NS-06-300x300.webp',
    titre: 'NS-06',
    details: [
        'Cartes par boîte : 150',
        'Cartes dans le set : 72',
        'Nb cartes par sachet : 5',
        'Nb sachets par boîte : 30',
        'Rareté : R, SR, SSR',
        'Année : 04/2022'
    ],
    raretes: {SSR: 18, SR: 36, R: 18},
    imagesSet: [],
  },
  {
    src: '/WaifuCard/img-waifu/NS-07-300x300.webp',
    titre: 'NS-07',
    details: [
        'Cartes par boîte : 150',
        'Cartes dans le set : 72',
        'Nb cartes par sachet : 5',
        'Nb sachets par boîte : 30',
        'Rareté : R, SR, SSR',
        'Année : 07/2022'
    ],
    raretes: {SSR: 18, SR: 36, R: 18},
    imagesSet: [
      '/WaifuCard/img-long-waifu/NS-07_promo.avif'
    ],
  },
  {
    src: '/WaifuCard/img-waifu/NS-08.png',
    titre: 'NS-08',
    details: [
        'Cartes par boîte : 150',
        'Cartes dans le set : 72',
        'Nb cartes par sachet : 5',
        'Nb sachets par boîte : 30',
        'Rareté : R, SR, SSR',
        'Année : 05/2023'
    ],
    raretes: {SER: 3, SSR: 18, SCR: 18, SR: 36, CR:18, R: 18},
    imagesSet: [
      '/WaifuCard/img-long-waifu/NS-08_promo.avif',
      '/WaifuCard/img-long-waifu/NS-08_short.png'
    ],
  },
  {
    src: '/WaifuCard/img-waifu/NS-09-300x300.webp',
    titre: 'NS-09',
    details: [
        'Cartes par boîte : 150',
        'Cartes dans le set : 111',
        'Nb cartes par sachet : 5',
        'Nb sachets par boîte : 30',
        'Rareté : R, CR, SR, SCR, SSR, SER',
        'Année : 05/2023'
    ],
    raretes: {SER: 3, SSR: 18, SCR: 18, SR: 36, CR:18, R: 18},
    imagesSet: [],
  },
  {
    src: '/WaifuCard/img-waifu/NS-10-300x300.webp',
    titre: 'NS-10',
    details: [
        'Cartes par boîte : 150',
        'Cartes dans le set : 111',
        'Nb cartes par sachet : 5',
        'Nb sachets par boîte : 30',
        'Rareté : R, CR, SR, SCR, SSR, SER',
        'Année : 08/2023'
    ],
    raretes: {SER: 3, SSR: 18, SCR: 18, SR: 36, CR:18, R: 18},
    imagesSet: [
      '/WaifuCard/img-long-waifu/NS-10_promo.avif'
    ],
  },
  {
    src: '/WaifuCard/img-waifu/NS-11-300x300.webp',
    titre: 'NS-11',
    details: [
        'Cartes par boîte : 150',
        'Cartes dans le set : 111',
        'Nb cartes par sachet : 5',
        'Nb sachets par boîte : 30',
        'Rareté : R, CR, SR, SCR, SSR, SER',
        'Année : 11/2023'
    ],
    raretes: {SER: 3, SSR: 18, SCR: 18, SR: 36, CR:18, R: 18},
    imagesSet: [],
  },
  {
    src: '/WaifuCard/img-waifu/NS-12-300x300.webp',
    titre: 'NS-12',
    details: [
        'Cartes par boîte : 150',
        'Cartes dans le set : 111',
        'Nb cartes par sachet : 5',
        'Nb sachets par boîte : 30',
        'Rareté : R, CR, SR, SCR, SSR, SER',
        'Année : 03/2024'
    ],
    raretes: {SER: 3, SSR: 18, SCR: 18, SR: 36, CR:18, R: 18},
    imagesSet: [
      '/WaifuCard/img-long-waifu/NS-12_full.png',
    ],
  },
  {
    src: '/WaifuCard/img-waifu/NS-13.png',
    titre: 'NS-13',
    details: [
        'Cartes par boîte : 150',
        'Cartes dans le set : 117',
        'Nb cartes par sachet : 5',
        'Nb sachets par boîte : 30',
        'Rareté : R, CR, SR, SCR, SSR, GR, SER',
        'Année : 10/2024'
    ],
    raretes: {SER: 3, GR:6, SSR: 18, SCR: 18, SR: 36, CR:18, R: 18},
    imagesSet: [
      '/WaifuCard/img-long-waifu/NS-13_promo.jpg',
      '/WaifuCard/img-long-waifu/NS-13_full.jpg',
      '/WaifuCard/img-long-waifu/NS-13_short.jpg',
    ],
  },
  {
    src: '/WaifuCard/img-waifu/NS-14.png',
    titre: 'NS-14',
    details: [
        'Cartes par boîte : 150',
        'Cartes dans le set : 117',
        'Nb cartes par sachet : 5',
        'Nb sachets par boîte : 30',
        'Rareté : R, CR, SR, SCR, SSR, GR, SER',
        'Année : 03/2025'
    ],
    raretes: {SER: 3, GR:6, SSR: 18, SCR: 18, SR: 36, CR:18, R: 18},
    imagesSet: [
      '/WaifuCard/img-long-waifu/NS-14_promo.jpg',
      '/WaifuCard/img-long-waifu/NS-14_full.jpg',
      '/WaifuCard/img-long-waifu/NS-14_small.jpg',
    ],
  },
  {
    src: '/WaifuCard/img-waifu/NS-16.png',
    titre: 'NS-16',
    details: [
        'Cartes par boîte : 150',
        'Cartes dans le set : 117',
        'Nb cartes par sachet : 5',
        'Nb sachets par boîte : 30',
        'Rareté : R, CR, SR, SCR, SSR, GR, SER',
        'Année : 10/2026'
    ],
    raretes: {SER: 3, GR:6, SSR: 18, SCR: 18, SR: 36, CR:18, R: 18},
    imagesSet: [
      '/WaifuCard/img-long-waifu/NS-16_full.png',
      '/WaifuCard/img-long-waifu/NS-16_small.jpg',
    ],
  },
  {
    src: '/WaifuCard/img-waifu/NS-17.png',
    titre: 'NS-17',
    details: [
        'Cartes par boîte : 150',
        'Cartes dans le set : 117',
        'Nb cartes par sachet : 5',
        'Nb sachets par boîte : 30',
        'Rareté : R, CR, SR, SCR, SSR, GR, SER',
        'Année : 10/2026'
    ],
    raretes: {SER: 3, GR:6, SSR: 18, SCR: 18, SR: 36, CR:18, R: 18},
    imagesSet: [
      '/WaifuCard/img-long-waifu/NS-17_full.jpg',
      '/WaifuCard/img-long-waifu/NS-17_small.jpg',
      '/img-bonus/NS-17_boxPres.jpg',
      '/img-bonus/NS-17_summary.jpg',
      '/img-bonus/NS-17_summary2.jpg',
    ],
  },
];

export default function UnY() {
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