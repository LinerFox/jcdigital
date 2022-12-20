import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skillset from "../components/Skillset";
import WorkExperience from "../components/WorkExperience";

const Home: NextPage = () => {
  return (
    <div className='bg-[#2e2e2e] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Joseph Chu</title>
      </Head>
      <Header />
      <section id='hero' className='snap-start'>
        <Hero />
      </section>
      <section id='about' className='snap-center'>
        <About />
      </section>
      {/* Blog */}
      <section id='experience' className='snap-center'>
        <WorkExperience />
      </section>
      <section id='skills' className='snap-start'>
        <Skillset />
      </section>
      {/* Projects */}
      <section id='projects' className='snap-start'>
        <Projects />
      </section>
      {/* Contact Me */}
      <section id='contact' className='snap-start'>
        <Contact />
      </section>
    </div>
  );
};

export default Home;
