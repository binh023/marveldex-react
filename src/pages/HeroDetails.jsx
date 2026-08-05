import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

import HeroStat from "../components/HeroStat";
import { getHeroById } from "../services/marvelApi";
import { calculateOverall } from "../utils/heroUtils.js";


const labels = {
    intelligence: "Inteligência",
    strength: "Força",
    speed: "Velocidade",
    durability: "Durabilidade",
    power: "Poder",
    combat: "Combate",
};


function HeroDetails() {
    const { id } = useParams();

    const [hero, setHero] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function loadHero() {
            try {
                setLoading(true);
                setError("");
                setHero(null);

                const data = await getHeroById(id);

                setHero(data);
            } catch (error) {
                console.error("Erro ao carregar herói:", error);

                setError("Não foi possível carregar o herói.");
            } finally {
                setLoading(false);
            }
        }

        loadHero();
    }, [id]);

    if (loading) {
        return (
            <main className="pagina">
                <h1>Detalhes do Herói</h1>
                <p>Carregando...</p>
            </main>
        );
    }

    if (error || !hero) {
        return (
            <main className="pagina">
                <h1>Detalhes do Herói</h1>

                <p>{error || "Herói não encontrado."}</p>

                <Link to="/heroes" className="btn-voltar">
                    ← Voltar para os Heróis
                </Link>
            </main>
        );
    }

    const fullName =
        hero.biography.fullName &&
        hero.biography.fullName !== "-"
            ? hero.biography.fullName
            : "Identidade desconhecida";

    const overall = calculateOverall(hero.powerstats);

    return (
        <main className="pagina hero-details">
            <section className="hero-info">
                <img
                    src={hero.images.lg}
                    alt={hero.name}
                    className="hero-detail-image"
                />

                <div className="hero-info-content">
                    <div className="hero-title-row">
                        <div>
                            <h1>{hero.name}</h1>
                            <h2>{fullName}</h2>
                        </div>

                        <div className="hero-overall">
                            <strong>{overall}</strong>
                            <span>Overall</span>
                        </div>
                    </div>

                    <p>
                        <strong>Editora:</strong>{" "}
                        {hero.biography.publisher || "Não informada"}
                    </p>

                    <p>
                        <strong>Primeira aparição:</strong>{" "}
                        {hero.biography.firstAppearance || "Não informada"}
                    </p>

                    <p>
                        <strong>Ocupação:</strong>{" "}
                        {hero.work.occupation || "Não informada"}
                    </p>
                </div>
            </section>

            <section className="hero-stats">
                <h2>Atributos</h2>

                {Object.entries(hero.powerstats).map(
                    ([statName, statValue]) => (
                        <HeroStat
                            key={statName}
                            title={labels[statName] || statName}
                            value={Number(statValue) || 0}
                        />
                    )
                )}
            </section>

            <Link to="/heroes" className="btn-voltar">
                ← Voltar para os Heróis
            </Link>
        </main>
    );
}

export default HeroDetails;