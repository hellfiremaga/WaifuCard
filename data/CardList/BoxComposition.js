import styles from './WaifuSet.module.css';

function BoxComposition({ composition }) {
  if (!composition) return null;

  const getVariants = (variants) =>
    Array.isArray(variants) ? variants : [variants];

  const formatChance = (chance) =>
    `${(chance * 100).toFixed(1)}%`;

  return (
    <section className={styles.composition}>
      <h2>Structure de la boîte</h2>

      {/* CASE */}
      <div className={styles.case}>
        <div className={styles.header}>
          <strong>Case</strong>
          <span>{composition.case.boxes} boîtes</span>
        </div>

        {/* BOX */}
        <div className={styles.box}>
          <div className={styles.header}>
            <strong>Box</strong>
            <span>{composition.box.packs} packs</span>
          </div>

          {/* PACK */}
          <div className={styles.pack}>
            <div className={styles.header}>
              <strong>Pack</strong>
              <span>{composition.box.cardsPerPack} cartes</span>
            </div>

            {/* EMPLACEMENTS */}
            <div className={styles.slots}>
              {composition.slots.map((slot) => {
                const variants = getVariants(slot.variants);

                return (
                  <div className={styles.slot} key={slot.position}>
                    <div className={styles.slotNumber}>
                      {slot.position}
                    </div>

                  {variants.map((variant, index) => (
                    <div className={styles.variant} key={index}>
                      <div className={styles.rarityList}>
                        {variant.rarities.map((rarity) => (
                          <div className={styles.rarity} key={rarity.rarity}>
                            <strong>{rarity.rarity}</strong>

                            {rarity.chance !== undefined && (
                              <span>{rarity.chance}</span>
                            )}
                          </div>
                        ))}
                      </div>

                      {variant.packs !== undefined && (
                        <div className={styles.packCount}>
                          {variant.packs} packs
                        </div>
                      )}

                      {index < variants.length - 1 && (
                        <div className={styles.or}>OU</div>
                      )}
                    </div>
                  ))}
                  </div>
                );
              })}
            </div>
            
            {/* BOOSTERS SUPPLÉMENTAIRES */}
            {composition.extraPacks?.length > 0 && (
              <div className={styles.extraPacks}>
                {composition.extraPacks.map((bonus, index) => (
                  <div className={styles.extraPack} key={index}>
                    <strong className={styles.extraPackQuantity}>
                      +{bonus.quantity}
                    </strong>

                    <div className={styles.extraPackRarities}>
                      {bonus.rarities.map((rarity, rarityIndex) => (
                        <div
                          className={styles.extraPackRarity}
                          key={rarityIndex}
                        >
                          <strong>{rarity.rarity}</strong>

                          {rarity.chance != null && (
                            <span>{rarity.chance}</span>
                          )}
                        </div>
                      ))}
                    </div>

                    {bonus.pack != null && (
                      <span className={styles.extraPackInfo}>
                        Booster n°{bonus.pack}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>
      </div>

      {/* NOTES */}
      {composition.notes?.length > 0 && (
        <div className={styles.notes}>
          {composition.notes.map((note, index) => (
            <p key={index}>{note}</p>
          ))}
        </div>
      )}

      {/* REPRINTS */}
      {composition.reprints?.length > 0 && (
        <div className={styles.reprints}>
          <h3>Réimpressions</h3>

          {composition.reprints.map((reprint, index) => (
            <p key={index}>
              <strong>{reprint.set}</strong> · {reprint.rarity}
              {' · '}
              {reprint.numbers === 'all'
                ? 'Toutes les cartes'
                : reprint.numbers}
              {' · '}
              {reprint.count} exemplaires
            </p>
          ))}
        </div>
      )}
    </section>
  );
}

export default BoxComposition;
