import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FloatingDock } from "@/components/ui/floating-dock";

function Footer() {

    const links = [
        {
            title: "Instagram",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram text-gray-300 hover:text-white"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
            ),
            href: "#",
        },

        {
            title: "Twitter",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter text-gray-300 hover:text-white"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>

            ),
            href: "#",
        },
        {
            title: "Email",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail text-gray-300 hover:text-white"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>

            ),
            href: "#",
        },
        {
            title: "Facebook",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook text-gray-300 hover:text-white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>

            ),
            href: "#",
        },
        {
            title: "LinkedIn",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin text-gray-300 hover:text-white"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
            ),
            href: "#",
        },
    ];

    return (
        <footer className="bg-[#06B6D4] max-w-7xl mx-auto rounded-lg shadow dark:bg-[#06B6D4] m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-6">
                <div className="sm:flex sm:items-start sm:justify-between space-y-8 sm:space-y-0 sm:space-x-4">
                    <div className="flex justify-center">
                        <Link href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <Image src="/fullLogo.png" className="w-[15rem]" alt="" width={100} height={50} />
                        </Link>
                    </div>

                    <div className="flex flex-col  sm:block items-center space-y-4">
                        <h3 className="text-white font-medium">Company</h3>
                        <ul className="text-xs md:text-sm text-gray-300 space-y-2">
                            <li>
                                <Link href="/AboutUs" className="hover:underline font-medium">About</Link>
                            </li>
                            <li>
                                <Link href="/WhyUs" className="hover:underline font-medium">Values</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col  sm:block items-center space-y-4">
                        <h3 className="text-white font-medium">Projects</h3>
                        <ul className="text-xs md:text-sm text-gray-300 space-y-2">
                            <li>
                                <Link href="/Projects" className="hover:underline">Project 1</Link>
                            </li>
                            <li>
                                <Link href="/Projects" className="hover:underline">Project 2</Link>
                            </li>
                            <li>
                                <Link href="/Projects" className="hover:underline">Project 3</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col  sm:block items-center space-y-4">
                        <h3 className="text-white font-medium">Services</h3>
                        <ul className="text-xs md:text-sm text-center sm:text-start text-gray-300 space-y-2">
                            <li>
                                <Link href="/Services" className="hover:underline">DDC Programming</Link>
                            </li>
                            <li>
                                <Link href="/Services" className="hover:underline">BMS Control Submittals</Link>
                            </li>
                            <li>
                                <Link href="/Services" className="hover:underline">BMS Frontend Graphics</Link>
                            </li>
                            <li>
                                <Link href="/Services" className="hover:underline">Remote Commissioning & Integration</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center sm:block text-center sm:text-start space-y-4 text-white">
                        <h3 className="text-lg">Get in Touch</h3>
                        <div className="text-xs md:text-sm text-gray-300 dark:text-gray-300">
                            <div className="mb-2">Tel: <Link href="tel:+922137121330" className="hover:underline  hover:text-white">+92 21 37121330</Link>, <Link href="tel:+923452052453" className="hover:underline">+92 345 2052453</Link> </div>
                            <div className="mb-2">Email: <Link href="mailto:info@vizualtechs.com" className="hover:underline hover:text-white">info@vizualtechs.com</Link></div>
                            <div className="mt-2 hover:text-white">Address: 
                                <p>309, Europa Center, adjacent MCB Tower, Hasrat Mohani Road,</p>
                                <p>Karachi - 74200, Pakistan</p>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-300 lg:my-8" />
                <div className='relative flex justify-center md:justify-between w-full px-4 pb-8'>
                    <div className="block text-sm text-gray-300 sm:text-center dark:text-gray-300">© 2024 <Link href="https://www.linkedin.com/in/hussain-murtaza-b85b2b1a6/" className="hover:underline">Digilabs.Co</Link>. All Rights Reserved.</div>
                    <div className='absolute right-0 flex gap-x-4'>
                        <div className="flex items-center justify-center w-full">
                            <FloatingDock
                                mobileClassName="translate-y-20"
                                items={links}   
                            />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
