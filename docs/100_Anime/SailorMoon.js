// TuileImages.js (exemple de composant React)
// Place ce fichier dans src/components/TuileImages.js

import React, { useState, useRef } from 'react';
import '../10_GoddessStory/GoddessStory.css'; // Crée ce fichier CSS à côté

const images = [
  {
    src: '/WaifuCard/img-waifu/EternalSailorMoon.png',
    titre: 'Pretty Guardian Sailor Moon',
    details: [
        'Cartes par boîte : 21',
        'Cartes dans le set : 226',
        'Nb cartes par sachet : 10',
        'Nb sachets par boîte : 2',
        'Rareté : PT, SSR, QR, ZR, GP, SP, SSP, GSP, MSP, LSP, ESP, XP, SXP, SSS, EXP',
        'Editeur : MQ Manuscrit',
        'Année : ?'
    ],
    raretes: {PT: 18, SSR: 36, QR: 18, ZR: 18, GP: 18, SP: 18, SSP: 18, GSP: 9, MSP: 12, LSP: 12, ESP: 18, XP: 12, SXP: 10, SSS: 6, EXP: 3},
    imagesSet: [
      '/WaifuCard/img-long-waifu/EternalSailorMoonLong1.png',
      '/WaifuCard/img-long-waifu/EternalSailorMoonLong2.png',
      '/WaifuCard/img-long-waifu/EternalSailorMoonLong3.png',
      '/WaifuCard/img-long-waifu/EternalSailorMoonLong4.png',
      '/WaifuCard/img-long-waifu/EternalSailorMoonLong5.png',
      '/WaifuCard/img-long-waifu/EternalSailorMoonLong6.png',
      '/WaifuCard/img-long-waifu/EternalSailorMoonLong7.png',
      '/WaifuCard/img-long-waifu/EternalSailorMoonLong8.png',
      '/WaifuCard/img-long-waifu/EternalSailorMoonLong9.png',
      '/WaifuCard/img-long-waifu/EternalSailorMoonLong10.png',
      '/WaifuCard/img-long-waifu/EternalSailorMoonLong11.png',
      '/WaifuCard/img-long-waifu/EternalSailorMoonLong12.png',
      '/WaifuCard/img-long-waifu/EternalSailorMoonLong13.png',
      '/WaifuCard/img-long-waifu/EternalSailorMoonLong14.png',
      '/WaifuCard/img-long-waifu/EternalSailorMoonLong15.png',
      '/WaifuCard/img-long-waifu/EternalSailorMoonLong16.png',
      '/WaifuCard/img-long-waifu/EternalSailorMoonLong17.png',
      '/WaifuCard/img-long-waifu/EternalSailorMoonLong18.png',
      '/WaifuCard/img-long-waifu/EternalSailorMoonLong19.png',
      '/WaifuCard/img-long-waifu/EternalSailorMoonLong20.png',
      '/WaifuCard/img-long-waifu/EternalSailorMoonLong21.png',
      '/WaifuCard/img-long-waifu/EternalSailorMoonLong22.png',
      '/WaifuCard/img-long-waifu/EternalSailorMoonLong23.png',
      '/WaifuCard/img-long-waifu/EternalSailorMoonLong24.png',
      '/WaifuCard/img-long-waifu/EternalSailorMoonLong25.png',
      '/WaifuCard/img-long-waifu/EternalSailorMoonLong26.png',
      '/WaifuCard/img-long-waifu/EternalSailorMoonLong27.png',
      '/WaifuCard/img-long-waifu/EternalSailorMoonLong28.png',
      '/WaifuCard/img-long-waifu/EternalSailorMoonLong29.png',
      '/WaifuCard/img-long-waifu/EternalSailorMoonLong30.png',
    ],
  },
  {
    src: '/WaifuCard/img-waifu/SailorMoonCristalEternel.png',
    titre: 'Pretty Guardian Sailor Moon',
    details: [
        'Cartes par boîte : 18',
        'Cartes dans le set : 246',
        'Nb cartes par sachet : 5',
        'Nb sachets par boîte : 90',
        'Rareté : R, SR, SSR, HR, TV, LR, HTR, ZR, CR, GR, UR, QR, CP, MOR, KSP, Laser, SSP',
        'Editeur : First Club Card',
        'Année : ?'
    ],
    raretes: {R:64, SR: 32, SSR: 12, HR: 10, TV: 9, LR: 9, HTR: 9, ZR: 9, CR: 10, GR: 10, UR: 11, QR: 8, CP: 10, MOR: 11, KSP: 11, Laser: 11, SSP: 10},
    //COSR: 22, FUGR: 22, HXZR: 20, SR1: 9+, SR2 :11+, SR3: 10+ 
    imagesSet: [
      '/WaifuCard/img-long-waifu/SailorMoonCristalEternelShort.png',
      '/WaifuCard/img-long-waifu/SailorMoonCristalEternelLong1.png',
      '/WaifuCard/img-long-waifu/SailorMoonCristalEternelLong2.png',
      '/WaifuCard/img-long-waifu/SailorMoonCristalEternelLong3.png',
      '/WaifuCard/img-long-waifu/SailorMoonCristalEternelLong4.png',
      '/WaifuCard/img-long-waifu/SailorMoonCristalEternelLong5.png',
      '/WaifuCard/img-long-waifu/SailorMoonCristalEternelLong6.png',
      '/WaifuCard/img-long-waifu/SailorMoonCristalEternelLong7.png',
      '/WaifuCard/img-long-waifu/SailorMoonCristalEternelLong8.png',
      '/WaifuCard/img-long-waifu/SailorMoonCristalEternelLong9.png',
      '/WaifuCard/img-long-waifu/SailorMoonCristalEternelLong10.png',
      '/WaifuCard/img-long-waifu/SailorMoonCristalEternelLong11.png',
      '/WaifuCard/img-long-waifu/SailorMoonCristalEternelLong12.png',
      '/WaifuCard/img-long-waifu/SailorMoonCristalEternelLong13.png',
      '/WaifuCard/img-long-waifu/SailorMoonCristalEternelLong14.png',
      '/WaifuCard/img-long-waifu/SailorMoonCristalEternelLong15.png',
      '/WaifuCard/img-long-waifu/SailorMoonCristalEternelLong16.png',
      '/WaifuCard/img-long-waifu/SailorMoonCristalEternelLong17.png',
    ],
  },
  {
    src: '/WaifuCard/img-waifu/SailorMoonLunaFable.png',
    titre: 'Luna Fable',
    details: [
        'Cartes par boîte : 25',
        'Cartes dans le set : 261?',
        'Nb cartes par sachet : 2',
        'Nb sachets par boîte : 13',
        'Rareté : SH, ZX, XG, MR, MF, XPL, LF, GX, SR, HQ, GD, GF, FXG, HS, SHR, GS, FG, SDR, UGR, XQ, BX, FL, SXZ',
        'Editeur : ?',
        'Année : ?'
    ],
    raretes: {SH:18,ZX:18,XG:18,MR:18,MF:18,XPL:18,LF:9,GX:9,SR:9,HQ:9,GD:9,GF:9,FXG:9,HS:9,SHR:9,GS:9,FG:9,SDR:9,UGR:9,XQ:9,BX:9,FL:9,SXZ:9},
    imagesSet: [
      '/WaifuCard/img-long-waifu/SailorMoonLunaFable_1.avif',
      '/WaifuCard/img-long-waifu/SailorMoonLunaFable_2.avif',
      '/WaifuCard/img-long-waifu/SailorMoonLunaFable_3SXZ.avif',
      '/WaifuCard/img-long-waifu/SailorMoonLunaFable_4FL.avif',
      '/WaifuCard/img-long-waifu/SailorMoonLunaFable_5BX.avif',
      '/WaifuCard/img-long-waifu/SailorMoonLunaFable_6XQ.avif',
      '/WaifuCard/img-long-waifu/SailorMoonLunaFable_7UGR.avif',
      '/WaifuCard/img-long-waifu/SailorMoonLunaFable_8SDR.avif',
      '/WaifuCard/img-long-waifu/SailorMoonLunaFable_9FG.avif',
      '/WaifuCard/img-long-waifu/SailorMoonLunaFable_10GS.avif',
      '/WaifuCard/img-long-waifu/SailorMoonLunaFable_11SHR.avif',
      '/WaifuCard/img-long-waifu/SailorMoonLunaFable_12HS.avif',
      '/WaifuCard/img-long-waifu/SailorMoonLunaFable_13FXG.avif',
      '/WaifuCard/img-long-waifu/SailorMoonLunaFable_14GF.avif',
      '/WaifuCard/img-long-waifu/SailorMoonLunaFable_15GD.avif',
      '/WaifuCard/img-long-waifu/SailorMoonLunaFable_16HQ.avif',
      '/WaifuCard/img-long-waifu/SailorMoonLunaFable_17SR.avif',
      '/WaifuCard/img-long-waifu/SailorMoonLunaFable_18GX.avif',
      '/WaifuCard/img-long-waifu/SailorMoonLunaFable_19LF.avif',
      '/WaifuCard/img-long-waifu/SailorMoonLunaFable_20XPL.avif',
      '/WaifuCard/img-long-waifu/SailorMoonLunaFable_21MF.avif',
      '/WaifuCard/img-long-waifu/SailorMoonLunaFable_22MR.avif',
      '/WaifuCard/img-long-waifu/SailorMoonLunaFable_23XG.avif',
      '/WaifuCard/img-long-waifu/SailorMoonLunaFable_24ZX.avif',
      '/WaifuCard/img-long-waifu/SailorMoonLunaFable_25SH.avif',
      '/WaifuCard/img-long-waifu/SailorMoonLunaFable_26Gift.avif',
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