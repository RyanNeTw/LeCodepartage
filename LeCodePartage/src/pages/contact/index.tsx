import Breadcrumb from "../../components/breadCrumb";
import Title from "../../components/Title";

const ContactPage = () => {
  return (
    <>
      <div className="px-page py-medium min-h-screen">
        <div className="flex flex-row justify-between items-center pb-small">
          <div className="w-full flex flex-col gap-12 justify-between">
            <Title
              title="Vous avez une question, une demande, une suggestion ? Contactez-nous
            !"
            />
            <div className="w-full flex flex-col gap-4 justify-between">
              <div className="flex flex-row justify-between gap-4">
                <input
                  type="text"
                  placeholder="Votre prénom"
                  className="w-1/2 border border-dark-blue bg-white-color px-small py-midSmall rounded-3xl text-dark-blue"
                />
                <input
                  type="text"
                  placeholder="Votre e-mail"
                  className="w-1/2 border border-dark-blue bg-white-color px-small py-midSmall rounded-3xl text-dark-blue"
                />
              </div>
              <textarea
                placeholder="De quel sujet voulez-vous parler ?"
                className="border border-dark-blue bg-white-color px-small py-midSmall rounded-3xl text-dark-blue"
              />
              <input
                type="submit"
                value="Envoyer"
                className="border border-dark-blue w-1/4 cursor-pointer px-small py-midSmall rounded-3xl text-dark-blue self-end hover:bg-dark-blue hover:text-white-color"
              />
            </div>
          </div>
          <img src="./images/MailIllustration.svg" alt="" />
        </div>
      </div>
      <Breadcrumb />
    </>
  );
};

export default ContactPage;
