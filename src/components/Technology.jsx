import Image from 'next/image'
import { usePathname } from 'next/navigation';

function Technology({data}) {
    const pathname = usePathname();
    console.log(data)
    return (
        <article className="px-4 mb-2 bg-background secondary-shadow p-5 rounded-2xl">
            <h3 className="text-ternary text-xl font-bold text-center">{data.category}</h3>
            <ul className="flex w-full flex-wrap">
                {data.items.map((tech, techIndex) => (
                <li
                    key={techIndex}
                    className="p-5 w-1/3 aspect-square flex flex-col items-center justify-center"
                >
                    <Image
                    src={tech.image}
                    alt={tech.name}
                    width={50}
                    height={50}
                    className="rounded-md object-cover"
                    />
                    <p className="pt-3 text-sm w-max">{tech.name}</p>
                </li>
                ))}
            </ul>
        </article>
    );
}

export default Technology;