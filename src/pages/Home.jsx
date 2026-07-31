import { Link } from "react-router";

function Home() {
    return (
        <main className="home-page">
            <section className="home-hero">
                <div className="home-conteudo">
                    <span className="home-etiqueta">
                        Enciclopédia de super-heróis
                    </span>

                    <h1>
                        Explore diferentes
                        <span> universos de heróis</span>
                    </h1>

                    <p>
                        Consulte personagens de diversas editoras, descubra
                        suas identidades, histórias e compare atributos como
                        força, inteligência, velocidade, poder e combate.
                    </p>

                    <div className="home-acoes">
                        <Link
                            to="/heroes"
                            className="botao-principal"
                        >
                            Explorar heróis
                        </Link>

                        <Link
                            to="/sobre"
                            className="botao-secundario"
                        >
                            Sobre o projeto
                        </Link>
                    </div>
                </div>

                <div
                    className="home-visual"
                    aria-hidden="true"
                >
                    <div className="home-simbolo">
                        H
                    </div>

                    <span className="circulo circulo-1"></span>
                    <span className="circulo circulo-2"></span>
                    <span className="circulo circulo-3"></span>
                </div>
            </section>

            <section className="home-recursos">
                <article className="recurso-card">
                    <span className="recurso-numero">01</span>

                    <h2>Catálogo completo</h2>

                    <p>
                        Navegue por centenas de personagens organizados em
                        cards com imagem e nome.
                    </p>
                </article>

                <article className="recurso-card">
                    <span className="recurso-numero">02</span>

                    <h2>Pesquisa rápida</h2>

                    <p>
                        Localize personagens pelo nome e atualize os resultados
                        instantaneamente.
                    </p>
                </article>

                <article className="recurso-card">
                    <span className="recurso-numero">03</span>

                    <h2>Detalhes e atributos</h2>

                    <p>
                        Consulte biografia, editora, ocupação e estatísticas de
                        cada personagem.
                    </p>
                </article>
            </section>

            <section className="home-destaque">
                <div>
                    <span className="home-etiqueta">
                        Desenvolvido com React
                    </span>

                    <h2>
                        Navegação rápida, dados reais e componentes reutilizáveis
                    </h2>
                </div>

                <div className="home-tecnologias">
                    <span>React</span>
                    <span>React Router</span>
                    <span>Fetch API</span>
                    <span>CSS Grid</span>
                </div>
            </section>
        </main>
    );
}

export default Home;