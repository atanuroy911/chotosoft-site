import { CircleCheck } from "lucide-react";
import Image from "next/image";
import React from "react";

const FeaturedWorks2 = () => {
    return (
        <section id="featured-works" className="py-12 bg-gray-100 dark:bg-inherit">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-10 md:py-4">Featured Works</h2>
                <div className="grid grid-cols-1 gap-20">
                    <div id="product-1" className="flex flex-col md:flex-row-reverse justify-between w-fit pt-4 lg:pt-10">
                        <div className="md:ml-4 md:max-w-9/12 md:me-20">
                            <h3 className="text-3xl text-center mb-4 md:text-start md:mb-0 font-semibold">Autosales CRM</h3>
                            <p className="text-base text-gray-700 dark:text-gray-300">
                                The Car Dealership CRM: a digital aide, organizing leads and streamlining customer relations, empowering thy automotive endeavors with technological finesse.
                            </p>
                            <hr className="my-4" />
                            <ul className="list-disc flex justify-between px-0 py-4 dark:text-gray-300">
                                <li className="flex flex-col justify-center w-1/3 items-center mb-2">
                                    <CircleCheck className="mx-auto dark:text-green-400 transition-all duration-100 hover:text-green-600 dark:hover:text-green-500" />
                                    <p className="py-2">CRM</p>
                                </li>
                                <li className="flex flex-col justify-center w-1/3 items-center mb-2">
                                    <CircleCheck className="mx-auto dark:text-green-400 transition-all duration-100 hover:text-green-600 dark:hover:text-green-500" />
                                    <p className="py-2">Responsive</p>
                                </li>
                                <li className="flex flex-col justify-center w-1/3 items-center mb-2">
                                    <CircleCheck className="mx-auto dark:text-green-400 transition-all duration-100 hover:text-green-600 dark:hover:text-green-500" />
                                    <p className="py-2 block md:hidden">Leads</p>
                                    <p className="py-2 hidden md:block">Lead Generation</p>
                                </li>
                            </ul>
                            <p className="text-lg mt-6 hidden md:block text-gray-700 dark:text-gray-300">
                                In the throes of labor now lies Version 2.0, undergoing transformation into a Software as a Service, soon to be accessible to all.
                            </p>
                        </div>
                        <Image src="/product-1.png" alt="Work 1" className="h-auto w-11/12 mx-auto md:w-1/3 lg:w-sm lg:mx-20 object-fill transition-all duration-300 rounded-lg cursor-pointer hover:scale-105 " width={500} height={300} />
                        <p className="text-lg mt-6 block md:hidden text-gray-700 dark:text-gray-300">
                            In the throes of labor now lies Version 2.0, undergoing transformation into a Software as a Service, soon to be accessible to all.
                        </p>
                    </div>
                    <div id="product-2" className="flex flex-col md:flex-row justify-between pt-8 lg:pt-10">
                        <div className="md:ml-4 md:max-w-9/12 md:ms-20">
                            <h3 className="text-3xl text-center mb-4 md:text-start md:mb-0 font-semibold">Online Exam Assistant</h3>
                            <p className="text-base text-gray-700 dark:text-gray-300">
                                The Online Exam Assistant: a virtual guide, offering hints and time management, aiding thee in scholarly pursuits with digital grace.
                            </p>
                            <hr className="my-4" />
                            <ul className="list-disc flex justify-between px-0 py-4 dark:text-gray-300">
                                <li className="flex flex-col justify-center w-1/3 items-center mb-2">
                                    <CircleCheck className="mx-auto dark:text-green-400 transition-all duration-100 hover:text-green-600 dark:hover:text-green-500" />
                                    <p className="py-2 text-center block md:hidden">SIS</p>
                                    <p className="py-2 text-center hidden md:block">Student Management</p>
                                </li>
                                <li className="flex flex-col justify-center w-1/3 items-center mb-2">
                                    <CircleCheck className="mx-auto text-center dark:text-green-400 transition-all duration-100 hover:text-green-600 dark:hover:text-green-500" />
                                    <p className="py-2 text-center block md:hidden">Dashboard</p>
                                    <p className="py-2 text-center hidden md:block">Admin Dashboard</p>
                                </li>
                                <li className="flex flex-col justify-center w-1/3 items-center mb-2">
                                    <CircleCheck className="mx-auto  dark:text-green-400 transition-all duration-100 hover:text-green-600 dark:hover:text-green-500" />
                                    <p className="py-2 block md:hidden">App</p>
                                    <p className="py-2 hidden md:block">Android App</p>
                                </li>
                            </ul>
                            <p className="text-lg mt-6 hidden md:block text-gray-700 dark:text-gray-300">
                                In the throes of labor now lies Version 4.0, undergoing transformation into a Software as a Service, soon to be accessible to all.
                            </p>

                        </div>
                        <Image src="/product-2.png" alt="Work 2" className="h-auto w-11/12 mx-auto md:w-1/3 lg:w-sm lg:mx-20 object-fill transition-all duration-300 rounded-lg cursor-pointer hover:scale-105" width={500} height={300} />
                        <p className="text-lg mt-6 block md:hidden text-gray-700 dark:text-gray-300">
                            In the throes of labor now lies Version 4.0, undergoing transformation into a Software as a Service, soon to be accessible to all.
                        </p>
                    </div>

                    <div id="product-3" className="flex flex-col md:flex-row-reverse justify-between w-fit pt-8 lg:pt-10">
                        <div className="md:ml-4 md:max-w-9/12 md:me-20">
                            <h3 className="text-3xl text-center mb-4 md:text-start md:mb-0 font-semibold">IITK Fortinet Authenticator</h3>
                            <p className="text-base text-gray-700 dark:text-gray-300">
                                The IITK Fortinet Authenticator: a simple yet effective tool designed to streamline the process of logging in to the captive portal of the Indian Institute of Technology Kanpur (IITK).
                            </p>
                            <hr className="my-4" />
                            <ul className="list-disc flex justify-between px-0 py-4 dark:text-gray-300">
                                <li className="flex flex-col justify-center w-1/3 items-center mb-2">
                                    <CircleCheck className="mx-auto dark:text-green-400 transition-all duration-100 hover:text-green-600 dark:hover:text-green-500" />
                                    <p className="py-2 text-center block md:hidden">Prototype</p>
                                    <p className="py-2 text-center hidden md:block">Prototype</p>
                                </li>
                                <li className="flex flex-col justify-center w-1/3 items-center mb-2">
                                    <CircleCheck className="mx-auto text-center dark:text-green-400 transition-all duration-100 hover:text-green-600 dark:hover:text-green-500" />
                                    <p className="py-2 text-center block md:hidden">X-Platform</p>
                                    <p className="py-2 text-center hidden md:block">Win / Mac / Linux</p>
                                    
                                </li>
                                <li className="flex flex-col justify-center w-1/3 items-center mb-2">
                                    <CircleCheck className="mx-auto dark:text-green-400 transition-all duration-100 hover:text-green-600 dark:hover:text-green-500" />
                                    <p className="py-2 block md:hidden">IoT</p>
                                    <p className="py-2 hidden md:block">IoT / Edge Device</p>
                                </li>
                            </ul>
                            <p className="text-lg mt-6 hidden md:block text-gray-700 dark:text-gray-300">
                                This software was built for persistent captive portal login. For more information, visit <a href="https://iitkfgauth.netlify.app/" className="text-blue-500 hover:underline">iitkfgauth.netlify.app</a>.
                            </p>

                        </div>
                        <Image src="/product-3.png" alt="Work 3" className="h-auto w-11/12 mx-auto md:w-1/3 lg:w-sm lg:mx-20 object-cover transition-all duration-300 rounded-lg cursor-pointer hover:scale-105" width={500} height={300} />
                        <p className="text-lg mt-6 block md:hidden text-gray-700 dark:text-gray-300">
                        This software was built for persistent captive portal login. For more information, visit <a href="https://iitkfgauth.netlify.app/" className="text-blue-500 hover:underline">iitkfgauth.netlify.app</a>.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default FeaturedWorks2;
