import Button from "../Button/Button";
import "./Navbar.module.css";


const NavbarUp = () => {
  return (
    <>
      <nav>
        <img src="./images/brand_logo.png"></img>
        <ul>
          <li>Home</li>
          <li>Location</li>
          <li>About us</li>
          <li>Contact us</li>
        </ul>

        <Button text="LOGIN" isLogin={true}/>
      </nav>
    </>
  );
}

export default NavbarUp;