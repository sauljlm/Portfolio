"use client"
import Experience from '@/components/Experience';
import Project from '@/components/Project';
import Technology from '@/components/Technology';
import Image from 'next/image'
import { useEffect, useState } from 'react';

function Homepage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data/en.json')
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error('Error fetching the JSON file:', error));
  }, []);

  return (
    <div className="container mx-auto wrapper flex items-center flex-col">
      <section className="flex flex-col-reverse w-11/12 sm:w-4/5 md:flex-row xl:w-1/2 mt-20 sm:mt-48">
        <div className="flex md:w-2/3 flex-col">
          <h1 className="font-ailerons text-primary relative right-3 text-5xl sm:text-6xl">Saul Lopez</h1>
          <h2 className="text-2xl pt-2 relative right-0.5">Full Stack Developer</h2>
          <p className="pt-5 text-balance">
          Full stack developer passionate about learning and developing web solutions, looking for a company where I can exploit my skills and expand my knowledge through new challenges.</p>
          <div className="pt-7 flex justify-between">
            <div className="flex flex-col sm:flex-row">
              <button className="bg-primary hover:bg-secondary active:scale-105 py-2 px-4 rounded-full sm:mr-4 my-1"><a href="https://www.linkedin.com/in/saul-lopez-715536165/" target="_blank">LinkedIn</a></button>
              <button className="bg-primary hover:bg-secondary active:scale-105 py-2 px-4 rounded-full mt-4 sm:my-1 "><a href="https://github.com/sauljlm" target="_blank">GitHub</a></button>
            </div>
            <button className='bg-primary hover:bg-secondary active:scale-105 rounded-lg py-2 px-4 sm:mr-5 max-h-10 sm:max-h-full'><a href="/img/Sauls-resume.pdf" target="_blank">Download CV</a></button>
          </div>
        </div>
        <div className="flex w-1/3">
          <Image src="/img/icon.svg" className="profile-photo" width={250} height={230} alt=''/>
        </div>
      </section>
      <section className="flex w-11/12 sm:w-4/5 xl:w-1/2 mt-28 sm:mt-48 flex-col" id='experience'>
        <h2 className="font-ailerons relative right-2 text-4xl mb-8">Experience</h2>
        <div className="space-y-12">
          {
            data?.experience?.map((item, index) => (
              <Experience data={item} key={index}/>
            ))
          }
        </div>
      </section>

      <section className="flex w-11/12 sm:w-4/5 xl:w-1/2 mt-28 sm:mt-48 flex-col" id='projects'>
        <h2 className="font-ailerons relative right-2 text-4xl mb-8">Projects</h2>
        <div>
          {
            data?.projects?.map((item, index) => (
              <Project data={item} key={index} id={index}/>
            ))
          }
        </div>
      </section>

      <section className="flex w-11/12 sm:w-4/5 xl:w-1/2 mt-28 sm:mt-48 flex-col" id='technologies'>
        <div className="flex flex-col w-full h-1/2">
          <h2 className="font-ailerons relative right-2 text-4xl mb-8">Technologies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {
              data?.technologies?.map((item, index) => (
                <Technology data={item} key={index}/>
              ))
            }
          </div>
        </div>
      </section>

      <section className="flex flex-col w-11/12 sm:w-4/5 xl:w-1/2 mt-28 sm:mt-48" id='about-me'>
        <h2 className="font-ailerons relative right-2 text-4xl mb-8">About me</h2>
        <div className='flex flex-col-reverse sm:flex-row'>
          <div className="flex sm:w-2/3 flex-col">
            <p className="pt-2 text-balance">Hello! I am Saul Lopez, a <span className="text-orange">full stack developer and Software Engineering student</span>, with a deep passion for continuous learning and creating innovative web solutions from web pages to functional applications.</p>
            <p className="pt-2 text-balance">My focus is on <span className="text-orange">combining technical and creative skills to develop robust and scalable applications</span> that respond to current market needs.</p>
            <p className="pt-2 text-balance">I am constantly looking for a dynamic company where I can not only apply my knowledge and previous experiences, but also expand them by facing new challenges.</p>
            <p className="pt-2 text-balance">My goal is <span className="text-orange">contribute to the success of the company</span> while I continue to grow professionally, learning from each project and collaborating with talented teams.</p>
          </div>
          <div className="flex primary-shadow w-fit h-fit rounded-full ml-2 mb-6 sm:mb-0">
            <Image src="/img/photo.png" className="profile-photo" width={250} height={250} alt=''/>
          </div>
        </div>
      </section>

      {/* return (
        <section className={sectionClass} id={id}>
          <h2 className={title.className}>{title.text}</h2>
          <div className='flex'>
            <div className="flex w-2/3 flex-col">
              {content.description.map((paragraph, index) => (
                <p key={index} className={content.paragraphClass}>
                  {paragraph.text}{' '}
                  {paragraph.highlight && (
                    <span className={paragraph.highlightClass}>{paragraph.highlight}</span>
                  )}
                </p>
              ))}
            </div>
            <div className={image.containerClass}>
              <Image src={image.src} className="profile-photo" width={250} height={250} alt='' />
            </div>
          </div>
        </section>
      ); */}

      <footer className="opacity-80 m-4 mt-16 w-full mx-auto container w-11/12 sm:w-4/5 xl:w-1/2 mb-10 flex justify-center"> 
        <div className="rounded-lg w-full max-w-screen-xl mx-auto flex items-center justify-between py-4"> 
          <span className="text-sm sm:text-center text-zinc-200/90">© 2024 Almost all rights reserved</span> 
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white/90 sm:mt-0"> 
            <li><a href="/#about-me" className="hover:underline me-4 md:me-6">About me</a></li> 
            <li><a id="contacto" href="mailto:saulsjlm2@gmail.com" className="hover:underline">Contact</a></li>
          </ul> 
        </div> 
      </footer>
    </div>
  )
}

export default Homepage;