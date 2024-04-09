function Portfolio() {
    const cards = [
        {
            name: "womanish",
            url: "https://womanish.online/ ",
            img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgAUeYG_OEiYGC4213PyWyCJwUAvR3wuh4iBV6N7wj9__CS8R5XNuu8O3kJa13XGn7J00Iow8_MrfHDYkH1hSNjhtLQWNGpZ267auaAUGkTvpzmU6m_sfqnUg4fexJ2XkSBO7GW_SCvWiHhtho6llqBhxrg0XtBAh4OQMWfcpgHjG1xJ1ZLRlAbqsbBOc0/s320/photo_6080038099326450931_y.jpg",
            description: "About the project",
            month: "Jul",
            year: 2023,
        },
        {
            name: "weather app",
            url: "https://weather-app0034.netlify.app/ ",
            img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1YcA_zxXh4CYFOwNBrajApdDiQwGSVjFHy8AULNSnvJbUDbaVVAbuY6m2fhyjM4lj27lMXMSPVMERBkpK0-ZcAqvLBjPTP-BnXoFlMauTckfQr5EMtAdyZ6iwks0EoEnQxy7V1MpbkTXAXIqaqO-jwySppVASs_rPUTELGNRR3ZVB9qDzfenQH-ukmYw/s1280/IMG_20240409_161307_687.jpg",
            description: "Weather showing application based on location",
            month: "Apr",
            year: 2024,
        },
    ];

    return (
        <div
            className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16"
            id="portfolio"
        >
            <div className="px-4 py-5 sm:px-6  text-center">
                <h3 className="text-4xl  leading-6 font-bold text-gray-900 ">
                    PORTFOLIO
                </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
                {cards.map((val, i) => (
                    <div className="rounded overflow-hidden shadow-lg" key={i}>
                        <a href="#"></a>
                        <div className="relative">
                            <a href="#">
                                <img
                                    className="w-full"
                                    src={val.img}
                                    alt="Sunset in the mountains"
                                />
                                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                            </a>
                            <a href="#!">
                                <div className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                    Photos
                                </div>
                            </a>

                            <a href="!#">
                                <div className="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                    <span className="font-bold">
                                        {val.month}
                                    </span>
                                    <small>{val.year}</small>
                                </div>
                            </a>
                        </div>
                        <div className="px-6 py-4">
                            <a
                                href="#"
                                className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
                            >
                                {val.name}
                            </a>
                            <p className="text-gray-500 text-sm">
                                {val.description}
                            </p>
                        </div>
                        <div className="px-6 py-4 flex flex-row items-center">
                            <span
                                href="#"
                                className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row justify-between items-center"
                            >
                                <span className="ml-1">
                                    <a href={val.url}>click here</a>
                                </span>
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
