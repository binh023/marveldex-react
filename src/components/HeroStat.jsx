function HeroStat({ title, value }) {
    return (
        <div className="hero-stat">

            <div className="hero-stat-header">
                <span>{title}</span>

                <span>{value}</span>
            </div>

            <div className="hero-stat-bar">

                <div
                    className="hero-stat-fill"
                    style={{
                        width: `${value}%`
                    }}
                ></div>

            </div>

        </div>
    );
}

export default HeroStat;