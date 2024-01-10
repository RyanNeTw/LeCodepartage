import { FC } from 'react';
import Title from './Title';

const Testimonial: FC<{
    direction?: boolean;
    title: string;
    text: string;
    image?: string;
}> = ({ direction = false, title, text, image }) => {
    const imageUrl = window.location.origin + `/images/${image}`;
    return (
        <>
            <section
                className={`flex ${
                    direction ? 'flex-col-reverse sm:flex-row' : 'flex-col-reverse sm:flex-row-reverse'
                } justify-between gap-12`}
            >
                <div className="flex flex-col gap-2 w-full sm:w-1/2 py-small">
                    <Title title={title} />
                    <p className="text-black-color">{text} </p>
                </div>
                {image ? (
                    <>
                        <div className="relative w-full h-48 sm:w-1/2">
                            <div
                                className="w-full h-full bg-center bg-no-repeat bg-cover rounded-3xl group overflow-hidden shadow-2xl"
                                style={{ backgroundImage: `url(${imageUrl})` }}
                            >
                                <div className="absolute w-full h-full bg-black-color opacity-60 hidden group-hover:block transition"></div>
                                <h4 className="text-white-color absolute text-2xl font-bold hidden group-hover:block transition top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    LeCodePartagé
                                </h4>
                            </div>
                            <img
                                src="./images/simpleLogo.png"
                                alt="LeCodePartagé's logo"
                                className={`absolute -top-4 w-16 z-50 ${direction ? '-right-4' : '-left-4'}`}
                            />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="w-1/2 rounded-lg animate-pulse bg-grey"></div>
                    </>
                )}
            </section>
        </>
    );
};

export default Testimonial;
