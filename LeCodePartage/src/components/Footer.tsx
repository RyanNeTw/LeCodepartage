import { Link } from "react-router-dom";
import { LinkedinButton } from "../pages/main";

function Footer() {
  return (
    <>
      <footer className="bg-dark-blue px-page flex flex-col justify-between py-medium min-h-screen">
        <section className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-2 items-center">
            <img
              src={`${window.location.origin}/images/simpleLogo.png`}
              alt="LeCodePartagé's logo"
            />
            <h4 className="text-white-color w-2/3 font-bold">
              {" "}
              Inscrivez-vous à notre newsletter
            </h4>
          </div>
          <div className="w-1/2 flex flex-row justify-end">
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

        <section className="flex flex-row justify-between items-center">
          <div className="flex flex-col gap-12">
            <div>
              <h2 className="text-white-color font-bold text-2xl">
                Le Code Partagé
              </h2>
              <h3 className="text-white-color">
                Votre guide sur l’<span className="text-light-blue">Open</span>{" "}
                Source <span className="text-light-red">Francais</span>{" "}
              </h3>
              <h4 className="text-white-color flex flex-row gap-1 items-center">
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
              <h2 className="text-light-red font-bold text-2xl">A propos :</h2>
              <div className="flex flex-row gap-8 items-center">
                <div className="flex flex-col gap-4">
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
                </div>
                <div className="flex flex-col gap-4">
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
                </div>
                <div className="flex flex-col gap-4">
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
          </div>
          <img
            src={`${window.location.origin}/images/peopleApprouving.svg`}
            alt="People approuving"
          />
        </section>

        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-2 items-center">
            <img
              src={`${window.location.origin}/images/simpleLogo.png`}
              alt="LeCodePartagé's logo"
              className="w-8"
            />
            <h4 className="text-white-color">
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
