// TuileImages.js (exemple de composant React)
// Place ce fichier dans src/components/TuileImages.js

import React, { useState, useRef } from 'react';
import '../10_GoddessStory/GoddessStory.css'; // Crée ce fichier CSS à côté

const images = [
  {
    src: '/img-waifu/GenkiParade.png',
    titre: 'Genki Parade',
    details: [
        'Cartes par boîte : 21',
        'Cartes dans le set : 226',
        'Nb cartes par sachet : 10',
        'Nb sachets par boîte : 2',
        'Rareté : PT, SSR, QR, ZR, GP, SP, SSP, GSP, MSP, LSP, ESP, XP, SXP, SSS, EXP',
        'Editeur : Anime Feast',
        'Année : ?'
    ],
    raretes: {N: 72, R: 48, PT: 18, Bifold: 6, UR: 8, SR: 24, SP: 20, PX: 8, MR: 18, GS: 6, XP: 6, WS: 10, SSS: 20, Wedding: 24, Spose: 14, GP: 6, ESR: 8, Proxy: 8, Metal: 6, UTR: 8, LXP: 6, EX: 12},
    imagesSet: [
      '/img-long-waifu/GenkiParade_promo1.png',
      '/img-long-waifu/GenkiParade_promo3.png',
      '/img-long-waifu/GenkiParade_promo2.png',
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