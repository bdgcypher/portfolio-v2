import React from "react";
import TypeIt from "typeit-react";

export default function Testimonials() {

    const startAnimation = () => {
        const elementsToAnimate = document.querySelectorAll(".testimonial")
        elementsToAnimate.forEach((element) => element.classList.add("animated"));
        console.log(elementsToAnimate)
    }

    return (
        <div className="bg-white dark:bg-black">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <h2 className="to-animate from-bottom max-w-lg mb-6 font-sans text-4xl font-semibold leading-none tracking-tight text-black dark:text-white sm:text-4xl md:mx-auto">
                        Testimonials
                    </h2>

                    <div className="hidden lg:flex flex-col mb-10 text-gray-400 text-md md:text-xl">
                        <TypeIt options={{ speed: 12, waitUntilVisible: true, lifeLike: true }}
                            getAfterInit={(instance) => {
                                instance.type("&#47;&#47; Maybe some people I've worked with have some nice things to say...").pause(2000).delete().pause(500).type("&#47;&#47; People I've worked with have some nice things to say!").exec(() => startAnimation());
                                return instance;
                            }}
                        />
                    </div>
                    <div className="flex flex-col lg:hidden mb-10 text-gray-400 text-md md:text-xl">
                        <TypeIt options={{ speed: 12, waitUntilVisible: true, lifeLike: true }}
                            getAfterInit={(instance) => {
                                instance.type("&#47;&#47; Maybe some people I've worked with have <br/>&#47;&#47; some nice things to say...").pause(2000).delete().delete(1).pause(500).type("&#47;&#47; People I've worked with have <br/>&#47;&#47; some nice things to say!").exec(() => startAnimation());
                                return instance;
                            }}
                        />
                    </div>
                </div>
                <div className="grid gap-8 space-y-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                    <div className="testimonial from-bottom first flex">
                        <div>
                            <div className="mb-2">
                                <h1 className="inline-block text-4xl font-bold leading-5 text-black dark:text-white">
                                    Creative and Clever
                                </h1>
                            </div>
                            <p className="mb-5 text-xl text-gray-700 dark:text-gray-300">
                                Ben is a bullet bike of a frontend designer and developer. He's a great team player, incredible collaborator,
                                very creative and clever, and does excellent work. We're really grateful to have him working with us.
                            </p>
                            <div className="flex items-center">
                                <img
                                    src="/ScottRafferty.png"
                                    alt="avatar"
                                    className="object-cover mr-3 w-16 h-16 rounded-full shadow-sm"
                                />
                                <div>
                                    <p className="font-semibold text-gray-800 dark:text-gray-200 transition-colors duration-200 hover:text-primary">
                                        Scott Rafferty
                                    </p>
                                    <p className="text-sm font-medium leading-4 text-gray-700 dark:text-gray-300">
                                        CoFounder, Branch LLC.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial from-bottom second flex">
                        <div>
                            <div className="mb-2">
                                <h1 className="inline-block text-4xl font-bold leading-5 text-black dark:text-white">
                                    Excellent
                                </h1>
                            </div>
                            <p className="mb-5 text-xl text-gray-700 dark:text-gray-300">
                                Ben  is a clear communicator with the tenacity and confidence to really dig
                                in to a task and the collaborative mindset that's needed to produce excellent work.
                            </p>
                            <div className="flex items-center">
                                <img
                                    src="/TerralFox.png"
                                    alt="avatar"
                                    className="object-cover mr-3 w-16 h-16 rounded-full shadow-sm"
                                />
                                <div>
                                    <p className="font-semibold text-gray-800 dark:text-gray-200 transition-colors duration-200 hover:text-primary">
                                        Terral Fox
                                    </p>
                                    <p className="text-sm font-medium leading-4 text-gray-700 dark:text-gray-300">
                                        Owner, Origins Family Fitness LLC.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial from-bottom third flex">
                        <div>
                            <div className="mb-2">
                                <h1 className="inline-block text-4xl font-bold leading-5 text-black dark:text-white">
                                    So Awesome
                                </h1>
                            </div>
                            <p className="mb-5 text-xl text-gray-700 dark:text-gray-300">
                                It was so awesome to work with Ben. He has a great work ethic and a fun personality. Always eager to please and looking for feedback on things to improve.
                            </p>
                            <div className="flex items-center">
                                <img
                                    src="/NickLagnese.png"
                                    alt="avatar"
                                    className="object-cover mr-3 w-16 h-16 rounded-full shadow-sm"
                                />
                                <div>
                                    <p className="font-semibold text-gray-800 dark:text-gray-200 transition-colors duration-200 hover:text-primary">
                                        Nick Lagnese
                                    </p>
                                    <p className="text-sm font-medium leading-4 text-gray-700 dark:text-gray-300">
                                        CoFounder and CEO, Transparency in Politics INC.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};