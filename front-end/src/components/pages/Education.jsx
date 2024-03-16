function Education() {
    return (
        <div>
            <div className="max-w-4xl mx-auto px-5 mt-16">
                <div className="text-center">
                    <h2 className="font-semibold text-3xl">Education</h2>
                    {/* <p className="max-w-md mx-auto mt-2 text-gray-500">
                        A responsive documentation template built for everyone
                        who wants to create a plugin.
                    </p> */}
                </div>

                <div className="grid md:grid-cols-2 gap-10 mt-10">
                    <div className="flex gap-4 items-start">
                        <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full"></span>
                        <div>
                            <h3 className="font-semibold text-xl">
                                Customizable
                            </h3>
                            <p className="mt-1 text-gray-500">
                                {" "}
                                You dont need to be an expert to customize this
                                plugin. Our code is very readable and well
                                documented.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 items-start">
                        <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full"></span>
                        <div>
                            <h3 className="font-semibold text-xl">
                                Fully Responsive
                            </h3>
                            <p className="mt-1 text-gray-500">
                                {" "}
                                With mobile, tablet &amp; desktop support it
                                doesnt matter what device youre using. This
                                plugin is responsive in all browsers.{" "}
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 items-start">
                        <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full"></span>
                        <div>
                            <h3 className="font-semibold text-xl">
                                Developer Support
                            </h3>
                            <p className="mt-1 text-gray-500">
                                {" "}
                                Our plugins are supported by sponsors who
                                provide community support. Sponsors will get
                                email support on weekdays.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 items-start">
                        <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full"></span>
                        <div>
                            <h3 className="font-semibold text-xl">
                                Cross Browser
                            </h3>
                            <p className="mt-1 text-gray-500">
                                {" "}
                                We make sure our plugins are working perfectly
                                with all modern browsers available such as
                                Chrome, Firefox, Safari.{" "}
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 items-start">
                        <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full"></span>
                        <div>
                            <h3 className="font-semibold text-xl">
                                Clean Code
                            </h3>
                            <p className="mt-1 text-gray-500">
                                {" "}
                                We strictly follow a set of guidelines along
                                with unit tests to make sure your implementation
                                as easy as possible.{" "}
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 items-start">
                        <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full"></span>
                        <div>
                            <h3 className="font-semibold text-xl">
                                Well Maintained
                            </h3>
                            <p className="mt-1 text-gray-500">
                                {" "}
                                This templatte is actively maintained by the
                                core plugin team. We are working on fixing each
                                of the issues reported.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;
