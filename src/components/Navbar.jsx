import { NavLink } from "react-router";

function Navbar() {
    return (
        <header className="cabecalho">
            <NavLink to="/" className="logo">
                HeroDex
            </NavLink>

            <nav className="menu">
                <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                        isActive ? "menu-link ativo" : "menu-link"
                    }
                >
                    Início
                </NavLink>

                <NavLink
                    to="/heroes"
                    className={({ isActive }) =>
                        isActive ? "menu-link ativo" : "menu-link"
                    }
                >
                    Heróis
                </NavLink>

                <NavLink
                    to="/sobre"
                    className={({ isActive }) =>
                        isActive ? "menu-link ativo" : "menu-link"
                    }
                >
                    Sobre
                </NavLink>
            </nav>
        </header>
    );
}

export default Navbar;