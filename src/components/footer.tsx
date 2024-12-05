export default function Footer() {
    return (
        <footer className="shadow-sm bg-gray-50">
            <div className="container mx-auto flex flex-col items-center justify-between md:flex-row text-indigo-900 pt-3  ">
                <div className="">
                    <p className="text-2xl font-bold">Vac'Acti<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 inline align-middle ml-2 text-yellow-400"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" /></svg>n</p>
                </div>
                <div className="flex flex-col md:flex-row gap-3 text-indigo-900 mt-1 justify-center items-center">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8" viewBox="0 0 256 256">
                            <g fill="#312e81" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}
                            >
                                <g transform="scale(8.53333,8.53333)">
                                    <path d="M9,25h-5v-15h5zM6.501,8c-1.383,0 -2.501,-1.121 -2.501,-2.501c0,-1.38 1.12,-2.499 2.501,-2.499c1.378,0 2.499,1.121 2.499,2.499c0,1.38 -1.121,2.501 -2.499,2.501zM27,25h-4.807v-7.3c0,-1.741 -0.033,-3.98 -2.499,-3.98c-2.503,0 -2.888,1.896 -2.888,3.854v7.426h-4.806v-15.011h4.614v2.051h0.065c0.642,-1.18 2.211,-2.424 4.551,-2.424c4.87,0 5.77,3.109 5.77,7.151c0,0 0,8.233 0,8.233z"></path>
                                </g>
                            </g>
                        </svg>

                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8" viewBox="0 0 256 256">
                            <g fill="#312e81" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}
                            >
                                <g transform="scale(5.12,5.12)">
                                    <path d="M25,3c-12.15,0 -22,9.85 -22,22c0,11.03 8.125,20.137 18.712,21.728v-15.897h-5.443v-5.783h5.443v-3.848c0,-6.371 3.104,-9.168 8.399,-9.168c2.536,0 3.877,0.188 4.512,0.274v5.048h-3.612c-2.248,0 -3.033,2.131 -3.033,4.533v3.161h6.588l-0.894,5.783h-5.694v15.944c10.738,-1.457 19.022,-10.638 19.022,-21.775c0,-12.15 -9.85,-22 -22,-22z"></path>
                                </g>
                            </g>
                        </svg>

                    </button>
                </div>
            </div>
            <div className="flex flex-col p-2">
                <p className="text-xs text-gray-700 font-sans mx-auto">Made with ❤️ by Arthur Duval.</p>
            </div>
        </footer>
    )
}