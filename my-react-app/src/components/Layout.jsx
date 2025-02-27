import { Outlet, NavLink } from "react-router-dom";

function Layout() {
  return (
    <>
      <header>
        <img src="./logo_kasa.png" alt="logo Kasa" />
        <nav>
          <NavLink to="/" className={(nav => nav.isActive ? "nav-active" : "")}>Accueil</NavLink>
          <NavLink to="/about" className={(nav => nav.isActive ? "nav-active" : "")}>À propos</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <img src="./logo_kasa_footer.png" alt="logo Kasa" />
        <p>© 2020 Kasa. All rights reserved</p>
        
      </footer>
    </>
  );
}

export default Layout;