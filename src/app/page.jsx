import Image from 'next/image'

function Homepage() {
  return (
    <div className="container mx-auto wrapper flex items-center flex-col">
      <section className="flex w-2/3 sm:w-4/5 xl:w-1/2 mt-48">
        <div className="flex w-2/3 flex-col">
          <h1 className="font-ailerons text-primary relative right-3 text-6xl">Saúl López</h1>
          <h2 className="text-2xl pt-2 relative right-0.5">Desarrollador Full Stack</h2>
          <p className="pt-5 text-balance">Desarrollador full stack apasionado en aprender y desarrollar soluciones web, en busca de una compañía donde poder explotar mi conocimiento y ampliar mi conocimiento atravez de nuevos desafíos.</p>
          <div className="pt-7 flex justify-between">
            <div>
              <button className="bg-primary hover:bg-secondary active:scale-105  py-2 px-4 rounded-full mr-4 my-1"><a href="https://www.linkedin.com/in/saul-lopez-715536165/" target="_blank">LinkedIn</a></button>
              <button className="bg-primary hover:bg-secondary active:scale-105 py-2 px-4 rounded-full"><a href="https://github.com/sauljlm" target="_blank">GitHub</a></button>
            </div>
            <button className='bg-primary hover:bg-secondary active:scale-105 rounded-lg py-2 px-4 mr-5'>Descargar CV</button>
          </div>
        </div>
        <div className="flex w-1/3">
          <Image src="/img/icon.svg" className="profile-photo" width={250} height={230} alt=''/>
        </div>
      </section>
      <section className="flex w-2/3 sm:w-4/5 xl:w-1/2 mt-48 flex-col" id='experience'>
        <h2 className="font-ailerons relative right-2 text-4xl mb-8">Experiencia</h2>
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
              <p className="text-gray-400 text-sm">Noviembre 2022 - Actualidad</p>
              <p className="mt-2 text-balance">
                He trabajado como Senior Content Editor liderando el lado del desarrollo web garantizando páginas de calidad a través de buenas prácticas y mis conocimientos en desarrollo web.
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
              <p className="text-gray-400 text-sm">Marzo 2020 - Noviembre 2022</p>
              <p className="mt-2 text-balance">
                Tuve la oportunidad de trabajar junto a un gran equipo de desarrolladores web para desarrollar y gestionar páginas web  asegurando una experiencia de usuario de alta calidad. 
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
              <p className="text-gray-400 text-sm">Diciembre 2019 - Marzo 2020</p>
              <p className="mt-2 text-balance">
                Trabajé como Junior content editor en un equipo de desarrollo, encargado de desarrollar, modificar y gestionar páginas web mediante AEM en conjunto con el equipo de desarrollo y de control de calidad.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="flex w-2/3 sm:w-4/5 xl:w-1/2 mt-48 flex-col" id='projects'>
        <h2 className="font-ailerons relative right-2 text-4xl mb-8">Proyectos</h2>
        <div>
          <article className="flex mb-20 flex-col-reverse sm:flex-row">
            <div className="w-auto mt-5 sm:w-3/5 sm:mt-0 pr-2">
              <h3 className="text-ternary text-lg font-bold">Element Dungeon</h3>
              <p className="mt-2 text-balance">
              Un videojuego RPG inspirado en Zelda con 4 diferentes cababosos, armas, tienda, niveles y otros. Desarrollado en Java, aplicando patrones de diseño y se utilizó libGDX para toda la parte de renderizado del RPG. Realizado como parte de un proyecto en Cenfotec en colaboración con 2 compañeros.
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
              <Image src="/img/projects/ElementDungeon1.png" className="profile-photo hover:scale-125 hover:rounded-lg transition w-full" width={300} height={230} alt=''/>
            </div>
          </article>

          <article className="flex mb-20 flex-col sm:flex-row">
            <div className="w-auto w-2/5 mt-10">
              <Image src="/img/projects/CondoHub.png" className="profile-photo hover:scale-125 hover:rounded-lg transition w-full" width={300} height={230} alt=''/>
            </div>
            <div className="w-auto mt-5 sm:w-3/5 sm:mt-0 pl-0 sm:pl-8">
              <h3 className="text-ternary text-lg font-bold">Condo Hub</h3>
              <p className="mt-2 text-balance">
              Una aplicación web pensada para el manejo de condominios, dónde los usuarios pueden registrarse y reservar amenidades del condominio, así como los administradores pueden crear y administrar las diferentes amenidades, además de publicar noticias. Realizado como parte de un proyecto en Cenfotec en colaboración con 2 compañeros.
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
              Una aplicación web diseñada para el manejo de hospitales, donde los administradores, doctores, secretarias y otros administradores pueden hacer manejo del mismo, crear cupos para citas, crear expedientes, recetas, así como los pacientes pueden reservar, ver sus recetas y realizar pagos. Entre otras funciones más. Realizado como parte de un proyecto en Cenfotec en colaboración con 2 compañeros.
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
              <Image src="/img/projects/SIMEPCI.png" className="profile-photo hover:scale-125 hover:rounded-lg transition w-full" width={300} height={230} alt=''/>
            </div>
          </article>

          <article className="flex mb-20 flex-col sm:flex-row">
            <div className="w-auto w-2/5 mt-10">
              <Image src="/img/projects/MenosOrdinario.png" className="profile-photo hover:scale-125 hover:rounded-lg transition w-full" width={300} height={230} alt=''/>
            </div>
            <div className="w-auto mt-5 sm:w-3/5 sm:mt-0 pl-0 sm:pl-8">
              <h3 className="text-ternary text-lg font-bold">Menos Ordinario</h3>
              <p className="mt-2 text-balance">
              Un aplicación web pensada como blog donde poder registrarse como usuario, realizar publicaciones, editar e eliminarlas, así como visualizar las de otros usuarios.
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
              Una página web clon de la tienda Nike, donde se pueden visualizar los productos con sus caracteristicas y fotografías para posteriormente añadirlos al carrido y proceder con su compra.
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
              <Image src="/img/projects/Nike.png" className="profile-photo hover:scale-125 hover:rounded-lg transition w-full" width={300} height={230} alt=''/>
            </div>
          </article>
        </div>
      </section>

      <section className="flex w-2/3 sm:w-4/5 xl:w-1/2 mt-48 flex-col" id='knowledge'>
        <div className="flex flex-col w-full h-1/2">
          <h2 className="font-ailerons relative right-2 text-4xl mb-8">Conocimientos</h2>
          <div className="flex justify-center">
            {/* Front End Section */}
            <article className="w-1/2 px-4 bg-gray-500 p-5 rounded-2xl mr-2">
              <h3 className="text-ternary text-xl font-bold text-center">Front End</h3>
              <ul className="flex w-full flex-wrap">
                <li className="p-5 w-1/3 aspect-square flex flex-col items-center justify-center">
                  <Image src="/img/icon.svg" alt="Nombre" width={50} height={50} className="rounded-md object-cover" />
                  <p className='pt-3 text-sm'>HTML</p>
                </li>
                <li className="p-5 w-1/3 aspect-square flex flex-col items-center justify-center">
                  <Image src="/img/icon.svg" alt="Nombre" width={50} height={50} className="rounded-md object-cover" />
                  <p className='pt-3 text-sm'>CSS</p>
                </li>
                <li className="p-5 w-1/3 aspect-square flex flex-col items-center justify-center">
                  <Image src="/img/icon.svg" alt="Nombre" width={50} height={50} className="rounded-md object-cover" />
                  <p className='pt-3 text-sm'>JavaScript</p>
                </li>
                <li className="p-5 w-1/3 aspect-square flex flex-col items-center justify-center">
                  <Image src="/img/icon.svg" alt="Nombre" width={50} height={50} className="rounded-md object-cover" />
                  <p className='pt-3 text-sm'>ReactJS</p>
                </li>
                <li className="p-5 w-1/3 aspect-square flex flex-col items-center justify-center">
                  <Image src="/img/icon.svg" alt="Nombre" width={50} height={50} className="rounded-md object-cover" />
                  <p className='pt-3 text-sm'>Next.js</p>
                </li>
                <li className="p-5 w-1/3 aspect-square flex flex-col items-center justify-center">
                  <Image src="/img/icon.svg" alt="Nombre" width={50} height={50} className="rounded-md object-cover" />
                  <p className='pt-3 text-sm'>Tailwind</p>
                </li>
              </ul>
            </article>
            {/* Back End Section */}
            <article className="w-1/2 px-4 bg-gray-500 p-5 rounded-2xl ml-2">
              <h3 className="text-ternary text-xl font-bold text-center">Back End</h3>
              <ul className="flex w-full flex-wrap">
                <li className="p-5 w-1/3 aspect-square flex flex-col items-center justify-center">
                  <Image src="/img/icon.svg" alt="Nombre" width={50} height={50} className="rounded-md object-cover" />
                  <p className='pt-3 text-sm'>Node.js</p>
                </li>
                <li className="p-5 w-1/3 aspect-square flex flex-col items-center justify-center">
                  <Image src="/img/icon.svg" alt="Nombre" width={50} height={50} className="rounded-md object-cover" />
                  <p className='pt-3 text-sm'>Java</p>
                </li>
                <li className="p-5 w-1/3 aspect-square flex flex-col items-center justify-center">
                  <Image src="/img/icon.svg" alt="Nombre" width={50} height={50} className="rounded-md object-cover" />
                  <p className='pt-3 text-sm'>C#</p>
                </li>
                <li className="p-5 w-1/3 aspect-square flex flex-col items-center justify-center">
                  <Image src="/img/icon.svg" alt="Nombre" width={50} height={50} className="rounded-md object-cover" />
                  <p className='pt-3 text-sm'>.Net</p>
                </li>
                <li className="p-5 w-1/3 aspect-square flex flex-col items-center justify-center">
                  <Image src="/img/icon.svg" alt="Nombre" width={50} height={50} className="rounded-md object-cover" />
                  <p className='pt-3 text-sm'>MongoDB</p>
                </li>
                <li className="p-5 w-1/3 aspect-square flex flex-col items-center justify-center">
                  <Image src="/img/icon.svg" alt="Nombre" width={50} height={50} className="rounded-md object-cover" />
                  <p className='pt-3 text-sm'>SQL</p>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      
    </div>
  )
}

export default Homepage;