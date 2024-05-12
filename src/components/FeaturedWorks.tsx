import { CircleCheck } from "lucide-react";
import Image from "next/image";
import React from "react";

const FeaturedWorks = () => {
    return (
        <section className="py-12 bg-gray-100 dark:bg-inherit">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center py-4 mb-12">Featured Works</h2>
                <div className="grid grid-cols-1 gap-20">
                    <div className="flex flex-col md:flex-row-reverse justify-between w-fit">
                        <div className="md:ml-4 md:max-w-9/12 md:me-20">
                            <h3 className="text-3xl text-center mb-4 md:text-start md:mb-0 font-semibold">Autosales CRM</h3>
                            <p className="text-base text-gray-700 dark:text-gray-300">
                                The Car Dealership CRM: a digital aide, organizing leads and streamlining customer relations, empowering thy automotive endeavors with technological finesse.
                            </p>
                            <hr className="my-4" />
                            <ul className="list-disc pl-6 dark:text-gray-300">
                                <li className="flex items-center mb-2">
                                    <CircleCheck className="me-3" />
                                    Manage customer information and leads efficiently
                                </li>
                                <li className="flex items-center mb-2">
                                    <CircleCheck className="me-3" />
                                    Accessible both through desktop and mobile devices
                                </li>
                                <li className="flex items-center mb-2">
                                    <CircleCheck className="me-3" />
                                    Robust security measures for safeguarding sensitive data
                                </li>
                            </ul>
                            <p className="text-lg my-6 text-gray-700 dark:text-gray-300">
                                In the throes of labor now lies Version 2.0, undergoing transformation into a Software as a Service, soon to be accessible to all.
                            </p>
                        </div>
                        <Image src="/product-2.png" alt="Work 1" className="h-auto w-11/12 mx-auto md:w-1/3 lg:w-sm lg:mx-20 object-cover transition-all duration-300 rounded-lg cursor-pointer hover:scale-105 " width={500} height={300}/>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="md:ml-4 md:max-w-9/12 md:ms-20">
                            <h3 className="text-3xl text-center mb-4 md:text-start md:mb-0 font-semibold">Online Exam Assistant</h3>
                            <p className="text-base text-gray-700 dark:text-gray-300">
                                The Online Exam Assistant: a virtual guide, offering hints and time management, aiding thee in scholarly pursuits with digital grace.
                            </p>
                            <hr className="my-4" />
                            <ul className="list-disc pl-6 dark:text-gray-300">
                                <li className="flex items-center mb-2">
                                    <CircleCheck className="me-3" />
                                    Scan and upload exam answers seamlessly
                                </li>
                                <li className="flex items-center mb-2">
                                    <CircleCheck className="me-3" />
                                    Accessible both as a web application and mobile app
                                </li>
                                <li className="flex items-center mb-2">
                                    <CircleCheck className="me-3" />
                                    Secure server-side infrastructure for data confidentiality
                                </li>
                            </ul>
                            <p className="text-lg my-6 text-gray-700 dark:text-gray-300">
                                In the throes of labor now lies Version 4.0, undergoing transformation into a Software as a Service, soon to be accessible to all.
                            </p>

                        </div>
                        <Image src="/product-1.png" alt="Work 2" className="h-auto w-11/12 mx-auto md:w-1/3 lg:w-sm lg:mx-20 object-cover transition-all duration-300 rounded-lg cursor-pointer hover:scale-105" width={500} height={300}/>
                    </div>

                    <div className="flex flex-col md:flex-row-reverse justify-between w-fit">
                        <div className="md:ml-4 md:max-w-9/12 md:me-20">
                            <h3 className="text-3xl text-center mb-4 md:text-start md:mb-0 font-semibold">IITK Fortinet Authenticator</h3>
                            <p className="text-base text-gray-700 dark:text-gray-300">
                                The IITK Fortinet Authenticator: a simple yet effective tool designed to streamline the process of logging in to the captive portal of the Indian Institute of Technology Kanpur (IITK).
                            </p>
                            <hr className="my-4" />
                            <ul className="list-disc pl-6 dark:text-gray-300">
                                <li className="flex items-center mb-2">
                                    <CircleCheck className="me-3" />
                                    Simplifies the login process to IITK&apos;s captive portal
                                </li>
                                <li className="flex items-center mb-2">
                                    <CircleCheck className="me-3" />
                                    Offers seamless access on both desktop and mobile devices
                                </li>
                                <li className="flex items-center mb-2">
                                    <CircleCheck className="me-3" />
                                    Ensures security with robust authentication measures
                                </li>
                            </ul>
                            <p className="text-lg my-6 text-center md:text-left text-gray-700 dark:text-gray-300">
                                For more information, visit <a href="https://iitkfgauth.netlify.app/" className="text-blue-500 hover:underline">iitkfgauth.netlify.app</a>.
                            </p>

                        </div>
                        <Image src="/product-3.png" alt="Work 3" className="h-auto w-11/12 mx-auto md:w-1/3 lg:w-sm lg:mx-20 object-cover transition-all duration-300 rounded-lg cursor-pointer hover:scale-105" width={500} height={300}/>
                    </div>


                    {/* <div className="flex">
                        <Image src="/image1.jpg" alt="Work 1" className="w-full md:w-48 h-auto mb-4 md:mb-0" />
                        <div className="md:ml-4">
                            <h3 className="text-xl font-semibold">Project 1</h3>
                            <p className="text-gray-700">Description of Project 1 goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div> */}
                    {/* Add more similar sections for additional projects */}
                </div>
            </div>
        </section>
    );
}

export default FeaturedWorks;
