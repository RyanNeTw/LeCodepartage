import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Arrow from "../assets/Arrow";

function Header() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const width = window.innerWidth * 0.35;
      if (window.scrollY > width) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        id="header"
        className="bg-dark-blue flex flex-row justify-between items-center px-page  py-small"
      >
        <Link to="/">
          <img
            src={`${window.location.origin}/images/logoWithNameAside.svg`}
            alt="LeCodePartagé's logo with text aside"
            className="h-12"
          />
        </Link>
        <nav>
          <ul className="flex flex-row gap-8 items-center">
            <li className="text-white-color cursor-pointer headerNavLink relative transition hover:scale-110 ">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "headerNavLinkIsActive" : ""
                }
              >
                Blog
              </NavLink>
            </li>
            <li className="text-white-color cursor-pointer headerNavLink relative transition hover:scale-110 ">
              <NavLink
                to="/a-propos"
                className={({ isActive }) =>
                  isActive ? "headerNavLinkIsActive" : ""
                }
              >
                A propos{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacte"
                className="bg-dark-red px-small py-reallySmall text-white-color rounded-3xl cursor-pointer hover:bg-light-red"
              >
                Nous contacter
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      {showButton && (
        <a
          href="#header"
          className="fixed bottom-12 right-12 bg-dark-blue p-4 rounded-full z-50 transition hover:bg-light-blue"
        >
          <Arrow size="w-6 rotate-90" />
        </a>
      )}
    </>
  );
}

export default Header;
