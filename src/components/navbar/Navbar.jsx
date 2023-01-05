import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context";
import "./navbar.scss";

const Navbar = () => {
  const { setTransition} = useGlobalContext();

  return (
    <>
      <nav>
        <Link onClick={()=>setTransition(true)} to="/">Madhuri Basant</Link>
        <a href="#services">Services</a>
        <a href="#contact"> Contact</a>
      </nav>
    </>
  );
};

export default Navbar;
