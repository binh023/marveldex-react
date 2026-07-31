import { useEffect, useState } from "react";

import HeroCard from "../components/HeroCard";
import { getHeroes } from "../services/marvelApi";

function Heroes() {
    const [heroes, setHeroes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");

    const filteredHeroes = heroes.filter((hero) => {
        return hero.name.toLowerCase().includes(search.toLowerCase());

    

    })

    useEffect(() => {
        async function loadHeroes() {
            try {
                const data = await getHeroes();

                setHeroes(data);
            } catch (error) {
                console.error(error);

                setError("Não foi possível carregar os heróis.");
            } finally {
                setLoading(false);
            }
        }

        loadHeroes();
    }, []);

    if (loading) {
        return (
            <main className="pagina">
                <h1>Heróis</h1>
                <p>Carregando heróis...</p>
            </main>
        );
    }

    if (error) {
        return (
            <main className="pagina">
                <h1>Heróis</h1>

                <p>{error}</p>
            </main>
        );
    }

    return (
        <main className="pagina">
            <h1>Heróis</h1>
            <input 
                type="search" placeholder="Pesquisar Herói..." 
                value={search}
                onChange={(event)=>{
                    setSearch(event.target.value)
                }}
            
            />

            <section className="lista-heroes">
                {filteredHeroes.map((hero) => (
                    <HeroCard
                        key={hero.id}
                        hero={hero}
                    />
                ))}
            </section>
        </main>
    );
}

export default Heroes;