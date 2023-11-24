import Title from "../../components/Title";

const ContactPage = () => {
  return (
    <>
      <div className="px-page py-medium min-h-screen">
        <Title
          title="Vous avez une question, une demande, une suggestion ? Contactez-nous
            !"
        />
        <div className="flex flex-row justify-between items-center">
          <p className="w-1/2">
            Besoin de nous contacter pour nous faire parvenir une information,
            nous faire un retour sur le contenu ou nous dire que vous aimez (ou
            pas) ce que l’on écrit ? Utilisez ce formulaire ou adressez-nous un
            mail à <span>lecodepartage@gmail.com</span>, nous vous répondrons
            dans les meilleurs délais.
          </p>
          <img src="./images/MailIllustration.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
