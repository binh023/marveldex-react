function NotFound() {
    return (
        <main className="pagina">
            <h1>Erro 404</h1>

            <p>A página que você tentou acessar não existe.</p>

            <Link to="/" className="botao-principal">Voltar para o Inicio</Link>
        </main>
    );
}

export default NotFound;