"use client"
import React from "react";

export default function Nav() {
    const [openNav, setOpenNav] = React.useState(false);

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);
    return (
        <nav className="py-4 shadow-sm">
            <div className="container mx-auto flex items-center justify-between overflow-hidden">
                <div className="ml-4 text-xl font-semibold text-indigo-900 md:ml-0">
                    Vac'Acti<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 inline align-middle text-yellow-400"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" /></svg>n
                </div>
                <div className="hidden md:flex items-center space-x-6 text-sm text-gray-500">
                    <a href="#" className="text-indigo-900 font-semibold hover:text-yellow-300">
                        Accueil
                    </a>
                    <a href="#features" className="text-indigo-900 font-semibold hover:text-yellow-300">
                        Fonctionnalités
                    </a>
                    <a href="#shop" className="text-indigo-900 font-semibold hover:text-yellow-300">
                        Prix
                    </a>
                </div>
                <div className=" hidden md:flex  items-center space-x-4">
                    <a href="#signin" className="text-sm text-indigo-900 font-semibold hover:text-yellow-300">
                        Log In
                    </a>
                    <a href="#signup" className="px-4 py-2 text-sm text-white bg-teal-500 rounded-full hover:bg-teal-600 font-semibold">Sign In</a>
                </div>
                <div
                    className="md:hidden flex items-center cursor-pointer mr-6 overflow-x-hidden"
                    onClick={() => setOpenNav(!openNav)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-6 h-6 text-indigo-900"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </div>
                
            </div>
            {openNav && (
                    <div className="md:hidden bg-white shadow-md py-4">
                        <div className="flex flex-col items-center space-y-4">
                            <a
                                href="#"
                                className="text-indigo-900 font-semibold hover:text-yellow-300"
                            >
                                Accueil
                            </a>
                            <a
                                href="#features"
                                className="text-indigo-900 font-semibold hover:text-yellow-300"
                            >
                                Fonctionnalités
                            </a>
                            <a
                                href="#shop"
                                className="text-indigo-900 font-semibold hover:text-yellow-300"
                            >
                                Prix
                            </a>
                            <a
                                href="#signin"
                                className="text-sm text-indigo-900 font-semibold hover:text-yellow-300"
                            >
                                Log In
                            </a>
                            <a
                                href="#signup"
                                className="px-4 py-2 text-sm text-white bg-teal-500 rounded-full hover:bg-teal-600 font-semibold"
                            >
                                Sign In
                            </a>
                        </div>
                    </div>
                )}
        </nav>
    );
}