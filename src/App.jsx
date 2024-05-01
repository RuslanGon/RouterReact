
import { NavLink } from "react-router-dom";
import "./App.css";

function App() {
  
  return (
    
    <div>
     <header>
      {/* <a target="blank" rel='noopener noreferrer' href="/products">Products</a> */}
    <NavLink to='/mailbox'>MailBos</NavLink>
    <NavLink to='/products'>Products</NavLink>
    <NavLink to='/search'>Search</NavLink>

     </header>
    </div>
  );
}

export default App;