import Image from 'next/image'
import { usePathname } from 'next/navigation';

function Project({data, id}) {
    const pathname = usePathname();
    
    return (
        <article className={`flex mb-20 flex-col-reverse ${id % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
            <div className={`w-auto mt-5 sm:w-3/5 sm:mt-0 pr-2 ${id % 2 === 0 ? 'pr-2' : 'pl-0 sm:pl-8'}`}>
                <h3 className="text-ternary text-lg font-bold">{data.name}</h3>
                <p className="mt-2 text-balance">{data.description}</p>
                <div className="flex mt-4 justify-between">
                    <ul className="flex flex-wrap">
                        {data.technologies.map((tech) => (
                            <li key={tech} className="bg-gray-600 py-1.5 sm:py-1 px-3 rounded-full mr-4 my-1 text-xs">
                                {tech}
                            </li>
                        ))}
                    </ul>
                    
                    <ul className="flex mx-2">
                        <li className="max-h-7 sm:max-h-6 bg-primary py-1.5 sm:py-1 px-3 rounded-md mr-4 my-1 text-xs hover:bg-secondary active:scale-105">
                            <a href={data.links.github} target="_blank">GitHub</a>
                        </li>
                        <li className="max-h-7 sm:max-h-6 bg-primary py-1.5 sm:py-1 px-3 rounded-md mr-4 my-1 text-xs hover:bg-secondary active:scale-105">
                            <a href={data.links.page} target="_blank">{pathname === '/es' ? "Página" : "Page"}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-auto w-2/5 mt-10">
                <Image src={data.image} className="hover:scale-125 hover:rounded-lg transition w-full" width={300} height={230} alt=''/>
            </div>
        </article>
    );
}

export default Project;