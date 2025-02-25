import { Outlet, NavLink } from "react-router-dom";

function Layout() {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/" className={(nav => nav.isActive ? "nav-active" : "")}>Accueil</NavLink>
          <NavLink to="/about" className={(nav => nav.isActive ? "nav-active" : "")}>À propos</NavLink>
        </nav>
      </header>

      <main>
        <Outlet /> {/* C'est ici que les pages s'affichent */}
      </main>

      <footer>© 2025 - Mon site</footer>
    </>
  );
}

export default Layout;