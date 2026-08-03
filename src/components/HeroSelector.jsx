import { useEffect, useState } from "react";

import { getHeroes } from "../services/marvelApi";

function HeroSelector({
    visible,
    onClose,
    onSelect,
    excludedHeroId,
}) {
    const [heroes, setHeroes] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!visible) {
            return;
        }

        async function loadHeroes() {
            try {
                setLoading(true);
                setError("");

                const data = await getHeroes();

                setHeroes(data);
            } catch (error) {
                console.error("Erro ao carregar heróis:", error);

                setError("Não foi possível carregar os heróis.");
            } finally {
                setLoading(false);
            }
        }

        loadHeroes();
    }, [visible]);

    useEffect(() => {
        if (!visible) {
            setSearch("");
        }
    }, [visible]);

    if (!visible) {
        return null;
    }

    const filteredHeroes = heroes.filter((hero) => {
        const matchesSearch = hero.name
            .toLowerCase()
            .includes(search.trim().toLowerCase());

        const isNotExcluded = hero.id !== excludedHeroId;

        return matchesSearch && isNotExcluded;
    });

    function selectHero(hero) {
        onSelect(hero);
        onClose();
    }

    function closeByOverlay(event) {
        if (event.target === event.currentTarget) {
            onClose();
        }
    }

    return (
        <div
            className="selector-overlay"
            onClick={closeByOverlay}
        >
            <section className="selector-modal">
                <header className="selector-header">
                    <div>
                        <span className="home-etiqueta">
                            Seleção de personagem
                        </span>

                        <h2>Escolha um herói</h2>
                    </div>

                    <button
                        type="button"
                        className="selector-close"
                        onClick={onClose}
                        aria-label="Fechar seletor"
                    >
                        ×
                    </button>
                </header>

                <input
                    type="search"
                    className="selector-search"
                    placeholder="Pesquisar pelo nome..."
                    value={search}
                    onChange={(event) => {
                        setSearch(event.target.value);
                    }}
                    autoFocus
                />

                {loading && (
                    <p className="selector-message">
                        Carregando heróis...
                    </p>
                )}

                {error && (
                    <p className="selector-message selector-error">
                        {error}
                    </p>
                )}

                {!loading && !error && filteredHeroes.length === 0 && (
                    <p className="selector-message">
                        Nenhum herói encontrado.
                    </p>
                )}

                {!loading && !error && filteredHeroes.length > 0 && (
                    <div className="selector-list">
                        {filteredHeroes.map((hero) => (
                            <button
                                type="button"
                                className="selector-hero"
                                key={hero.id}
                                onClick={() => {
                                    selectHero(hero);
                                }}
                            >
                                <img
                                    src={hero.images.sm}
                                    alt={hero.name}
                                />

                                <div>
                                    <strong>{hero.name}</strong>

                                    <span>
                                        {hero.biography.fullName &&
                                        hero.biography.fullName !== "-"
                                            ? hero.biography.fullName
                                            : "Identidade desconhecida"}
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}

export default HeroSelector;