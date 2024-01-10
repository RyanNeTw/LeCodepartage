import { FC, useEffect, useState } from 'react';
import Arguments from '../../components/about/Arguments';
import HeroStats from '../../components/about/HeroStats';
import MembersList from '../../components/about/MembersList';
import Breadcrumb from '../../components/Breadcrumb';
import Hero from '../../components/Hero';
import Testimonial from '../../components/Testimonial';
import Title from '../../components/Title';
import getMembers from '../../functions/getData';
import { MembersType } from '../../types';
import { LinkedinButton } from '../main';

type WhyUsType = {
    title: string;
    text: string;
};

function AboutPage() {
    const text1: string =
        "Notre blog dédié aux projets open source français a débuté comme une idée partagée par un groupe de passionnés de la technologie. Convaincus de l'importance des contributions françaises à l'open source, nous avons rassemblé une équipe diversifiée. Notre objectif était de créer une plateforme mettant en lumière ces projets et leurs créateurs.";

    const text2: string =
        "Nous sommes une équipe de sept développeurs passionnés par l'open source français. Notre mission principale est de partager cette passion avec d'autres personnes partout dans le monde. Réunis par notre amour commun pour la technologie et l'innovation, nous nous sommes engagés à mettre en lumière les projets open source créatifs et innovants qui émergent de la communauté française.";

    const WhyUs: WhyUsType[] = [
        {
            title: '100% Français',
            text: 'Notre focus est unique, nous mettons en avant exclusivement les projets open source français.',
        },
        {
            title: 'Équipe de 6 Développeurs',
            text: 'Nous sommes une équipe soudée de 6 développeurs passionnés, dédiée à la production de contenu de qualité.',
        },
        {
            title: 'Fréquence de Publication',
            text: " Contrairement à d'autres blogs, nous publions régulièrement au moins un à deux articles par semaine.",
        },
        {
            title: 'Collaboration sur GitHub',
            text: "Nous ne nous contentons pas d'écrire. Rejoignez-nous sur GitHub pour collaborer sur des projets.",
        },
        {
            title: 'Accessible et Ouvert',
            text: 'Notre travail est transparent et nous valorisons la collaboration communautaire.',
        },
    ];

    const [members, setMembers] = useState<MembersType[]>([]);

    useEffect(() => {
        getMembers().then((data) => setMembers(data.data));
    }, []);

    return (
        <>
            <Hero image="computeWithGuy.svg" reactElement={<HeroElement />} />
            <div className="flex flex-col gap-12 py-medium">
                <div className="px-8 lg:px-pagepx-page flex flex-col gap-12">
                    <Testimonial title="Notre histoire :" text={text1} image="teamStudying.png" />
                    <Testimonial title="En quelques mots :" image="team.png" text={text2} direction={true} />
                </div>
                <HeroStats />
                <div className="px-8 lg:px-page flex flex-col gap-12">
                    <div className="flex flex-col gap-4">
                        <Title title="Pourquoi nous sommes différents" />
                        <ul className="flex flex-col gap-2">
                            {WhyUs?.map((e, index) => (
                                <li key={index}>
                                    <ListElement title={e.title} text={e.text} />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Arguments />
                    <MembersList members={members} />
                </div>
            </div>
            <Breadcrumb />
        </>
    );
}

const ListElement: FC<{ title: string; text: string }> = ({ title, text }) => {
    return (
        <>
            <div className="flex flex-col w-full">
                <h4 className="text-light-blue text-lg flex flex-row gap-1 items-center">
                    <div className="w-2 h-2 bg-light-blue rounded-full"></div> {title} :{' '}
                </h4>
                <p>{text}</p>
            </div>
        </>
    );
};

function HeroElement() {
    return (
        <>
            <div className="flex flex-col gap-4 items-start">
                <h1 className="text-light-blue font-bold text-4xl">Découvrez nous !</h1>
                <p className="w-2/3 text-white-color">
                    Explorez l'histoire fascinante et rencontrez l'équipe talentueuse de{' '}
                    <span className="text-light-red">LeCodePartagé</span> pour approfondir votre compréhension de notre
                    univers unique.
                </p>
                <LinkedinButton />
            </div>
        </>
    );
}

export default AboutPage;
