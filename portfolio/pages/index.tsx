import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import type { NextPage } from "next";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0'>
      <Head>
        <title>Joe&apos;s Portfolio</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon-32x32.png' />
      </Head>
      <Header />
      <section id='hero' className='snap-start'>
        <Hero />
      </section>
      <section id='about' className='snap-center'>
        <About />
      </section>
      <section id='experience' className='snap-center'>
        <Experience />
      </section>
      <section id='skills' className='snap-start'>
        <Skills />
      </section>
      <section id='projects' className='snap-start'>
        <Projects />
      </section>
      {/* Contact */}
      <section id='contact' className='snap-center'>
        <Contact />
      </section>
    </div>
  );
};

export default Home;
