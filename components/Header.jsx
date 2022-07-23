import "./Header.css";
import Logo from "../assets/react.svg";

export default function App({ title }) {
  return (
    <header>
      <nav>
        <div className='logo'>
          <span>{title.toUpperCase()}</span>
          <img src={Logo} alt='Logo' />
        </div>

        <ul className='nav-list'>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>Pricing</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
