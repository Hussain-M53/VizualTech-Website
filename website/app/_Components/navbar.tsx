'use client'

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { Dialog, DialogPanel } from '@headlessui/react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Our Values', href: '/WhyUs', current: false },
    { name: 'Projects', href: '/Projects', current: false },
    { name: 'Services', href: '/Services', current: false },
    { name: 'About Us', href: '/AboutUs', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [navbarScrolled, setNavbarScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setNavbarScrolled(true);
            } else {
                setNavbarScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={classNames(
            "sticky inset-x-0 top-0 z-50 transition-all duration-300",
            navbarScrolled ? "bg-white/50 backdrop-blur-md shadow-lg" : "bg-transparent"
        )}>
            <nav aria-label="Global" className="flex items-center justify-between p-3 lg:px-8">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <Image
                            alt=""
                            src="/logo.png"
                            className="w-14"
                            height={16}
                            width={16}
                        />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <Link 
                            key={item.name} 
                            href={item.href} 
                            className={classNames(
                                "text-sm font-semibold leading-6 text-[#171717] relative",
                                item.current ? "border-b-2 border-[#06B6D4]" : "hover:border-b-2 hover:border-[#06B6D4]",
                                "hover:border-opacity-0 transition-all duration-300 before:absolute before:-bottom-[2px] before:left-1/2 before:h-[2px] before:w-0 before:bg-[#06B6D4] before:transition-all before:duration-300 hover:before:w-full hover:before:left-0"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link href="/ContactUs" className="px-3 py-1 bg-[#06B6D4] hover:ring-1 hover:ring-[#06B6D4] hover:text-[#06B6D4] hover:bg-transparent rounded-md text-white text-sm font-semibold leading-6">
                        Contact Us
                    </Link>
                </div>
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-50" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <Link href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <Image
                                    alt=""
                                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                    className="h-8 w-auto"
                                    height={8}
                                    width={8}
                                />
                            </Link>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <Link
                                        href="/ContactUs"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </nav>
        </header>
    )
}
