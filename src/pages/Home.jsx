import { Link } from "react-router";


function Home() {
    return (
        <main className="pagina home">
            <h1>MarvelDex</h1>

            <p>
                Conheça os principais herois da marvel e descubra seus poderes.
            </p>

            <Link to="/herois" className="botao-principal"></Link>
                Explorar Heróis
        </main>
    );
}

export default Home;
