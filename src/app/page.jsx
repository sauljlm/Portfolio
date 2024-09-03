import Image from 'next/image'

function Homepage() {
  return (
    <div className="container mx-auto wrapper flex items-center flex-col">
      <section className="flex w-2/3 sm:w-4/5 xl:w-1/2 mt-48">
        <div className="flex w-2/3 flex-col">
          <h1 className="font-ailerons text-primary relative right-3 text-6xl">Saul Lopez</h1>
          <h2 className="text-2xl pt-2 relative right-0.5">Full Stack Developer</h2>
          <p className="pt-5 text-balance">
          Full stack developer passionate about learning and developing web solutions, looking for a company where I can exploit my knowledge and expand my knowledge through new challenges.</p>
          <div className="pt-7 flex justify-between">
            <div>
              <button className="bg-primary hover:bg-secondary active:scale-105  py-2 px-4 rounded-full mr-4 my-1"><a href="https://www.linkedin.com/in/saul-lopez-715536165/" target="_blank">LinkedIn</a></button>
              <button className="bg-primary hover:bg-secondary active:scale-105 py-2 px-4 rounded-full"><a href="https://github.com/sauljlm" target="_blank">GitHub</a></button>
            </div>
            <button className='bg-primary hover:bg-secondary active:scale-105 rounded-lg py-2 px-4 mr-5'><a href="/img/Sauls-resume.pdf" target="_blank">Download CV</a></button>
          </div>
        </div>
        <div className="flex w-1/3">
          <Image src="/img/icon.svg" className="profile-photo" width={250} height={230} alt=''/>
        </div>
      </section>
      <section className="flex w-2/3 sm:w-4/5 xl:w-1/2 mt-48 flex-col" id='experience'>
        <h2 className="font-ailerons relative right-2 text-4xl mb-8">Experience</h2>
        <div className="space-y-12">
          <article className="flex items-start">
            <div className="flex-shrink-0 mr-6">
              <span className="flex items-center justify-center w-6 h-6 bg-dark-600 rounded-full bg-gray-600">
                <svg aria-hidden="true" className="w-4 h-4 text-primary-100 dark:text-primary-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                </svg>
              </span>
            </div>
            <div className="flex flex-col">
              <h3 className="text-ternary text-lg font-semibold">
                Senior Content Editor<span className="font-normal text-orange text-sm pl-2"> Publicis Global Delivery</span>
              </h3>
              <p className="text-gray-400 text-sm">November 2022 - Present</p>
              <p className="mt-2 text-balance">
                I have worked as a Senior Content Editor leading the web development side, guaranteeing quality pages through good practices and my knowledge in web development.
              </p>
            </div>
          </article>

          <article className="flex items-start">
            <div className="flex-shrink-0 mr-6">
              <span className="flex items-center justify-center w-6 h-6 bg-dark-600 rounded-full bg-gray-600">
                <svg aria-hidden="true" className="w-4 h-4 text-primary-100 dark:text-primary-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                </svg>
              </span>
            </div>
            <div className="flex flex-col">
              <h3 className="text-ternary text-lg font-bold">
                Content Editor <span className="font-normal text-orange text-sm pl-2"> Publicis Global Delivery</span>
              </h3>
              <p className="text-gray-400 text-sm">March 2020 - November 2022</p>
              <p className="mt-2 text-balance">
              I had the opportunity to work alongside a great team of web developers to develop and manage web pages ensuring a high quality user experience.
              </p>
            </div>
          </article>

          <article className="flex items-start">
            <div className="flex-shrink-0 mr-6">
              <span className="flex items-center justify-center w-6 h-6 bg-dark-600 rounded-full bg-gray-600">
                <svg aria-hidden="true" className="w-4 h-4 text-primary-100 dark:text-primary-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                </svg>
              </span>
            </div>
            <div className="flex flex-col">
              <h3 className="text-ternary text-lg font-bold">
                Junior Content Editor <span className="font-normal text-orange text-sm pl-2"> Hangar</span>
              </h3>
              <p className="text-gray-400 text-sm">December 2019 - March 2020</p>
              <p className="mt-2 text-balance">
              I worked as a Junior content editor in a development team, in charge of developing, modifying and managing web pages using AEM in conjunction with the development and quality control team.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="flex w-2/3 sm:w-4/5 xl:w-1/2 mt-48 flex-col" id='projects'>
        <h2 className="font-ailerons relative right-2 text-4xl mb-8">Projects</h2>
        <div>
          <article className="flex mb-20 flex-col-reverse sm:flex-row">
            <div className="w-auto mt-5 sm:w-3/5 sm:mt-0 pr-2">
              <h3 className="text-ternary text-lg font-bold">Element Dungeon</h3>
              <p className="mt-2 text-balance">
              A Zelda-inspired RPG video game with 4 different cabins, weapons, shop, levels and others. Developed in Java, applying design patterns and libGDX was used for the entire rendering part of the RPG. Carried out as part of a project at Cenfotec in collaboration with 2 colleagues.
              </p>
              <div className="flex mt-4 justify-between">
                <ul className="flex">
                  <li className="bg-gray-600 py-1 px-3 rounded-full mr-4 my-1 text-xs">Java</li>
                  <li className="bg-gray-600 py-1 px-3 rounded-full mr-4 my-1 text-xs">LibGDX</li>
                </ul>
                
                <ul className="flex mx-2">
                  <li className="bg-primary py-1 px-3 rounded-md mr-4 my-1 text-xs hover:bg-secondary active:scale-105">
                    <a href="https://github.com/sauljlm/ElementDongeon" target="_blank">GitHub</a>
                  </li>
                  <li className="bg-primary py-1 px-3 rounded-md mr-4 my-1 text-xs hover:bg-secondary active:scale-105">
                    <a href="https://elementdungeon.com/" target="_blank">Page</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-auto w-2/5 mt-10">
              <Image src="/img/projects/ElementDungeon1.png" className="hover:scale-125 hover:rounded-lg transition w-full" width={300} height={230} alt=''/>
            </div>
          </article>

          <article className="flex mb-20 flex-col sm:flex-row">
            <div className="w-auto w-2/5 mt-10">
              <Image src="/img/projects/CondoHub.png" className="hover:scale-125 hover:rounded-lg transition w-full" width={300} height={230} alt=''/>
            </div>
            <div className="w-auto mt-5 sm:w-3/5 sm:mt-0 pl-0 sm:pl-8">
              <h3 className="text-ternary text-lg font-bold">Condo Hub</h3>
              <p className="mt-2 text-balance">
              A web application designed for condominium management, where users can register and reserve condominium amenities, as well as administrators can create and manage different amenities, in addition to publishing news. Carried out as part of a project at Cenfotec in collaboration with 2 colleagues.
              </p>
              <div className="flex mt-4 justify-between">
                <ul className="flex">
                  <li className="bg-gray-600 py-1 px-3 rounded-full mr-4 my-1 text-xs">React</li>
                  <li className="bg-gray-600 py-1 px-3 rounded-full mr-4 my-1 text-xs">Firebase</li>
                </ul>
                
                <ul className="flex mx-2">
                  <li className="bg-primary py-1 px-3 rounded-md mr-4 my-1 text-xs hover:bg-secondary active:scale-105">
                    <a href="https://github.com/sauljlm/CondoHub/tree/development" target="_blank">GitHub</a>
                  </li>
                  <li className="bg-primary py-1 px-3 rounded-md mr-4 my-1 text-xs hover:bg-secondary active:scale-105">
                    <a href="https://condoplus-6ad1a.web.app/app" target="_blank">Page</a>
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <article className="flex mb-20 flex-col-reverse sm:flex-row">
            <div className="w-auto mt-5 sm:w-3/5 sm:mt-0 pr-2">
              <h3 className="text-ternary text-lg font-bold">SIMEPCI</h3>
              <p className="mt-2 text-balance">
              A web application designed for hospital management, where administrators, doctors, secretaries and other administrators can manage it, create appointment slots, create files, recipes, as well as patients can make reservations, view their prescriptions and make payments. Among other functions. Carried out as part of a project at Cenfotec in collaboration with 2 colleagues.
              </p>
              <div className="flex mt-4 justify-between">
                <ul className="flex">
                  <li className="bg-gray-600 py-1 px-3 rounded-full mr-4 my-1 text-xs">C#</li>
                  <li className="bg-gray-600 py-1 px-3 rounded-full mr-4 my-1 text-xs">.Net</li>
                  <li className="bg-gray-600 py-1 px-3 rounded-full mr-4 my-1 text-xs">SQL</li>
                </ul>
                
                <ul className="flex mx-2">
                  <li className="bg-primary py-1 px-3 rounded-md mr-4 my-1 text-xs hover:bg-secondary active:scale-105">
                    <a href="https://github.com/sauljlm/SIMEPCI" target="_blank">GitHub</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-auto w-2/5 mt-10">
              <Image src="/img/projects/SIMEPCI.png" className="hover:scale-125 hover:rounded-lg transition w-full" width={300} height={230} alt=''/>
            </div>
          </article>

          <article className="flex mb-20 flex-col sm:flex-row">
            <div className="w-auto w-2/5 mt-10">
              <Image src="/img/projects/MenosOrdinario.png" className="hover:scale-125 hover:rounded-lg transition w-full" width={300} height={230} alt=''/>
            </div>
            <div className="w-auto mt-5 sm:w-3/5 sm:mt-0 pl-0 sm:pl-8">
              <h3 className="text-ternary text-lg font-bold">Menos Ordinario</h3>
              <p className="mt-2 text-balance">
              A web application designed as a blog where you can register as a user, make publications, edit and delete them, as well as view those of other users.
              </p>
              <div className="flex mt-4 justify-between">
                <ul className="flex flex-wrap">
                  <li className="bg-gray-600 py-1 px-3 rounded-full mr-4 my-1 text-xs">JavaScript</li>
                  <li className="bg-gray-600 py-1 px-3 rounded-full mr-4 my-1 text-xs">HTML</li>
                  <li className="bg-gray-600 py-1 px-3 rounded-full mr-4 my-1 text-xs">CSS</li>
                  <li className="bg-gray-600 py-1 px-3 rounded-full mr-4 my-1 text-xs">Node.js</li>
                  <li className="bg-gray-600 py-1 px-3 rounded-full mr-4 my-1 text-xs">MongoDB</li>
                </ul>
                
                <ul className="flex mx-2">
                  <li className="max-h-6 bg-primary py-1 px-3 rounded-md mr-4 my-1 text-xs hover:bg-secondary active:scale-105">
                    <a href="https://github.com/sauljlm/Menos-Ordinario" target="_blank">GitHub</a>
                  </li>
                  <li className="max-h-6 bg-primary py-1 px-3 rounded-md mr-4 my-1 text-xs hover:bg-secondary active:scale-105">
                    <a href="https://menos-ordinario.netlify.app/" target="_blank">Page</a>
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <article className="flex flex-col-reverse sm:flex-row">
            <div className="w-auto mt-5 sm:w-3/5 sm:mt-0 pr-2">
              <h3 className="text-ternary text-lg font-bold">Nike Clon</h3>
              <p className="mt-2 text-balance">
              A clone website of the Nike store, where you can view the products with their characteristics and photographs to later add them to your cart and proceed with your purchase.
              </p>
              <div className="flex mt-4 justify-between">
                <ul className="flex">
                  <li className="bg-gray-600 py-1 px-3 rounded-full mr-4 my-1 text-xs">React</li>
                </ul>
                
                <ul className="flex mx-2">
                  <li className="bg-primary py-1 px-3 rounded-md mr-4 my-1 text-xs hover:bg-secondary active:scale-105">
                    <a href="https://github.com/sauljlm/react-shop" target="_blank">GitHub</a>
                  </li>
                  <li className="bg-primary py-1 px-3 rounded-md mr-4 my-1 text-xs hover:bg-secondary active:scale-105">
                    <a href="https://nick-shop.netlify.app/" target="_blank">Page</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-auto sm:w-2/5 mt-10">
              <Image src="/img/projects/Nike.png" className="hover:scale-125 hover:rounded-lg transition w-full" width={300} height={230} alt=''/>
            </div>
          </article>
        </div>
      </section>

      <section className="flex w-2/3 sm:w-4/5 xl:w-1/2 mt-48 flex-col" id='technologies'>
        <div className="flex flex-col w-full h-1/2">
          <h2 className="font-ailerons relative right-2 text-4xl mb-8">Technologies</h2>
          <div className="grid grid-cols-2 gap-6">
            {/* Front End Section */}
            <article className="px-4 mb-2 bg-background secondary-shadow p-5 rounded-2xl">
              <h3 className="text-ternary text-xl font-bold text-center">Front End</h3>
              <ul className="flex w-full flex-wrap">
                <li className="p-5 w-1/3 aspect-square flex flex-col items-center justify-center">
                  <Image src="/img/technologies/html-5.png" alt="Nombre" width={50} height={50} className="rounded-md object-cover" />
                  <p className='pt-3 text-sm'>HTML</p>
                </li>
                <li className="p-5 w-1/3 aspect-square flex flex-col items-center justify-center">
                  <Image src="/img/technologies/css-3.png" alt="Nombre" width={50} height={50} className="rounded-md object-cover" />
                  <p className='pt-3 text-sm'>CSS</p>
                </li>
                <li className="p-5 w-1/3 aspect-square flex flex-col items-center justify-center">
                  <Image src="/img/technologies/js.png" alt="Nombre" width={50} height={50} className="rounded-md object-cover" />
                  <p className='pt-3 text-sm'>JavaScript</p>
                </li>
                <li className="p-5 w-1/3 aspect-square flex flex-col items-center justify-center">
                  <Image src="/img/technologies/react-js.png" alt="Nombre" width={50} height={50} className="rounded-md object-cover" />
                  <p className='pt-3 text-sm'>ReactJS</p>
                </li>
                <li className="p-5 w-1/3 aspect-square flex flex-col items-center justify-center">
                  <Image src="/img/technologies/next-js.png" alt="Nombre" width={50} height={50} className="rounded-md object-cover" />
                  <p className='pt-3 text-sm'>Next.js</p>
                </li>
                <li className="p-5 w-1/3 aspect-square flex flex-col items-center justify-center">
                  <Image src="/img/technologies/Tailwind-CSS.png" alt="Nombre" width={50} height={50} className="rounded-md object-cover" />
                  <p className='pt-3 text-sm w-fit'>TailwindCSS</p>
                </li>
              </ul>
            </article>
            {/* Back End Section */}
            <article className="px-4 mb-2 bg-background secondary-shadow p-5 rounded-2xl">
              <h3 className="text-ternary text-xl font-bold text-center">Back End</h3>
              <ul className="flex w-full flex-wrap">
                <li className="p-5 w-1/3 aspect-square flex flex-col items-center justify-center">
                  <Image src="/img/technologies/node-js.png" alt="Nombre" width={50} height={50} className="rounded-md object-cover" />
                  <p className='pt-3 text-sm'>Node.js</p>
                </li>
                <li className="p-5 w-1/3 aspect-square flex flex-col items-center justify-center">
                  <Image src="/img/technologies/java.png" alt="Nombre" width={50} height={50} className="rounded-md object-cover" />
                  <p className='pt-3 text-sm'>Java</p>
                </li>
                <li className="p-5 w-1/3 aspect-square flex flex-col items-center justify-center">
                  <Image src="/img/technologies/c-charp.png" alt="Nombre" width={50} height={50} className="rounded-md object-cover" />
                  <p className='pt-3 text-sm'>C#</p>
                </li>
                <li className="p-5 w-1/3 aspect-square flex flex-col items-center justify-center">
                  <Image src="/img/technologies/dot-Net.svg" alt="Nombre" width={50} height={50} className="rounded-md object-cover" />
                  <p className='pt-3 text-sm'>.Net</p>
                </li>
                <li className="p-5 w-1/3 aspect-square flex flex-col items-center justify-center">
                  <Image src="/img/technologies/mongodb.svg" alt="Nombre" width={50} height={50} className="rounded-md object-cover" />
                  <p className='pt-3 text-sm'>MongoDB</p>
                </li>
                <li className="p-5 w-1/3 aspect-square flex flex-col items-center justify-center">
                  <Image src="/img/technologies/SQL.png" alt="Nombre" width={50} height={50} className="rounded-md object-cover" />
                  <p className='pt-3 text-sm'>SQL</p>
                </li>
              </ul>
            </article>
            {/* Learning Section */}
            <article className="px-4 mb-2 bg-background secondary-shadow p-5 rounded-2xl">
              <h3 className="text-ternary text-xl font-bold text-center">Learning</h3>
              <ul className="flex w-full flex-wrap">
                <li className="p-5 w-1/3 aspect-square flex flex-col items-center justify-center">
                  <Image src="/img/technologies/python.png" alt="Nombre" width={50} height={50} className="rounded-md object-cover" />
                  <p className='pt-3 text-sm'>Python</p>
                </li>
                <li className="p-5 w-1/3 aspect-square flex flex-col items-center justify-center">
                  <Image src="/img/technologies/typescript.png" alt="Nombre" width={50} height={50} className="rounded-md object-cover" />
                  <p className='pt-3 text-sm'>TypeScript</p>
                </li>
                <li className="p-5 w-1/3 aspect-square flex flex-col items-center justify-center">
                  <Image src="/img/technologies/astro.png" alt="Nombre" width={50} height={50} className="rounded-md object-cover" />
                  <p className='pt-3 text-sm'>Astro</p>
                </li>
                <li className="p-5 w-1/3 aspect-square flex flex-col items-center justify-center">
                  <Image src="/img/technologies/azure.png" alt="Nombre" width={50} height={50} className="rounded-md object-cover" />
                  <p className='pt-3 text-sm'>Azure</p>
                </li>
              </ul>
            </article>
            {/* Tools Section */}
            <article className="px-4 mb-2 bg-background secondary-shadow p-5 rounded-2xl">
              <h3 className="text-ternary text-xl font-bold text-center">Tools</h3>
              <ul className="flex w-full flex-wrap">
                <li className="p-5 w-1/3 aspect-square flex flex-col items-center justify-center">
                  <Image src="/img/technologies/Git.png" alt="Nombre" width={50} height={50} className="rounded-md object-cover" />
                  <p className='pt-3 text-sm'>Git</p>
                </li>
                <li className="p-5 w-1/3 aspect-square flex flex-col items-center justify-center">
                  <Image src="/img/technologies/vs-code.png" alt="Nombre" width={50} height={50} className="rounded-md object-cover" />
                  <p className='pt-3 text-sm'>VSCode</p>
                </li>
                <li className="p-5 w-1/3 aspect-square flex flex-col items-center justify-center">
                  <Image src="/img/technologies/SSMS.jpg" alt="Nombre" width={50} height={50} className="rounded-md object-cover" />
                  <p className='pt-3 text-sm'>SSMS</p>
                </li>
                <li className="p-5 w-1/3 aspect-square flex flex-col items-center justify-center">
                  <Image src="/img/technologies/IntelliJ.png" alt="Nombre" width={50} height={50} className="rounded-md object-cover" />
                  <p className='pt-3 text-sm'>IntelliJ</p>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="w-2/3 mt-48">
        <h2 className="font-ailerons relative right-2 text-4xl mb-8">Mission and Vision</h2>
        <div className='flex'>
          <div className="flex w-1/2 flex-col">
            <h3 className="text-ternary text-xl font-bold">Mission</h3>
            <p className="pt-5 text-balance">Develop innovative and efficient software systems, using the best practices and technologies most used in the industry, to create functional and high-quality web applications that exceed the expectations of users and clients. Commit to continuous learning and constant improvement to always offer the best possible product.</p>
          </div>
          <div className="flex w-1/2 flex-col pl-10">
            <h3 className="text-ternary text-xl font-bold">Vision</h3>
            <p className="pt-5 text-balance">Become an outstanding software developer, due to my ability to create exceptional and functional web systems. Aspire to lead innovative projects that make a difference in the world of technology and that offer effective and sustainable solutions to complex problems.</p>
          </div>
        </div>
      </section>

      <section className="flex flex-col w-2/3 sm:w-4/5 xl:w-1/2 mt-48" id='about-me'>
        <h2 className="text-primary font-ailerons relative right-2 text-4xl mb-8">About me</h2>
        <div className='flex'>
          <div className="flex w-2/3 flex-col">
            <p className="pt-2 text-balance">Hello! I'm Saul Lopez, a <span className="text-orange">full stack developer and Software Engineering student</span>, with a deep passion for continuous learning and creating innovative web solutions from web pages to functional applications.</p>
            <p className="pt-2 text-balance">My focus is on <span className="text-orange">combining technical and creative skills to develop robust and scalable applications</span> that respond to current market needs.</p>
            <p className="pt-2 text-balance">I am constantly looking for a dynamic company where I can not only apply my knowledge and previous experiences, but also expand them by facing new challenges.</p>
            <p className="pt-2 text-balance">My goal is <span className="text-orange">contribute to the success of the company</span> while I continue to grow professionally, learning from each project and collaborating with talented teams.</p>
          </div>
          <div className="flex w-1/3 primary-shadow h-fit rounded-full">
            <Image src="/img/photo.png" className="profile-photo" width={250} height={250} alt=''/>
          </div>
        </div>
      </section>

      <footer class="opacity-80 m-4 mt-16 w-full mx-auto container w-2/3 sm:w-4/5 xl:w-1/2 mb-10 flex justify-center"> 
        <div class="rounded-lg w-full max-w-screen-xl mx-auto md:flex md:items-center md:justify-between py-4"> 
          <span class="text-sm sm:text-center text-zinc-800/90 dark:text-zinc-200/90">© 2024 Almost all rights reserved</span> 
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-white/90 sm:mt-0"> 
            <li><a href="/#about-me" class="hover:underline me-4 md:me-6">About me</a></li> 
            <li><a id="contacto" href="mailto:saulsjlm2@gmail.com" class="hover:underline">Contact</a></li>
          </ul> 
        </div> 
      </footer>
    </div>
  )
}

export default Homepage;