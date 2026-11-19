// TuileImages.js (exemple de composant React)
// Place ce fichier dans src/components/TuileImages.js

import React, { useState, useRef } from 'react';
import '../10_GoddessStory/GoddessStory.css'; // Crée ce fichier CSS à côté

const images = [
  {
    src: '/WaifuCard/img-waifu/CardCaptorSakuraNouvelAn.png',
    titre: 'Card Captor Sakura Spécial nouvel an',
    details: [
        'Cartes par boîte : 51',
        'Cartes dans le set : 166',
        'Nb cartes par sachet : 5',
        'Nb sachets par boîte : 11',
        'Rareté : GP , CPcouple, CPami, QR, Dentelle, PR, MR, ZGR, ZR, Shake, HR, LGR, SP, SLR, DIY',
        'Editeur : Gather Card',
        'Année : ?'
    ],
    raretes: {GP : 9, CPcouple: 10, CPami: 9, QR: 10, Dentelle: 10, PR: 18, MR: 18, ZGR: 9, ZR: 18, Shake: 6, HR: 9, LGR: 9, SP: 10, SLR: 9, DIY: 12},
    imagesSet: [
      '/WaifuCard/img-long-waifu/CardCaptorSakuraNouvelAnShort.png',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraNouvelAnLong1.png',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraNouvelAnLong2.png',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraNouvelAnLong3.png',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraNouvelAnLong4.png',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraNouvelAnLong5.png',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraNouvelAnLong6.png',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraNouvelAnLong7.png',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraNouvelAnLong8.png',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraNouvelAnLong9.png',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraNouvelAnLong10.png',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraNouvelAnLong11.png',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraNouvelAnLong12.png',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraNouvelAnLong13.png',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraNouvelAnLong14.png',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraNouvelAnLong15.png',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraNouvelAnLong16.png',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraNouvelAnLong17.png',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraNouvelAnLong18.png',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraNouvelAnLong19.png',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraNouvelAnLong20.png',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraNouvelAnLong21.png',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraNouvelAnLong22.png',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraNouvelAnLong23.png',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraNouvelAnLong24.png',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraNouvelAnLong25.png',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraNouvelAnLong26.png',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraNouvelAnLong27.png',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraNouvelAnLong28.png',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraNouvelAnLong29.png',
    ],
  },
  {
    src: '/WaifuCard/img-waifu/CardCaptorSakuraJauneCaihong.png',
    titre: 'Card Captor Sakura (jaune)',
    details: [
        'Cartes par boîte : 22~26',
        'Cartes dans le set : 221',
        'Nb cartes par sachet : 2+1~3',
        'Nb sachets par boîte : 10+2',
        'Rareté : GR, BR, SSR, HR, KR, MR, LR, PR, QR',
        'Editeur : Gather Card',
        'Année : ?'
    ],
    raretes: {GR : 3, BR: 9, SSR: 6, HR: 6, KR: 9, MR: 6, LR: 12, PR: 6, QR: 24},
    imagesSet: [
      '/WaifuCard/img-long-waifu/CardCaptorSakuraCaihong0Long.avif',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraCaihong3Long.avif',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraCaihong4Long.avif',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraCaihong42Long.avif',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraCaihong5Long.avif',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraCaihong52Long.avif',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraCaihong6Long.avif',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraCaihong8Long.avif',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraCaihong11Long.avif',
    ],
  },
  {
    src: '/WaifuCard/img-waifu/CardCaptorSakuraBleueCaho.png',
    titre: 'Card Captor Sakura (Bleue)',
    details: [
        'Cartes par boîte : ?',
        'Cartes dans le set : ?',
        'Nb cartes par sachet : ?',
        'Nb sachets par boîte : ?',
        'Rareté : ?',
        'Editeur : Caho',
        'Année : ?'
    ],
    raretes: {R : 0},
    imagesSet: [
      '/WaifuCard/img-long-waifu/CardCaptorSakuraBleueCaho1.png',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraBleueCaho2.png',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraBleueCaho3.png',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraBleueCaho4.png',
    ],
  },
  {
    src: '/WaifuCard/img-waifu/CardCaptorSakuraRosePochette.png',
    titre: 'Card Captor Sakura (Pochette rose)',
    details: [
        'Cartes par boîte : 25',
        'Cartes dans le set : ?',
        'Nb cartes par sachet : 2',
        'Nb sachets par boîte : 25',
        'Rareté : SR, SP, MX, TM, SSP, MR, SU, UP, SSR, UT, QR, TS, FR, JR',
        'Editeur : ?',
        'Année : ?'
    ],
    raretes: {SR:6,SP:6,MX:15,TM:9,SSP:9,MR:9,SU:7,UP:13,SSR:9,UT:9,QR:14,TS:9,FR:8,JR:10},
    imagesSet: [
      '/WaifuCard/img-long-waifu/CardCaptorSakuraRosePochette1.avif',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraRosePochette2.avif',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraRosePochette3.avif',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraRosePochette4.avif',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraRosePochette5.avif',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraRosePochette6.avif',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraRosePochette7.avif',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraRosePochette8.avif',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraRosePochette9.avif',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraRosePochette10.avif',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraRosePochette11.avif',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraRosePochette12.avif',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraRosePochette13.avif',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraRosePochette14.avif',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraRosePochette15.avif',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraRosePochette16.avif',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraRosePochette17.avif',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraRosePochette18.avif',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraRosePochette19.avif',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraRosePochette20.avif',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraRosePochette21.avif',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraRosePochette22.avif',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraRosePochette23.avif',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraRosePochette24.avif',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraRosePochette25.avif',
      '/WaifuCard/img-long-waifu/CardCaptorSakuraRosePochette99.avif',
    ],
  }
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