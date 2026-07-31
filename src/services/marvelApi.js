const BASE_URL =
    "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api";

async function getHeroes() {
    const response = await fetch(`${BASE_URL}/all.json`);

    if (!response.ok) {
        throw new Error(
            `Erro ao buscar heróis. Código: ${response.status}`
        );
    }

    const data = await response.json();

    return data;
}

export { getHeroes };