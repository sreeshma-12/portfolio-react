import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Contact() {
    return (
        <div>
            <div className="bg-gray-100 py-12" id="contact">
                <div className="px-4 py-5 sm:px-6 text-center">
                    <h3 className="text-4xl  leading-6 font-bold text-gray-900 ">
                        CONTACT ME
                    </h3>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
                    <div className="lg:text-center">
                        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase"></h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"></p>
                    </div>

                    <div className="mt-10 text-center m-10">
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        {" "}
                                        <i className="fa-solid fa-location-crosshairs"></i>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <dt className="text-lg leading-6 font-medium text-gray-900">
                                        Location
                                    </dt>
                                    <dd className="mt-2 text-base text-gray-500">
                                        Kochi, Kerala
                                        <br />
                                    </dd>
                                </div>
                            </div>

                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <FontAwesomeIcon icon="fa-solid fa-phone-volume" />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <dt className="text-lg leading-6 font-medium text-gray-900">
                                        Phone number
                                    </dt>
                                    <dd className="mt-2 text-base text-gray-500">
                                        +91 7907237334
                                    </dd>
                                </div>
                            </div>

                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <i className="fa-solid fa-envelope"></i>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <dt className="text-lg leading-6 font-medium text-gray-900">
                                        Email
                                    </dt>
                                    <dd className="mt-2 text-base text-gray-500">
                                        sreeshma.t.2019@gmail.com
                                    </dd>
                                </div>
                            </div>

                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md  bg-indigo-500 text-white">
                                        <i className="fa-brands fa-linkedin-in"></i>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <dt className="text-lg leading-6 font-medium text-gray-900">
                                        LinkedIn
                                    </dt>
                                    <dd className="mt-2 text-base text-gray-500">
                                        in/sreeshma-t-2a1595296
                                    </dd>
                                </div>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
