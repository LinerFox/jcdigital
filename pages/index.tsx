import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skillset from "../components/Skillset";
import WorkExperience from "../components/WorkExperience";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";
import { Experience, PageInfo, Project, Skill, Social } from "./../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperience } from "../utils/fetchExperiences";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProject } from "../utils/fetchProjects";
import { fetchSocial } from "../utils/fetchSocials";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
  return (
    <div className='bg-[#2e2e2e] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0'>
      <Head>
        <title>Joseph Chu</title>
      </Head>
      <Header socials={socials} />
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
      <Link href='#hero'>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <ChevronDoubleUpIcon className='w-8 h-8' />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperience();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProject();
  const socials: Social[] = await fetchSocial();
  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 30,
  };
};
