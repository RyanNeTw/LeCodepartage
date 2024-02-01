import { Link } from "react-router-dom";
import { LinkedinButton } from "../pages/main";

function Footer() {
  return (
    <>
      <footer className="bg-dark-blue px-8 lg:px-page flex flex-col gap-y-8 xsm:gap-y-0 justify-between py-medium min-h-screen">
        <section className="flex flex-col mb-4 gap-y-4 xsm:mb-0 xsm:gap-y-0 xsm:flex-row justify-center xsm:justify-between items-center">
          <div className="flex flex-col xsm:flex-row gap-2 items-center">
            <img
              src={`${window.location.origin}/images/simpleLogo.png`}
              alt="LeCodePartagé's logo"
            />
            <h4 className="text-white-color w-2/3 font-bold text-center xsm:text-left">
              {" "}
              Inscrivez-vous à notre newsletter
            </h4>
          </div>
          <div className="w-auto xsm:w-1/2 flex flex-row justify-end">
            <input
              type="text"
              placeholder="Votre adresse email"
              className="rounded-l-3xl px-small py-reallySmall w-4/5"
            />
            <input
              type="submit"
              value="Envoyer"
              className="bg-dark-red rounded-r-3xl py-midSmall px-small text-white-color cursor-pointer"
            />
          </div>
        </section>

        <section className="flex flex-row justify-center xsm:justify-between items-center">
          <div className="flex flex-col gap-4 xsm:gap-12">
            <div>
              <h2 className="text-white-color font-bold text-2xl text-center xsm:text-left">
                Le Code Partagé
              </h2>
              <h3 className="text-white-color text-center xsm:text-left">
                Votre guide sur l’<span className="text-light-blue">Open</span>{" "}
                Source <span className="text-light-red">Francais</span>{" "}
              </h3>
              <h4 className="text-white-color flex flex-row gap-1 items-center justify-center xsm:justify-start">
                Visitez notre{" "}
                <a
                  href="https://www.linkedin.com/in/le-code-partage-3506492a2/"
                  target="_blank"
                  className="text-light-blue underline"
                >
                  LinkedIn
                </a>
              </h4>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-light-red font-bold text-2xl text-center xsm:text-left">
                A propos :
              </h2>
              <div className="grid grid-cols-1 xsm:grid-cols-2 sm:grid-cols-3 grid-rows-6 xsm:grid-rows-3 sm:grid-rows-2 flex-row gap-4 xsm:gap-8 items-center text-center xsm:text-left">
                <Link
                  to="/a-propos"
                  className="text-white-color hover:underline cursor-pointer"
                >
                  Qui sommes-nous ?
                </Link>
                <Link
                  to="/contacte"
                  className="text-white-color hover:underline cursor-pointer"
                >
                  Nous contacter
                </Link>

                <Link
                  to="/cgu"
                  className="text-white-color hover:underline cursor-pointer"
                >
                  CGU
                </Link>
                <Link
                  to="/confidentialité"
                  className="text-white-color hover:underline cursor-pointer"
                >
                  Confidentialité
                </Link>

                <Link
                  to="/mentions-légales"
                  className="text-white-color hover:underline cursor-pointer"
                >
                  Mentions légales
                </Link>
                <h5 className="text-white-color hover:underline cursor-pointer">
                  Gérer mes cookies
                </h5>
              </div>
            </div>
          </div>
          <img
            src={`${window.location.origin}/images/peopleApprouving.svg`}
            alt="People approuving"
            className="hidden xl:block"
          />
        </section>

        <div className="flex flex-col xsm:flex-row gap-y-4 xsm:gap-y-0 items-center xsm:justify-between">
          <div className="flex flex-col xsm:flex-row gap-2 items-center">
            <img
              src={`${window.location.origin}/images/simpleLogo.png`}
              alt="LeCodePartagé's logo"
              className="w-8"
            />
            <h4 className="text-white-color text-center xsm:text-left">
              @2023 LeCodePartagé - Fait avec ❤️ en France
            </h4>
          </div>
          <LinkedinButton />
        </div>
      </footer>
    </>
  );
}

export default Footer;
