import { useEffect, useState } from 'react';
import getMembers, { getArticles, getEvents, getMemberByField } from '../../functions/getData';
import { HeroStatsText, MembersType } from '../../types';
import AuthorCard from '../AuthorCard';

function HeroStats() {
    const [stats, setStats] = useState<{ title: string; text: string }[]>([]);

    const [author, setAuthor] = useState<MembersType | null>(null);
    useEffect(() => {
        getMemberByField('slug', 'ryan-ez-zerqti').then((data) => setAuthor(data.data[0]));
        Promise.all([getMembers(), getArticles(), getEvents()]).then(([members, articles, events]) => {
            setStats([
                {
                    title: getCleanNumber(members.meta.pagination.total),
                    text: HeroStatsText.MEMBERS,
                },
                {
                    title: getCleanNumber(articles?.meta?.pagination?.total),
                    text: HeroStatsText.ARTICLES,
                },
                {
                    title: getCleanNumber(events?.meta?.pagination?.total),
                    text: HeroStatsText.EVENTS,
                },
            ]);
        });
    }, []);

    return (
        <>
            <section className="bg-dark-blue flex flex-col sm:flex-row items-center sm:justify-between px-8 lg:px-page py-small gap-16">
                <div className="bg-white-color flex flex-col justify-between gap-16 p-small rounded-lg w-full sm:w-2/4">
                    {stats?.map((stat, index) => (
                        <div className="flex flex-col justify-start" key={index}>
                            <h4 className="text-light-red text-xl font-bold">{stat.title}</h4>
                            <h5 className="text-black-color">{stat.text}</h5>
                        </div>
                    ))}
                </div>

                <div className="flex flex-row items-stretch">
                    <img src="./images/arrowLeft.svg" className="w-8 sm:w-16 self-start" />
                    <div className="self-center flex flex-col gap-4">
                        <p className="text-white-color">
                            Notre mission est simple : éclairer, informer et connecter la communauté de développeurs
                            autour des projets <span className="text-light-red">open source</span> qui façonnent
                            l'avenir de notre industrie. Nous pensons que le partage de connaissances et la
                            collaboration sont les clés pour faire avancer la technologie, et nous sommes ici pour
                            faciliter cela.
                        </p>
                        <AuthorCard author={author} />
                    </div>
                    <img src="./images/arrowRight.png" className="w-8 sm:w-16 self-end" />
                </div>
            </section>
        </>
    );
}

const getCleanNumber = (number: number) => {
    if (number < 10) {
        return `00${number}`;
    } else if (number >= 10 && number < 100) {
        return `0${number}`;
    }
    return number.toString();
};

export default HeroStats;
