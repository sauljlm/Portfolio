function Experience({data}) {
    return (
        <div>
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
                        {data.title}<span className="font-normal text-orange text-sm pl-2"> {data.company}</span>
                    </h3>
                    <p className="text-gray-400 text-sm">{data.date}</p>
                    <p className="mt-2 text-balance">{data.description}</p>
                </div>
            </article>
        </div>
    );
}

export default Experience;
