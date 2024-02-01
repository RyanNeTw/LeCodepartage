import { FC } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Title from "../../components/Title";

const Cgu = () => {
  return (
    <>
      <div className="px-8 lg:px-page py-medium min-h-screen flex flex-col gap-4">
        <div className="self-center flex flex-col items-center">
          <h1 className="text-3xl text-light-red font-bold">
            Conditions générales d’utilisation du site
          </h1>
          <h4 className="text-xl">
            Retrouvez nos conditions générales d’utilisation (CGU).
          </h4>
        </div>

        <Title title="Article 1 – Définitions" />
        <Paragraph paragraph="L’« Utilisateur » : toute personne physique ou morale utilisant le Site. Les systèmes automatisés ou un logiciel accédant au Site sont expressément considérés comme des utilisateurs non légitimes de la base de données disponible sur le Site ou n’ayant pas licitement accès à la base de données disponible sur le Site." />
        <Paragraph paragraph="L’ « Utilisateur Candidat » : tout Utilisateur, personne physique non professionnelle, ayant procédé à son Inscription." />
        <Paragraph paragraph="Le « Client » : tout Utilisateur, personne physique ou morale agissant dans le cadre de son activité professionnelle, ayant procédé à son Inscription et souscrivant aux Services payants ou gratuits de la société LeCodePartage, y compris la réservation d’un espace de publication de Contenu." />
        <Paragraph paragraph="Le « Curriculum vitae » ou « CV » : note établie par l’Utilisateur Candidat détaillant notamment son parcours professionnel, de formation ainsi que ses centres d’intérêt personnels." />
        <Paragraph paragraph="La « CVthèque » : espace Web hébergeant les CV et Profils et accessible via le Site aux Clients ayant souscrit au service « CVthèque »." />
        <Paragraph paragraph="L’ « Espace personnel » : espace dédié à chaque Utilisateur ayant procédé à son Inscription et accessible à l’aide d’un mot de passe. A la suite de son Inscription, l’utilisateur Candidat reçoit automatiquement un mail lui proposant la création d’un mot de passe associé à l’adresse mail communiquée. L’Utilisateur Candidat sera alors en mesure de modifier et/ou compléter ses informations personnelles." />
        <Paragraph paragraph="L’ « Inscription » : action permettant à un Utilisateur de pouvoir accéder à certains Services, et matérialisée par la communication de son adresse mail à LeCodePartage." />
        <Paragraph paragraph="Le « Contenu » : il s’agit d’offre de stage, d’emploi, de formation, de bilan de compétences, de franchise, de portage salariale, de création et de reprise d’entreprise, d’accompagnement personnalisé, de coaching, d’appel d’offre, de reconversion, de service autour de la vie professionnelle ; d’informations sur les Clients et les entreprises en générale, sur la carrière et la gestion de carrière, sur la création et reprise d’entreprise, la franchise, sur le droit, sur la reconversion professionnelle, sur la formation, sur le bilan de compétences, sur le portage salarial, sur l’accompagnement personnalisé, sur le coaching, et plus généralement sur le thème de la vie professionnelle." />
        <Paragraph paragraph="La société « LeCodePartage » : la SAS LeCodePartage, sise 2 Rue de la Mabilais à Rennes (35000) immatriculée sous le n° SIRET 428 843 130 00140." />
        <Paragraph paragraph="Les « Services » : ensemble des prestations proposées par LeCodePartage, disponibles sur le Site et listées ci-après." />
        <Paragraph paragraph="La « Notification » : message proposant le Contenu à destination des Utilisateurs par tous canaux de communication et notamment les moyens suivants : bannière et élément graphique sur le Site, e-mail, SMS, notification mobile, notification web." />
        <Paragraph paragraph="Le « Profil » : ensemble des données collectées et enregistrées par LeCodePartage sur un Utilisateur. Pour un Utilisateur Candidat le Profil est nominatif. A défaut, il est anonyme. Le Profil inclut le « Curriculum Vitae » lorsque l’Utilisateur Candidat l’a utilisé sur le Site." />
        <Paragraph paragraph="Le « Site » : le site Web accessible via les noms de domaine suivants : LeCodePartage.com, blogdumoderateur.com, LeCodePartageplace.fr, maformation.fr, LeCodePartage-group.com, mon-compte-formation.fr, jobijoba.com, holeest.com, hellocv.com, cvcatcher.io, tous les domaines accessibles depuis villes-emplois.com ainsi que tous leurs sous-domaines ou l’application LeCodePartage pour mobiles et tablettes." />
        <Paragraph paragraph="Et anciennement accessibles via les noms de domaines suivants : regionsjob.com, jobtrotter.com, ouestjob.com, estjob.com, nordjob.com, parisjob.com, sudouestjob.com, pacajob.com, rhonealpesjob.com, centrejob.com, cadreo.com, LeCodePartage.io, maformation-ouest.fr, maformation-est.fr, maformation-nord.fr, maformation-paris.fr, maformation-sudouest.fr, maformation-paca.fr, maformation-rhonealpes.fr, maformation-centre.fr, mes-competences.com, ma-formation-dif.fr." />

        <Title title="Article 2 – Objet" />
        <Paragraph paragraph="Les présentes Conditions générales ont pour objet de fixer les conditions d’accès et d’utilisation des Services proposés sur le Site." />

        <Title title="Article 3 – Description des Services" />
        <Paragraph paragraph="En cas de modification de la gratuité ou de la nature des Services proposés sur le Site, l’Utilisateur Candidat et/ou le Client en sera informé dans les meilleurs délais par mail et sera libre de souscrire ou non à ces nouveaux Services et/ou de procéder à la résiliation de son Inscription aux Services modifiés." />
        <Paragraph paragraph="L’Utilisateur Candidat est expressément informé que, dans le cadre de son Inscription, l’ensemble des Services proposé par LeCodePartage lui sera accessible, ce quel que soit le nom de domaine du Site à partir duquel il aura procédé à son Inscription." />
        <Paragraph paragraph="Il lui est en revanche possible, à tout moment, et sur simple modification des paramètres de son Espace personnel, de procéder à la résiliation de son Inscription à l’un ou l’autre ou la totalité des Services." />
        <Paragraph paragraph="Il est entendu que la souscription à ces Services suppose l’acceptation préalable et sans réserve des Conditions Générales de Vente LeCodePartage par le Client." />

        <Title title="Article 4 – Conditions d’accès au Site" />
        <Paragraph paragraph="En accédant au Site, l’Utilisateur reconnait avoir lu, compris et accepté les présentes Conditions Générales et informations légales. En conséquence, l’Utilisateur reconnaît que tout accès au Site le lie contractuellement à LeCodePartage selon les termes des présentes." />
        <Paragraph paragraph="L’Utilisateur doit s’assurer de la compatibilité de son matériel informatique et des logiciels installés pour accéder au Site. L’accès aux Services qui lui sont accessibles est à durée indéterminée, sauf modification du Site par LeCodePartage." />

        <Title title="Article 5 – Inscription – Espace personnel" />
        <Paragraph paragraph="5.1 A l’Inscription de l’Utilisateur, LeCodePartage crée un Espace personnel que l’Utilisateur pourra paramétrer à l’aide de son identifiant – adresse mail – et du mot de passe qu’il aura choisi à réception du mail de LeCodePartage." />
        <Paragraph paragraph="L’Utilisateur est seul responsable de la préservation de la confidentialité de son identifiant et de son mot de passe. Il est totalement responsable de tout acte impliquant l’utilisation de son identifiant et de son mot de passe. En cas de perte ou de vol de l’identifiant et/ou du mot de passe, ou en cas d’utilisation par un tiers non autorisé, l’Utilisateur Candidat ou le Client doit immédiatement contacter le Site à l’adresse suivante lecodepartage@gmail.com." />
        <Paragraph paragraph="5.2 En procédant à son Inscription, l’Utilisateur Candidat souscrit par défaut à l’ensemble des Services visés à l’article 3.2 des présentes « Services gratuits accessibles aux Utilisateurs Candidats », et accepte en conséquence de recevoir l’ensemble des notifications dont il est fait mention à l’article 3.2." />
        <Paragraph paragraph="L’Utilisateur Candidat a la faculté, à tout moment, de modifier les paramètres de son Espace personnel pour adapter les Services à ses besoins." />
        <Paragraph paragraph="5.3 La clôture de l’Espace personnel entraîne la résiliation de l’ensemble des Services." />

        <Title title="Article 6 – Obligations de l’Utilisateur" />
        <Paragraph paragraph="L’Utilisateur ne peut utiliser les Services du Site pour exercer des activités prohibées par la loi et les bonnes mœurs." />
        <Paragraph paragraph="De façon générale, le Site ne peut être utilisé directement ou indirectement à des fins commerciales que par LeCodePartage. La thématique du Site est la vie professionnelle. Le Site ne peut être détourné par quiconque à des fins sans liaison avec celles ci-dessus." />
        <Paragraph paragraph="A son Inscription, l’Utilisateur Candidat ou le Client s’engage à n’indiquer ou à ne diffuser sous quelque forme que ce soit que des informations ou contenus conformes à la réalité et le concernant personnellement. L’Utilisateur Candidat ou le Client ne peut publier d’informations à caractère personnel concernant des tiers, sans leur accord exprès préalable En tout état de cause, la responsabilité de LeCodePartage ne pourra être recherchée à ce titre." />
        <Paragraph paragraph="L’Utilisateur Candidat ou le Client est seul juge des informations qu’il souhaite mettre sur le Site. Il ne doit pas usurper l’identité d’un tiers, ni publier de message à caractère diffamatoire ou injurieux, contraire aux bonnes mœurs ou encore de nature délictuelle." />
        <Paragraph paragraph="L’Utilisateur Candidat s’engage à faire une utilisation raisonnable du Site et de ses Services. En cas d’utilisation anormale des Services, LeCodePartage se réserve le droit de suspendre l’accès au Site et aux Services à l’Utilisateur Candidat, de manière temporaire ou définitive, sans qu’il ne puisse en résulter un quelconque préjudice à son encontre. Un nombre très significatif d’envois de candidatures, sur une durée limitée, et/ou sur des secteurs d’activité divers peut être apparentée à une utilisation anormale des Services. L’appréciation du caractère anormal ou non de l’utilisation des Services reste à la seule appréciation de LeCodePartage." />
        <Paragraph paragraph="En adhérant et en publiant des informations sur lui, l’Utilisateur Candidat ou le Client donne l’autorisation à LeCodePartage, sur le Site ou via des partenaires, de reproduire, de représenter et d’adapter les informations qui le concernent et notamment d’intégrer ces éléments aux différentes pages et rubriques du Site et/ou aux supports de ses partenaires." />

        <Title title="Article 7 – Signalement" />
        <Paragraph paragraph="LeCodePartage assure, à titre gratuit ou payant, le stockage de contenu publié par les Utilisateurs Candidats ou le Client pour le mettre à la disposition des Utilisateurs." />
        <Paragraph paragraph="La notification prend la forme d’un courriel adressé à l’adresse lecodepartage@gmail.com ou par une lettre recommandée avec accusé de réception dans lequel l’Utilisateur indiquera ses noms, prénoms (pour une personne morale, sa dénomination sociale et numéro RCS) et adresse." />
        <Paragraph paragraph="La notification doit comprendre la description des faits litigieux et leur localisation précise dans le Site, les motifs pour lesquels le contenu doit être retiré, comprenant la mention des dispositions légales et des justifications de faits. Dans la mesure du possible, l’Utilisateur doit transmettre la copie de la correspondance adressée à l’auteur des informations ou activités litigieuses demandant leur interruption, leur retrait ou leur modification, ou la justification de ce que l’auteur ou l’éditeur n’a pu être contacté." />
        <Paragraph paragraph="L’attention de l’Utilisateur auteur d’une notification est attirée sur le fait qu’une dénonciation inexacte est susceptible de l’exposer à des sanctions pénales et accepte de garantir le Site contre les conséquences éventuelles d’une notification abusive." />
        <Paragraph paragraph="LeCodePartage s’engage à réagir promptement à toute notification d’un Utilisateur faite dans les formes et manifestement fondée ou révélant des faits constituant à l’évidence une violation d’une règle de droit. LeCodePartage veillera à préserver le cas échéant l’anonymat de l’auteur des propos litigieux, tout en se réservant la faculté de prendre contre lui toute mesure utile, à commencer par son exclusion du Site." />

        <Title title="Article 8 – Eléments distinctifs du Site – Propriété intellectuelle" />
        <Paragraph paragraph="8.1 La charte graphique du Site, ainsi que toutes les marques, logos, contributions, photographies, données, textes, commentaires, illustrations, images animées ou non, séquences vidéo, sons, brevets, données privées, technologies, produits, publications, process ainsi que toutes les applications informatiques qui pourraient être utilisées pour faire fonctionner le Site et plus généralement tous les éléments reproduits ou utilisés sur le Site sont protégés au titre de la propriété intellectuelle par les lois en vigueur." />
        <Paragraph paragraph="Ils sont la propriété pleine et entière de LeCodePartage ou de ses partenaires. Toute reproduction, représentation, utilisation ou adaptation, sous quelque forme que ce soit, de tout ou partie de ces éléments, y compris les applications informatiques, sans l’accord préalable et écrit de LeCodePartage ou du titulaire des droits, sont strictement interdites, à l’exception du téléchargement, de l’affichage et de l’impression des données de ce site à des fins exclusivement privées et non commerciales." />
        <Paragraph paragraph="8.2 L’Utilisateur peut uniquement utiliser le Site aux fins d’accéder aux Services, ce exclusivement à des fins privées et non commerciales." />
        <Paragraph paragraph="Il est notamment expressément reconnu et accepté par l’Utilisateur que l’utilisation de systèmes automatisés ou de logiciels pour extraire des données du Site, en particulier le Contenu et la CVthèque (« capture de données d’écran » / « screen scraping / web scraping» notamment), à quelques fins que ce soit, commerciales ou non, est strictement interdite, à moins que LeCodePartage n’ait conclu une convention de licence écrite autorisant expressément l’Utilisateur à extraire une partie des données du Site." />
        <Paragraph paragraph="8.3 LeCodePartage se réserve la possibilité de résilier de plein droit les présentes et d’engager toute action pour faire sanctionner toute atteinte à ses droits de propriété intellectuelle." />

        <Title title="Article 9 – Responsabilité" />
        <Paragraph paragraph="Pour toutes les obligations qui lui incombent, LeCodePartage est tenue à une obligation de moyens et non de résultat." />
        <LilTitle title="a) Accès et fonctionnement du Site" />
        <Paragraph paragraph="Le Site repose sur des technologies développées par des tiers. Le Site s’engage à mettre en œuvre tous les moyens nécessaires pour assurer un accès continu au Site. Toutefois, en vue d’assurer la maintenance technique du Site, l’accès pourra être interrompu ponctuellement. Dans la mesure du possible, LeCodePartage s’efforcera d’en avertir les Utilisateurs via le Site." />
        <Paragraph paragraph="LeCodePartage décline toute responsabilité en cas d’un éventuel préjudice qui pourrait résulter de l’indisponibilité du Site ou d’un problème de connexion au Site." />
        <Paragraph paragraph="La responsabilité de LeCodePartage ne pourra être davantage engagée, sans que cette liste ne soit exhaustive, du fait de la perte de profits, de clientèle, de données ou informations stockées sur le Site dans le cadre d’un usage professionnel ou commercial, ni du fait de dommages indirects dans le cadre d’un usage à titre personnel." />
        <LilTitle title="b) Contenu et CV publié sur le Site" />
        <Paragraph paragraph="Les informations fournies sur le Site, y compris l’interprétation des réglementations et des usages, ne le sont qu’à titre purement informatif. Pour un conseil personnalisé ou la recherche d’un texte législatif, réglementaire ou contractuel, l’Utilisateur se reportera aux informations officielles des services publics concernés." />
        <Paragraph paragraph="La diffusion d’un Contenu édité par un Client, sur le Site ou par une Notification, ne veut pas dire que ce Contenu est recommandé par LeCodePartage. En conséquence, la responsabilité de LeCodePartage ne peut être engagée en cas de Contenu comportant des allégations fausses, incomplètes ou susceptibles d’induire en erreur." />
        <Paragraph paragraph="LeCodePartage ne peut être tenu pour responsable des fausses déclarations faites par les Clients et les Utilisateurs Candidat. De même, LeCodePartage ne saurait être responsable si les informations communiquées par ces Utilisateurs Candidats et Clients au jour de leur Inscription ou de la publication du message concerné sont devenues obsolètes." />
        <Paragraph paragraph="Les informations et contributions publiées sur le Site relèvent donc de la responsabilité exclusive des Utilisateurs Candidats et des Clients." />
        <Paragraph paragraph="L’Utilisateur Candidat et le Client reconnaissent par ailleurs que LeCodePartage ne saurait être considéré comme responsable de la relation qui pourrait s’instaurer entre l’Utilisateur Candidat et le Client à la suite de l’utilisation des Services." />
        <Paragraph paragraph="La responsabilité de LeCodePartage ne sera engagée que s’il est établi que le dommage dénoncé résulte de sa propre faute et sous réserve qu’il existe un lien de causalité direct et certain entre la faute alléguée et le dommage subi par l’Utilisateur." />
        <Paragraph paragraph="LeCodePartage ne peut être tenu responsable de la perte ou de la destruction du Contenu et/ou du CV." />
        <Paragraph paragraph="Aucune responsabilité de LeCodePartage ne saurait découler de la violation des présentes conditions d’accès et d’utilisation du Site par un Utilisateur." />
        <Paragraph paragraph="En tout état de cause, la responsabilité de LeCodePartage ou de tout autre exploitant futur, ne saurait excéder 150 €, tous chefs de préjudice confondus." />

        <Title title="Article 10 – Prescription" />
        <Paragraph paragraph="Toute action en responsabilité contre LeCodePartage est prescrite un an après la survenance du fait dommageable générateur." />

        <Title title="Article 11 – Divisibilité – Interprétation" />
        <Paragraph paragraph="Le fait pour LeCodePartage ou l’Utilisateur de ne pas exercer, à un moment quelconque, une prérogative reconnue par les présentes Conditions générales ne pourra en aucun cas être interprété comme une renonciation expresse ou tacite au droit d’exercer ladite prérogative à l’avenir." />
        <Paragraph paragraph="Par ailleurs, la reconnaissance de l’invalidité d’une clause n’affectera pas la validité du reste des Conditions Générales et de toute autre clause." />

        <Title title="Article 12 – Loi applicable – Tribunal compétent" />
        <Paragraph paragraph="Les présentes conditions, les annexes et tout document pris en application sont soumis à la loi française. Tout litige dans l’interprétation et l’exécution des présentes sera porté devant les juridictions de droit commun s’agissant d’un Utilisateur non professionnel et devant les tribunaux de RENNES, nonobstant pluralité de défendeurs ou appel en garantie, s’agissant des Utilisateurs professionnels." />
      </div>
      <Breadcrumb />
    </>
  );
};

export const Paragraph: FC<{ paragraph: string }> = ({ paragraph }) => {
  return <p>{paragraph}</p>;
};

export const Link: FC<{ text: string }> = ({ text }) => {
  return (
    <a href={text} className="text-light-blue hover:underline">
      {text}
    </a>
  );
};

export const LilTitle: FC<{ title: string }> = ({ title }) => {
  return <h3 className="text-lg text-light-blue">{title} </h3>;
};

export default Cgu;
