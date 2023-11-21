function Footer() {
  return (
    <>
      <footer className="bg-dark-blue px-page flex flex-col gap-24 pt-big pb-medium">
        <section className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-2 items-center">
          <img
              src="./images/simpleLogo.png"
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
              className="bg-dark-red rounded-r-3xl py-midSmall px-small text-white-color"
            />
          </div>
        </section>

        <section className="flex flex-row justify-between items-center">
          <div className="flex flex-col gap-12">
            <div>
              <h2 className="text-white-color font-bold text-2xl">Le Code Partagé</h2>
              <h3 className="text-white-color">
                Votre guide sur l’<span className="text-light-blue">Open</span> Source <span className="text-light-red">Francais</span>{" "}
              </h3>
            </div>
            <div className="flex flex-col gap-4">
                <h2 className="text-light-red font-bold text-2xl">A propos :</h2>
                <div className="flex flex-row gap-8 items-center">
                    <div className="flex flex-col gap-4">
                        <h5 className="text-white-color hover:underline cursor-pointer">Qui sommes-nous ?</h5>
                        <h5 className="text-white-color hover:underline cursor-pointer">Nous contacter</h5>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h5 className="text-white-color hover:underline cursor-pointer">CGU</h5>
                        <h5 className="text-white-color hover:underline cursor-pointer">Confidentialité</h5>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h5 className="text-white-color hover:underline cursor-pointer">Mentions légales</h5>
                        <h5 className="text-white-color hover:underline cursor-pointer">Gérer mes cookies</h5>
                    </div>
                </div>
            </div>
          </div>
          <img src="./images/peopleApprouving.png" alt="People approuving" />
        </section>

        <img src="./images/logoWithTitleAbove.png" className="w-24 self-center"/>
      </footer>
    </>
  );
}

export default Footer;
