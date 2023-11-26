import { Link, useLocation } from "react-router-dom";

function Header() {
  const route = useLocation();
  console.log({ route }, window.location.origin);

  return (
    <>
      <header className="bg-dark-blue flex flex-row justify-between items-center px-page py-small">
        <Link to="/">
          <img
            src={`${window.location.origin}/images/simpleLogo.png`}
            alt="LeCodePartagé's logo with text aside"
            className="h-12"
          />
        </Link>
        <nav>
          <ul className="flex flex-row gap-8 items-center">
            <li className="text-white-color cursor-pointer headerNavLink relative transition hover:scale-110 ">
              <Link to="/">Blog</Link>
            </li>
            <li className="text-white-color cursor-pointer headerNavLink relative transition hover:scale-110 ">
              <Link to="/a-propos">A propos </Link>
            </li>
            <li>
              <Link
                to="/contacte"
                className="bg-dark-red px-small py-reallySmall text-white-color rounded-3xl cursor-pointer"
              >
                Nous contacter
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
