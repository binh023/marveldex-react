import { useState } from "react";

import BattleHeroCard from "../components/BattleHeroCard";
import HeroSelector from "../components/HeroSelector";

function Battle() {
    const [heroOne, setHeroOne] = useState(null);
    const [heroTwo, setHeroTwo] = useState(null);

    const [showSelector, setShowSelector] = useState(false);
    const [currentPlayer, setCurrentPlayer] = useState(null);

    function selectHeroOne() {
        setCurrentPlayer(1);
        setShowSelector(true);
    }

    function selectHeroTwo() {
        setCurrentPlayer(2);
        setShowSelector(true);
    }

    function closeSelector() {
        setShowSelector(false);
        setCurrentPlayer(null);
    }

    function chooseHero(hero) {
        if (currentPlayer === 1) {
            setHeroOne(hero);
        }

        if (currentPlayer === 2) {
            setHeroTwo(hero);
        }
    }

    const excludedHeroId =
        currentPlayer === 1
            ? heroTwo?.id
            : heroOne?.id;

    return (
        <main className="pagina battle-page">
            <header className="battle-header">
                <span className="home-etiqueta">
                    Comparação de personagens
                </span>

                <h1>Combate de Heróis</h1>

                <p>
                    Selecione dois personagens para comparar seus atributos
                    e descobrir qual possui o maior overall.
                </p>
            </header>

            <section className="battle-arena">
                <BattleHeroCard
                    title="Herói 1"
                    hero={heroOne}
                    onSelect={selectHeroOne}
                />

                <div className="battle-versus">
                    VS
                </div>

                <BattleHeroCard
                    title="Herói 2"
                    hero={heroTwo}
                    onSelect={selectHeroTwo}
                />
            </section>

            <HeroSelector
                visible={showSelector}
                onClose={closeSelector}
                onSelect={chooseHero}
                excludedHeroId={excludedHeroId}
            />
        </main>
    );
}

export default Battle;