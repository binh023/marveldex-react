import { calculateOverall } from "../utils/heroUtils.js";

const statLabels = {
    intelligence: "Inteligência",
    strength: "Força",
    speed: "Velocidade",
    durability: "Durabilidade",
    power: "Poder",
    combat: "Combate",
}

function calcularOverall(powerstats) {
    const values = Object.values(powerstats).map((value) => {
        return Number(value) || 0;
    });

    const total = values.reduce((sum, value) => {
        return sum + value;
    }, 0);

    return Math.round(total / values.length);
}

function BattleHeroCard({ title, hero, onSelect }) {
    if (!hero) {
        return (
            <button
                type="button"
                className="battle-card battle-card-empty"
                onClick={onSelect}
            >
                <span className="battle-card-plus">+</span>

                <strong>{title}</strong>

                <span>Clique para selecionar</span>
            </button>
        );
    }

    const overall = calcularOverall(hero.powerstats);

    return (
        <article className="battle-card battle-card-selected">
            <img
                src={hero.images.md}
                alt={hero.name}
                className="battle-card-image"
            />

            <div className="battle-card-content">
                <span>{title}</span>

                <h2>{hero.name}</h2>

                <div className="battle-overall">
                    <strong>Overall: {overall}</strong>
                    <span>Overall</span>
                </div>

                <div className="battle-stats">
                    {Object.entries(hero.powerstats).map(
                        ([statName, statValue]) => (
                            <div className="battle-stat" key={statName}>
                                <span>
                                    {statLabels[statName] || statName}
                                </span>

                                <strong>{Number(statValue) || 0}</strong>
                            </div>
                        )
                    )}
                </div>

                <button
                    type="button"
                    className="battle-change-button"
                    onClick={onSelect}
                >
                    Trocar herói
                </button>
            </div>
        </article>
    );
}

export default BattleHeroCard;