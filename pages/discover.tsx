import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Projects from '../components/projects/Projects';
import Footer from '../components/Footer';
import ProjectsHero from '../components/projects/ProjectsHero';
import Contact from '../components/index/Contact';


export default function Discover() {

    const [darkMode, setDarkMode] = useState(false)

    const setSystemTheme = () => {
        if (
            localStorage.getItem('color-theme') === 'dark' ||
            (!('color-theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark');
            setDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
            setDarkMode(false);
        }
    }

    const observePage = () => {
        const animationObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                } else {
                    // entry.target.classList.remove('animated')
                    null
                }
            })
        })

        const elementsToAnimate = document.querySelectorAll('.to-animate')
        console.log(elementsToAnimate)
        elementsToAnimate.forEach((element) => animationObserver.observe(element))
    }

    useEffect(() => {
        observePage();
        setSystemTheme();
    }, []);

    return (
        <div onLoad={() => { observePage() }}>
            <Head>
                <title>Benjamin Goddard | Frontend Designer and Developer</title>
                <meta name="description" content="Frontend developer, Designer, and Tech enthusiast." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                <ProjectsHero />
                <Projects />
                <Contact />
                <Footer />
            </div>
        </div>
    )
}