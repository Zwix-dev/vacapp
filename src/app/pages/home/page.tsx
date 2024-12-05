import Nav from "@/components/nav";
export default function Home() {
    return (
        <>
            <Nav></Nav>
            <section className="lg:pt-20 pt-36">
                <div className="container mx-auto text-center px-4 ">
                    <h1 className="font-bold text-indigo-900 text-3xl sm:text-3xl lg:text-6xl lg:m-16 ">
                        Art'Vacati<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-12 inline align-middle ml-2 text-yellow-400"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" /></svg>n
                    </h1>
                    <p className="mt-4 text-gray-500 text-lg m-16">
                        Cet outil simplifie et centralise la gestion des demandes de congé au sein de votre entreprise. Les employés peuvent facilement soumettre leurs demandes, tandis que les responsables peuvent les examiner et les approuver efficacement. Il réduit les tâches administratives, améliore la communication et garantit un processus fluide et transparent pour toutes les personnes concernées.
                    </p>
                    <div className="flex flex-col justify-center items-center m-16">
                        <button className="bg-teal-500 p-3 rounded-full w-64 font-semibold text-white font-sans">
                            Acheter maintenant
                        </button>
                        <button className="text-yellow-400 font-sans m-4 underline">
                            En savoir plus
                        </button>
                    </div>
                </div>
            </section>
            <section className="py-10" id="features">
                <div className="container mx-auto text-center px-4">
                    <h1 className="text-2xl font-bold text-indigo-900 m-10">
                        Fonctionalités
                    </h1>
                    <p className="mt-4 text-gray-500 text-lg m-10">
                        Cet outil est développé par des entrepreuneurs pour des entrepreuneurs et vise à optimiser un maximum la gestion des plannings.
                    </p>
                    <div className="flex flex-col p-4 md:flex-row gap-8 justify-center ">
                        <div className="border-gray-200 border p-10 rounded-lg hover:shadow-xl hover:shadow-gray-200/50">
                            <div className="flex flex-col items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12 text-teal-500">
                                    <path fillRule="evenodd" d="M20.599 1.5c-.376 0-.743.111-1.055.32l-5.08 3.385a18.747 18.747 0 0 0-3.471 2.987 10.04 10.04 0 0 1 4.815 4.815 18.748 18.748 0 0 0 2.987-3.472l3.386-5.079A1.902 1.902 0 0 0 20.599 1.5Zm-8.3 14.025a18.76 18.76 0 0 0 1.896-1.207 8.026 8.026 0 0 0-4.513-4.513A18.75 18.75 0 0 0 8.475 11.7l-.278.5a5.26 5.26 0 0 1 3.601 3.602l.502-.278ZM6.75 13.5A3.75 3.75 0 0 0 3 17.25a1.5 1.5 0 0 1-1.601 1.497.75.75 0 0 0-.7 1.123 5.25 5.25 0 0 0 9.8-2.62 3.75 3.75 0 0 0-3.75-3.75Z" clipRule="evenodd" />
                                </svg>
                                <div className="flex flex-col w-80 pb-10">
                                    <p className="text-xl font-sans text-slate-500 m-8">Interfaces</p>
                                    <p className="text-gray-500">Conçu pour offrir une expérienceeeeeeeeeee visuelle épurée et élégante. Avec une interface intuitive et un design minimaliste, il met en valeur l'essentiel pour garantir une navigation fluide et agréable.</p>
                                </div>
                            </div>
                        </div>
                        <div className="border-gray-200 border p-10 rounded-lg hover:shadow-xl hover:shadow-gray-200/50">
                            <div className="flex flex-col items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12 text-teal-500">
                                    <path fillRule="evenodd" d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                                </svg>
                                <div className="flex flex-col w-80 pb-10"> 
                                    <p className="text-xl text-slate-500 m-8">Clean code</p>
                                    <p className="text-gray-500">Notre outil garantit un code lisible, bien structuré et facilement maintenable. Chaque fonctionnalité est implémentée de manière claire, concise et modulaire, facilitant les évolutions et assurant une performance optimale.</p>
                                </div>
                            </div>
                        </div>
                        <div className="border-gray-200 border p-10 rounded-lg hover:shadow-xl hover:shadow-gray-200/50">
                            <div className="flex flex-col items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12 text-teal-500">
                                    <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                </svg>
                                <div className="flex flex-col w-80 pb-10"> 
                                    <p className="text-xl text-slate-500 m-8">Securisé</p>
                                    <p className="text-gray-500">Nous garantissons la sécurité de vos données en utilisant des protocoles de chiffrement SSL pour assurer la confidentialité des informations échangées. Des mises à jour fréquentes sont également réalisées pour maintenir la sécurité.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}