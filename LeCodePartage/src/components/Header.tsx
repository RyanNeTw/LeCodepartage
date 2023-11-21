import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="bg-dark-blue flex flex-row justify-between items-center px-page py-reallySmall">
        <Link to="/">
          <img
            src="./images/LogoWithNameAside.png"
            alt="LeCodePartagé's logo with text aside"
            className="h-12"
          />
        </Link>
        <nav>
          <ul className="flex flex-row gap-8 items-center">
            <li className="text-white-color cursor-pointer headerNavLink relative transition hover:scale-110 ">
              Blog
            </li>
            <li className="text-white-color cursor-pointer headerNavLink relative transition hover:scale-110 ">
              A propos
            </li>
            <li>
              <button className="bg-dark-red px-small py-reallySmall text-white-color rounded-3xl cursor-pointer">
                Nous contacter
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
