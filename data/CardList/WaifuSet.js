
import BoxComposition from './BoxComposition.js';
import styles from './WaifuSet.module.css';

export default function WaifuSet({ data }) {
  const allCards = data.rarities.flatMap(r => r.cards);

  const totalCards = allCards.length;
  const ownedCards = allCards.filter(c => c.owned).length;

  const globalProgress = totalCards
    ? (ownedCards / totalCards) * 100
    : 0;

  const getProgress = (cards) => {
    const owned = cards.filter(c => c.owned).length;

    return {
      owned,
      total: cards.length,
      percentage: cards.length
        ? (owned / cards.length) * 100
        : 0
    };
  };

  return (
    <div className={styles.catalogue}>
      {data.boxComposition && (
        <BoxComposition composition={data.boxComposition} />
      )}
      <hr/>
      {/* Progression globale */}
      <div className={styles.globalProgress}>
        <div className={styles.progressHeader}>
          <strong>Progression du set</strong>
          <span>{ownedCards} / {totalCards}</span>
        </div>

        <div className={styles.progressBar}>
          <div
            className={styles.progressOwned}
            style={{ width: `${globalProgress}%` }}
          />
        </div>

        <div className={styles.progressPercentage}>
          {globalProgress.toFixed(1)} %
        </div>
      </div>

      {/* Sections par rareté */}
      {[...data.rarities]
        .sort((a, b) => {
            const order = data.rarityOrder || [];
            const indexA = order.indexOf(a.name);
            const indexB = order.indexOf(b.name);

            // Les raretés non spécifiées arrivent à la fin
            return (indexA === -1 ? Infinity : indexA) -
                (indexB === -1 ? Infinity : indexB);
        })
        .map((rarity) => {
        const progress = getProgress(rarity.cards);

        return (
          <section
            className={styles.raritySection}
            key={rarity.name}
          >
            <h2>{rarity.name}</h2>

            {/* Progression de la rareté */}
            <div className={styles.rarityProgress}>
              <div className={styles.progressHeader}>
                <span>
                  {progress.owned} / {progress.total} possédées
                </span>
                <span>
                  {progress.percentage.toFixed(1)} %
                </span>
              </div>

              <div className={styles.progressBar}>
                <div
                  className={styles.progressOwned}
                  style={{
                    width: `${progress.percentage}%`
                  }}
                />
              </div>
            </div>

            {/* Galerie de cartes */}
            <div className={styles.cardGrid}>
              {rarity.cards.map((card) => {
                const code = `${rarity.name}-${card.id}`;
                const image = `/WaifuCard/CardList/${data.id}/${code}.webp`;

                return (
                  <div
                    className={styles.card}
                    key={code}
                  >
                    <img
                      src={image}
                      alt={code}
                      loading="lazy"
                    />

                    <div className={styles.cardCode}>
                      {code}
                    </div>

                    <div
                      className={
                        card.owned
                          ? styles.owned
                          : styles.missing
                      }
                    >
                      {card.owned
                        ? 'Possédée'
                        : 'Manquante'}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
