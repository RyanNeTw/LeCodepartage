import Breadcrumb from '../../components/Breadcrumb';
import Title from '../../components/Title';
import { useForm, ValidationError } from '@formspree/react';

const ContactPage = () => {
  const [state, handleSubmit] = useForm('xyyrjbov');

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="px-8 lg:px-page py-medium min-h-screen">
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
                    id="name"
                    name="name"
                    placeholder="Votre prénom"
                    className="w-1/2 border border-dark-blue bg-white-color px-small py-midSmall rounded-3xl text-dark-blue"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Votre e-mail"
                    className="w-1/2 border border-dark-blue bg-white-color px-small py-midSmall rounded-3xl text-dark-blue"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <textarea
                  id="message"
                  name="message"
                  placeholder="De quel sujet voulez-vous parler ?"
                  className="border border-dark-blue bg-white-color px-small py-midSmall h-48 rounded-3xl text-dark-blue"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
                <input
                  type="submit"
                  value="Envoyer"
                  className="border border-dark-blue w-1/4 cursor-pointer px-small py-midSmall rounded-3xl text-dark-blue self-end hover:bg-dark-blue hover:text-white-color w-fit"
                />
              </div>
              {state.succeeded && (
                <p className="text-center text-xl">
                  Merci de nous avoir contacté ! On reviendra vers vous au plus vite !
                </p>
              )}
            </div>
            <img src="./images/MailIllustration.svg" alt="Illustration" className="hidden md:block" />
          </div>
        </div>
      </form>
      <Breadcrumb />
    </>
  );
};

export default ContactPage;
