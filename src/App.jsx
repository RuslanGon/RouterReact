import { NavLink } from "react-router-dom";
import "./App.css";
import css from './App.module.css'
import clsx from "clsx";

function App() {

const getNavLinkClass = ({isActive}) => clsx(css.navlink, {
  [css.active] : isActive
}) 

  return (
    <div>
      <header>
        <nav className={css.nav}>
          {/* <a target="blank" rel='noopener noreferrer' href="/products">Products</a> */}
          <NavLink className={getNavLinkClass} to="/mailbox">MailBos</NavLink>
          <NavLink className={getNavLinkClass} to="/products">Products</NavLink>
          <NavLink className={getNavLinkClass} to="/search">Search</NavLink>
        </nav>
      </header>
    </div>
  );
}

export default App;
