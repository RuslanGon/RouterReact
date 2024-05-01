import { NavLink } from "react-router-dom";
import "./App.css";
import css from './App.module.css'

function App() {
  return (
    <div>
      <header>
        <nav className={css.nav}>
          {/* <a target="blank" rel='noopener noreferrer' href="/products">Products</a> */}
          <NavLink className={css.navlink} to="/mailbox">MailBos</NavLink>
          <NavLink className={css.navlink} to="/products">Products</NavLink>
          <NavLink className={css.navlink} to="/search">Search</NavLink>
        </nav>
      </header>
    </div>
  );
}

export default App;
