import { useRef } from "react";
import { Link } from "react-router";

function About() {
    const overviewRef = useRef(null);
    const structureRef = useRef(null);
    const routerRef = useRef(null);
    const hooksRef = useRef(null);
    const apiRef = useRef(null);
    const componentsRef = useRef(null);
    const battleRef = useRef(null);
    const androidRef = useRef(null);
    const conclusionRef = useRef(null);

    function scrollToSection(sectionRef) {
        sectionRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }

    return (
        <main className="presentation-page">
            <section
                className="presentation-cover"
                ref={overviewRef}
            >
                <div className="presentation-cover-content">
                    <span className="presentation-label">
                        Apresentação do projeto
                    </span>

                    <h1>HeroDex</h1>

                    <p>
                        Uma aplicação desenvolvida em React para consultar,
                        pesquisar e comparar personagens de diferentes
                        universos de super-heróis.
                    </p>

                    <div className="presentation-technologies">
                        <span>React</span>
                        <span>React Router</span>
                        <span>Fetch API</span>
                        <span>Capacitor</span>
                        <span>Android Studio</span>
                    </div>

                    <div className="presentation-cover-actions">
                        <button
                            type="button"
                            className="presentation-primary-button"
                            onClick={() =>
                                scrollToSection(structureRef)
                            }
                        >
                            Iniciar apresentação
                        </button>

                        <Link
                            to="/heroes"
                            className="presentation-secondary-button"
                        >
                            Abrir catálogo
                        </Link>
                    </div>
                </div>

                <div
                    className="presentation-cover-symbol"
                    aria-hidden="true"
                >
                    H
                </div>
            </section>

            <nav className="presentation-navigation">
                <button
                    type="button"
                    onClick={() => scrollToSection(overviewRef)}
                >
                    Início
                </button>

                <button
                    type="button"
                    onClick={() => scrollToSection(structureRef)}
                >
                    Estrutura
                </button>

                <button
                    type="button"
                    onClick={() => scrollToSection(routerRef)}
                >
                    Router
                </button>

                <button
                    type="button"
                    onClick={() => scrollToSection(hooksRef)}
                >
                    Hooks
                </button>

                <button
                    type="button"
                    onClick={() => scrollToSection(apiRef)}
                >
                    API
                </button>

                <button
                    type="button"
                    onClick={() => scrollToSection(componentsRef)}
                >
                    Componentes
                </button>

                <button
                    type="button"
                    onClick={() => scrollToSection(battleRef)}
                >
                    Combate
                </button>

                <button
                    type="button"
                    onClick={() => scrollToSection(androidRef)}
                >
                    Android
                </button>
            </nav>

            <section
                className="presentation-section"
                ref={structureRef}
            >
                <header className="presentation-section-header">
                    <span>01</span>

                    <div>
                        <p>Organização</p>
                        <h2>Estrutura do projeto</h2>
                    </div>
                </header>

                <div className="presentation-grid presentation-grid-two">
                    <article className="presentation-card code-card">
                        <h3>Estrutura principal</h3>

                        <pre>
{`src
├── components
│   ├── Navbar.jsx
│   ├── HeroCard.jsx
│   ├── HeroStat.jsx
│   ├── BattleHeroCard.jsx
│   └── HeroSelector.jsx
├── pages
│   ├── Home.jsx
│   ├── Heroes.jsx
│   ├── HeroDetails.jsx
│   ├── Battle.jsx
│   ├── About.jsx
│   └── NotFound.jsx
├── services
│   └── superheroApi.js
├── App.jsx
├── main.jsx
└── index.css`}
                        </pre>
                    </article>

                    <article className="presentation-card">
                        <h3>Responsabilidades</h3>

                        <div className="responsibility-list">
                            <div>
                                <strong>components</strong>
                                <span>
                                    Elementos reutilizáveis da interface.
                                </span>
                            </div>

                            <div>
                                <strong>pages</strong>
                                <span>
                                    Componentes associados às rotas.
                                </span>
                            </div>

                            <div>
                                <strong>services</strong>
                                <span>
                                    Comunicação com a API externa.
                                </span>
                            </div>

                            <div>
                                <strong>App.jsx</strong>
                                <span>
                                    Configuração central das rotas.
                                </span>
                            </div>

                            <div>
                                <strong>main.jsx</strong>
                                <span>
                                    Inicialização da aplicação React.
                                </span>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            <section
                className="presentation-section"
                ref={routerRef}
            >
                <header className="presentation-section-header">
                    <span>02</span>

                    <div>
                        <p>Navegação</p>
                        <h2>React Router</h2>
                    </div>
                </header>

                <div className="presentation-grid presentation-grid-two">
                    <article className="presentation-card">
                        <h3>Objetivo</h3>

                        <p>
                            O React Router associa endereços da aplicação
                            a componentes React, permitindo trocar de página
                            sem recarregar o documento inteiro.
                        </p>

                        <div className="presentation-flow">
                            <span>URL</span>
                            <strong>→</strong>
                            <span>Route</span>
                            <strong>→</strong>
                            <span>Componente</span>
                        </div>
                    </article>

                    <article className="presentation-card code-card">
                        <h3>Rotas da HeroDex</h3>

                        <pre>
{`<Routes>
    <Route path="/" element={<Home />} />

    <Route
        path="/heroes"
        element={<Heroes />}
    />

    <Route
        path="/heroes/:id"
        element={<HeroDetails />}
    />

    <Route
        path="/combate"
        element={<Battle />}
    />

    <Route
        path="/sobre"
        element={<About />}
    />

    <Route
        path="*"
        element={<NotFound />}
    />
</Routes>`}
                        </pre>
                    </article>
                </div>

                <div className="presentation-concepts">
                    <article>
                        <strong>BrowserRouter</strong>
                        <span>Ativa o sistema de rotas.</span>
                    </article>

                    <article>
                        <strong>Routes</strong>
                        <span>Agrupa as rotas disponíveis.</span>
                    </article>

                    <article>
                        <strong>Route</strong>
                        <span>Relaciona uma URL a um componente.</span>
                    </article>

                    <article>
                        <strong>Link</strong>
                        <span>Navega sem recarregar a página.</span>
                    </article>

                    <article>
                        <strong>NavLink</strong>
                        <span>Identifica a rota atualmente ativa.</span>
                    </article>

                    <article>
                        <strong>useParams</strong>
                        <span>Lê parâmetros presentes na URL.</span>
                    </article>
                </div>
            </section>

            <section
                className="presentation-section"
                ref={hooksRef}
            >
                <header className="presentation-section-header">
                    <span>03</span>

                    <div>
                        <p>Estado e ciclo de vida</p>
                        <h2>Hooks utilizados</h2>
                    </div>
                </header>

                <div className="presentation-grid presentation-grid-three">
                    <article className="presentation-card hook-card">
                        <span className="hook-name">useState</span>

                        <h3>Armazenamento de estado</h3>

                        <p>
                            Guarda informações que mudam durante a execução
                            da aplicação.
                        </p>

                        <pre>
{`const [heroes, setHeroes] =
    useState([]);

const [search, setSearch] =
    useState("");

const [heroOne, setHeroOne] =
    useState(null);`}
                        </pre>
                    </article>

                    <article className="presentation-card hook-card">
                        <span className="hook-name">useEffect</span>

                        <h3>Efeitos externos</h3>

                        <p>
                            Executa a consulta à API quando um componente
                            é carregado ou quando uma dependência muda.
                        </p>

                        <pre>
{`useEffect(() => {
    loadHeroes();
}, []);`}
                        </pre>
                    </article>

                    <article className="presentation-card hook-card">
                        <span className="hook-name">useParams</span>

                        <h3>Parâmetros da rota</h3>

                        <p>
                            Obtém o identificador do herói presente em uma
                            rota dinâmica.
                        </p>

                        <pre>
{`const { id } = useParams();

getHeroById(id);`}
                        </pre>
                    </article>
                </div>

                <article className="presentation-card presentation-summary-card">
                    <h3>Como os Hooks trabalham juntos</h3>

                    <div className="presentation-flow presentation-flow-large">
                        <span>useEffect busca os dados</span>
                        <strong>→</strong>
                        <span>useState armazena</span>
                        <strong>→</strong>
                        <span>React renderiza novamente</span>
                    </div>
                </article>
            </section>

            <section
                className="presentation-section"
                ref={apiRef}
            >
                <header className="presentation-section-header">
                    <span>04</span>

                    <div>
                        <p>Dados externos</p>
                        <h2>Consumo da API</h2>
                    </div>
                </header>

                <div className="presentation-grid presentation-grid-two">
                    <article className="presentation-card">
                        <h3>Fluxo da requisição</h3>

                        <div className="api-flow">
                            <div>Componente React</div>
                            <span>↓</span>
                            <div>getHeroes()</div>
                            <span>↓</span>
                            <div>fetch()</div>
                            <span>↓</span>
                            <div>Superhero API</div>
                            <span>↓</span>
                            <div>JSON</div>
                            <span>↓</span>
                            <div>setHeroes()</div>
                        </div>
                    </article>

                    <article className="presentation-card code-card">
                        <h3>Serviço da API</h3>

                        <pre>
{`async function getHeroes() {
    const response = await fetch(
        \`\${BASE_URL}/all.json\`
    );

    if (!response.ok) {
        throw new Error(
            "Erro ao buscar heróis"
        );
    }

    const data = await response.json();

    return data;
}`}
                        </pre>
                    </article>
                </div>

                <article className="presentation-card data-card">
                    <h3>Informações recebidas</h3>

                    <div className="data-list">
                        <span>Nome</span>
                        <span>Imagem</span>
                        <span>Biografia</span>
                        <span>Editora</span>
                        <span>Inteligência</span>
                        <span>Força</span>
                        <span>Velocidade</span>
                        <span>Durabilidade</span>
                        <span>Poder</span>
                        <span>Combate</span>
                    </div>
                </article>
            </section>

            <section
                className="presentation-section"
                ref={componentsRef}
            >
                <header className="presentation-section-header">
                    <span>05</span>

                    <div>
                        <p>Reutilização</p>
                        <h2>Componentes e Props</h2>
                    </div>
                </header>

                <div className="presentation-grid presentation-grid-two">
                    <article className="presentation-card">
                        <h3>Fluxo dos cards</h3>

                        <div className="component-tree">
                            <div>Heroes</div>
                            <span>props: hero</span>
                            <div>HeroCard</div>
                        </div>

                        <p>
                            A página possui o array completo. Cada objeto é
                            enviado para um componente de card por props.
                        </p>
                    </article>

                    <article className="presentation-card code-card">
                        <h3>Renderização da lista</h3>

                        <pre>
{`{filteredHeroes.map((hero) => (
    <HeroCard
        key={hero.id}
        hero={hero}
    />
))}`}
                        </pre>
                    </article>

                    <article className="presentation-card">
                        <h3>Props com funções</h3>

                        <p>
                            Props também transportam funções, permitindo
                            que componentes filhos provoquem alterações
                            em estados controlados pelo componente pai.
                        </p>

                        <pre>
{`<BattleHeroCard
    hero={heroOne}
    onSelect={selectHeroOne}
/>`}
                        </pre>
                    </article>

                    <article className="presentation-card">
                        <h3>Componente reutilizável</h3>

                        <pre>
{`function HeroStat({
    title,
    value
}) {
    return (
        <div className="hero-stat">
            <span>{title}</span>
            <span>{value}</span>
        </div>
    );
}`}
                        </pre>
                    </article>
                </div>
            </section>

            <section
                className="presentation-section"
                ref={battleRef}
            >
                <header className="presentation-section-header">
                    <span>06</span>

                    <div>
                        <p>Nova funcionalidade</p>
                        <h2>Combate comparativo</h2>
                    </div>
                </header>

                <div className="presentation-grid presentation-grid-two">
                    <article className="presentation-card">
                        <h3>Funcionamento</h3>

                        <ol className="presentation-steps">
                            <li>O usuário abre o seletor.</li>
                            <li>Escolhe dois personagens.</li>
                            <li>Os atributos são carregados.</li>
                            <li>O overall é calculado.</li>
                            <li>Os valores são comparados.</li>
                            <li>O vencedor é apresentado.</li>
                        </ol>
                    </article>

                    <article className="presentation-card code-card">
                        <h3>Cálculo do Overall</h3>

                        <pre>
{`function calculateOverall(powerstats) {
    const values =
        Object.values(powerstats)
            .map((value) =>
                Number(value) || 0
            );

    const total = values.reduce(
        (sum, value) => sum + value,
        0
    );

    return Math.round(
        total / values.length
    );
}`}
                        </pre>
                    </article>
                </div>

                <article className="presentation-card battle-rule-card">
                    <h3>Regra de comparação</h3>

                    <div className="battle-rule">
                        <span>1</span>
                        <p>Maior overall vence.</p>
                    </div>

                    <div className="battle-rule">
                        <span>2</span>
                        <p>
                            Em caso de empate, vence quem superar o adversário
                            em mais atributos individuais.
                        </p>
                    </div>

                    <div className="battle-rule">
                        <span>3</span>
                        <p>
                            Persistindo a igualdade, o resultado será empate.
                        </p>
                    </div>
                </article>
            </section>

            <section
                className="presentation-section"
                ref={androidRef}
            >
                <header className="presentation-section-header">
                    <span>07</span>

                    <div>
                        <p>Aplicativo móvel</p>
                        <h2>Capacitor e Android</h2>
                    </div>
                </header>

                <div className="presentation-grid presentation-grid-two">
                    <article className="presentation-card">
                        <h3>Arquitetura</h3>

                        <div className="presentation-flow presentation-flow-column">
                            <span>Projeto React</span>
                            <strong>↓</strong>
                            <span>npm run build</span>
                            <strong>↓</strong>
                            <span>Pasta dist</span>
                            <strong>↓</strong>
                            <span>Capacitor</span>
                            <strong>↓</strong>
                            <span>Projeto Android</span>
                        </div>
                    </article>

                    <article className="presentation-card code-card">
                        <h3>Fluxo de atualização</h3>

                        <pre>
{`npm run build

npx cap sync android

npx cap open android`}
                        </pre>

                        <p>
                            O mesmo código React é empacotado em uma aplicação
                            nativa executada pelo Android Studio.
                        </p>
                    </article>
                </div>
            </section>

            <section
                className="presentation-conclusion"
                ref={conclusionRef}
            >
                <span className="presentation-label">
                    Conclusão
                </span>

                <h2>Principais conceitos aplicados</h2>

                <div className="conclusion-items">
                    <span>Componentização</span>
                    <span>Props</span>
                    <span>useState</span>
                    <span>useEffect</span>
                    <span>useParams</span>
                    <span>React Router</span>
                    <span>Fetch API</span>
                    <span>Renderização condicional</span>
                    <span>Capacitor</span>
                </div>

                <p>
                    A HeroDex demonstra como estados, efeitos, componentes,
                    rotas e dados externos podem trabalhar em conjunto para
                    construir uma aplicação web e mobile completa.
                </p>

                <button
                    type="button"
                    className="presentation-primary-button"
                    onClick={() => scrollToSection(overviewRef)}
                >
                    Voltar ao início
                </button>
            </section>
        </main>
    );
}

export default About;