import Breadcrumb from '../../components/Breadcrumb';
import Title from '../../components/Title';

type WebmasterType = {
    webmaster: string;
    address: string;
    city: string;
    tel: string;
};

const LegalNotice = () => {
    const webmaster: WebmasterType = {
        webmaster: 'Digital Ocean',
        address: '47 Bd de Pesaro',
        city: '92000 Nanterre',
        tel: 'Tél. : 09 70 01 90 90',
    };

    return (
        <>
            <div className="px-8 lg:px-page py-medium flex flex-col gap-8 min-h-screen">
                <h1 className="self-center text-3xl font-bold text-light-red">Mentions légales</h1>
                <Title title="HEBERGEUR" />
                <div className="flex flex-col">
                    <h4 className="pb-2 text-lg">Ce site est hébergé par :</h4>
                    <h5>{webmaster.webmaster}</h5>
                    <h5>{webmaster.address}</h5>
                    <h5>{webmaster.city}</h5>
                    <h5>{webmaster.tel}</h5>
                </div>
                <Title title="CONFIDENTIALITE ET PROTECTION DES DONNEES" />
                <div className="flex flex-col gap-4">
                    <p>
                        Conformément à la loi informatique et libertés du 06 janvier 1978, vous pouvez à tout moment
                        modifier ou supprimer les renseignements liés à votre inscription. Ces informations vous
                        concernant étant confidentielles, LeCodePartage s’engage à les protéger.
                    </p>
                    <p>
                        Vous disposez d’un droit d’accès, de modification, de rectification et de suppression des
                        données qui vous concernent (art. 34 de la loi « Informatique et Libertés »). Vous pouvez
                        exercer ce droit directement sur les sites concernés ou en nous contactant:
                        lecodepartage@gmail.com{' '}
                    </p>
                </div>
            </div>
            <Breadcrumb />
        </>
    );
};

export default LegalNotice;
