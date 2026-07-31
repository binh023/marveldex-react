import { useEffect, useState } from "react";
import { getHeroes } from "../services/marvelApi";

function Heroes() {
    const [heroes, setHeroes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function loadHeroes() {
            try {
                const data = await getHeroes();

                console.log("Dados recebidos:", data);

                setHeroes(data);
            } catch (error) {
                console.error("Erro na requisição:", error);

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

            <p>Total de heróis: {heroes.length}</p>
        </main>
    );
}

export default Heroes;