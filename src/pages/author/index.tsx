import AuthorCard from '../../components/AuthorCard';
import Hero from '../../components/Hero';
import { FC, useEffect, useState } from 'react';
import ArticleCard from '../../components/ArticleCard';
import Breadcrumb from '../../components/Breadcrumb';
import { ArticlesType, MembersType } from '../../types';
import { getArticlesByField, getMemberByField } from '../../functions/getData';

const AuthorPage = () => {
    const [author, setAuthor] = useState<MembersType | null>(null);
    const [articles, setArticles] = useState<ArticlesType[] | null>(null);

    useEffect(() => {
        const path = window.location.href.split('/');
        getMemberByField('slug', path[4]).then((data) => setAuthor(data.data[0]));
    }, []);

    useEffect(() => {
        if (author) {
            const slug = author.attributes?.slug || ''; // Assign an empty string if slug is undefined
            getArticlesByField('[member][slug]', slug).then((data) => setArticles(data?.data));
        }
    }, [author]);

    return (
        <>
            <Hero reactElement={<HeroAuthor author={author} />} />
            {articles && articles.length > 0 ? (
                <div className="px-8 lg:px-page py-medium">
                    <ArticleCard title="Dernier article publié :" isBig={true} articles={articles} />
                    <ArticleCard title="Ses articles { } :" articles={articles} />
                    <ArticleCard title="Au cas où vous l’auriez manqué :" twice={true} articles={articles} />
                </div>
            ) : (
                <div className="h-screen flex justify-center items-center">
                    <h2 className="text-xl">{author?.attributes?.fullName} n'a pas d'article</h2>
                </div>
            )}
            <Breadcrumb />
        </>
    );
};

const HeroAuthor: FC<{
    author: MembersType | null;
}> = ({ author }) => {
    return (
        <>
            <AuthorCard
                author={author}
                isRow={true}
                reactComponent={
                    <h4 className="text-white-color">Articles: {author?.attributes?.articles?.data?.length}</h4>
                }
            />
        </>
    );
};

export default AuthorPage;
