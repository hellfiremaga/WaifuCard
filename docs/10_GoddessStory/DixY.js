// TuileImages.js (exemple de composant React)
// Place ce fichier dans src/components/TuileImages.js

import React, { useState, useRef } from 'react';
import './GoddessStory.css'; // Crée ce fichier CSS à côté

const images = [
  {
    src: '/WaifuCard/img-waifu/NS-10M01.png',
    titre: 'NS-10M01',
    details: [
        'Cartes par boîte : 108',
        'Cartes dans le set : 162',
        'Nb cartes par sachet : 6',
        'Nb sachets par boîte : 18',
        'Rareté : SR, SSR, FR, MR, NTR, SP, PR',
        'Année : 08/2021'
    ],
    raretes: {PR: 18, SP: 9, NTR: 9, MR: 18, FR: 36, SSR: 36, SR: 36},
    imagesSet: [
        "/WaifuCard/img-long-waifu/NS-10M01_box.png"
    ],
  },
  {
    src: '/WaifuCard/img-waifu/NS-10M02.png',
    titre: 'NS-10M02',
    details: [
        'Cartes par boîte : 108',
        'Cartes dans le set : 171',
        'Nb cartes par sachet : 6',
        'Nb sachets par boîte : 18',
        'Rareté : SR, SSR, FR, MR, BGL, SP, BW, PR',
        'Année : 08/2021'
    ],
    raretes: {PR: 18, BW: 9, SP: 9, BGL: 9, MR: 18, FR: 36, SSR: 36, SR: 36},
    imagesSet: [
    ],
  },
  {
    src: '/WaifuCard/img-waifu/NS-10M03.png',
    titre: 'NS-10M03',
    details: [
        'Cartes par boîte : 60',
        'Cartes dans le set : 198',
        'Nb cartes par sachet : 4',
        'Nb sachets par boîte : 15',
        'Rareté : SR, SSR, FR, MR, DSR, SP, BW, PR',
        'Année : 08/2021'
    ],
    raretes: {PR: 18, BW: 9, SP: 9, DSR: 9, MR: 18, FR: '36 x 2', SSR: 27, SR: 36},
    imagesSet: [
    ],
  },
  {
    src: '/WaifuCard/img-waifu/NS-10M04.png',
    titre: 'NS-10M04',
    details: [
        'Cartes par boîte : 108',
        'Cartes dans le set : 175',
        'Nb cartes par sachet : 6',
        'Nb sachets par boîte : 18',
        'Rareté : SR, SSR, FR, MR, DSR, SP, BW, PR',
        'Année : 08/2021'
    ],
    raretes: {PR: 13, BW: 9, LP: 9, MR: 9, NNS: 9, SP: 9, CP: 18, FR: '18 x 2', SSR: 27, SR: 36},
    imagesSet: [
      '/WaifuCard/img-long-waifu/NS-10M04online_promo1.avif',
      '/WaifuCard/img-long-waifu/NS-10M04online_promo2.avif',
    ],
  },
  {
    src: '/WaifuCard/img-waifu/NS-10M04web.png',
    titre: 'NS-10M04 (online)',
    details: [
        'Cartes par boîte : 60',
        'Cartes dans le set : 175',
        'Nb cartes par sachet : 4',
        'Nb sachets par boîte : 15',
        'Rareté : SR, SSR, FR, MR, DSR, SP, BW, PR',
        'Année : 08/2021'
    ],
    raretes: {PR: 13, BW: 9, LP: 9, MR: 9, NNS: 9, SP: 9, CP: 18, FR: '18 x 2', SSR: 27, SR: 36},
    imagesSet: [
      '/WaifuCard/img-long-waifu/NS-10M04online_promo1.avif',
      '/WaifuCard/img-long-waifu/NS-10M04online_promo2.avif',
    ],
  },
  {
    src: '/WaifuCard/img-waifu/NS-10M05.png',
    titre: 'NS-10M05',
    details: [
        'Cartes par boîte : 108',
        'Cartes dans le set : 191',
        'Nb cartes par sachet : 6',
        'Nb sachets par boîte : 18',
        'Rareté : SR, SSR, FR, MR, DSR, SP, BW, PR',
        'Année : 08/2021'
    ],
    raretes: {PR: 24, QN: 5, BW: 9, GP: 9, LP: 9, MR: 9, SC: 9, SP: 9, SZR: 9, INS: 18, FR: 18, SSR: 27, SCR: 18, SR: 18},
    imagesSet: [
      '/WaifuCard/img-long-waifu/NS-10M05_promo.jpg',
      '/WaifuCard/img-long-waifu/NS-10M05_full.jpg',
    ],
  },
  {
    src: '/WaifuCard/img-waifu/NS-10M06.png',
    titre: 'NS-10M06',
    details: [
        'Cartes par boîte : 108',
        'Cartes dans le set : 249',
        'Nb cartes par sachet : 6',
        'Nb sachets par boîte : 18',
        'Rareté : SR, SSR, FR, MR, DSR, SP, BW, PR',
        'Année : 08/2021'
    ],
    raretes: {PR: 24, BHR: 9, BW: 9, COM: 9, LP: 9, MFR: 9, MR: 9, SC: 9, SCP: 9, SD: 9, SSD: 9, SFR: 9, SLP: 9, SP: 9, SWR: 9, FR: 18, TR: 18, SSR: 27, SCR: 18, SR: 18},
    imagesSet: [
      '/WaifuCard/img-long-waifu/NS-10M06_full.jpg',
    ],
  },
];

export default function DixY() {
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