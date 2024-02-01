import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Arrow from "../assets/Arrow";

function Header() {
  const [showButton, setShowButton] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

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
        className="bg-dark-blue flex flex-row justify-between items-center px-8 lg:px-page py-small"
      >
        <Link to="/">
          <img
            src={`${window.location.origin}/images/logoWithNameAside.svg`}
            alt="LeCodePartagé's logo with text aside"
            className="h-12 hidden xsm:block"
          />
          <img
            src={`${window.location.origin}/images/simpleLogo.png`}
            alt="LeCodePartagé's logo"
            className="h-12 xsm:hidden"
          />
        </Link>
        <nav className="hidden xsm:block">
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
        <img
          className="xsm:hidden w-8 invert z-100"
          src={`${window.location.origin}/images/burger.png`}
          onClick={() => setShowMenu(!showMenu)}
        />
        <div
          className={`fixed bg-black/25 w-screen h-screen top-0 right-0 z-50 xsm:hidden transition-all delay-150 ${showMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
          onClick={() => setShowMenu(false)}
        >
          <div
            className={`z-100 bg-dark-blue w-1/2 h-full flex flex-col justify-center items-center transition-all duration-300 delay-150 ${showMenu ? "ml-[50vw]" : "ml-[100vw]"}`}
          >
            <img
              className="absolute top-[2.05rem] right-8 xsm:hidden w-8 invert z-100"
              src={`${window.location.origin}/images/burger.png`}
              onClick={() => setShowMenu(!showMenu)}
            />
            <ul className="flex flex-col gap-8 items-center">
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
          </div>
        </div>
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
