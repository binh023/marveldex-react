import { Link } from "react-router";

function HeroCard({ hero }) {
    return (
        <Link to={`/heroes/${hero.id}`}>
            <article className="hero-card">
                <img
                    src={hero.images.md}
                    alt={hero.name}
                    className="hero-image"
                />

                <h2>{hero.name}</h2>
            </article>
        </Link>
    );
}

export default HeroCard;