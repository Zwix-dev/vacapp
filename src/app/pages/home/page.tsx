import ContactSection from "@/components/contact";
import Footer from "@/components/footer";
import Nav from "@/components/nav";

export default function Home() {
    return (
        <>
            <Nav></Nav>
            <section className="lg:pt-20 pt-36">
                <div className="container mx-auto text-center px-4 ">
                    <h1 className="font-bold text-indigo-900 text-3xl sm:text-3xl lg:text-6xl lg:m-16 ">
                        Vac'Acti<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 inline align-middle ml-2 text-yellow-400"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" /></svg>n
                    </h1>
                    <p className="mt-4 text-gray-500 text-lg m-16">
                        Cet outil simplifie et centralise la gestion des demandes de congé au sein de votre entreprise. Les employés peuvent facilement soumettre leurs demandes, tandis que les responsables peuvent les examiner et les approuver efficacement. Il réduit les tâches administratives, améliore la communication et garantit un processus fluide et transparent pour toutes les personnes concernées.
                    </p>
                    <div className="flex flex-col justify-center items-center m-16">
                        <button className="bg-teal-500 p-3 rounded-full w-64 font-semibold text-white font-sans">
                            Acheter maintenant
                        </button>
                        <button className="text-indigo-900 font-sans m-4 underline">
                            En savoir plus
                        </button>
                    </div>
                </div>
            </section>
            <section className="py-10 bg-gray-50" id="features">
                <div className="container mx-auto text-center px-4">
                    <h1 className="text-2xl font-bold text-indigo-900 m-10">
                        Fonctionnalités
                    </h1>
                    <p className="mt-4 text-gray-500 text-lg m-10">
                        Cet outil est développé par des entrepreneurs pour des entrepreneurs et vise à optimiser un maximum la gestion des plannings.
                    </p>
                    <div className="flex flex-col p-4 md:flex-row gap-8 justify-center ">
                        <div className="border-gray-100 border p-10 rounded-lg hover:shadow-xl bg-white hover:shadow-gray-200/50">
                            <div className="flex flex-col items-center">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12 text-yellow-300">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
                                </svg>

                                <div className="flex flex-col w-80 pb-10">
                                    <p className="text-xl font-sans text-indigo-900 m-8 font-semibold">Interfaces</p>
                                    <p className="text-gray-500">Conçu pour offrir une expérience visuelle épurée et élégante. Avec une interface intuitive et un design minimaliste, il met en valeur l'essentiel pour garantir une navigation fluide et agréable.</p>
                                </div>
                            </div>
                        </div>
                        <div className="border-gray-100 border p-10 rounded-lg hover:shadow-xl bg-white hover:shadow-gray-200/50">
                            <div className="flex flex-col items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12 text-yellow-300">
                                    <path fillRule="evenodd" d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                                </svg>
                                <div className="flex flex-col w-80 pb-10">
                                    <p className="text-xl text-indigo-900 m-8 font-semibold">Clean code</p>
                                    <p className="text-gray-500">Notre outil garantit un code lisible, bien structuré et facilement maintenable. Chaque fonctionnalité est implémentée de manière claire, concise et modulaire, facilitant les évolutions et assurant une performance optimale.</p>
                                </div>
                            </div>
                        </div>
                        <div className="border-gray-100 border p-10 rounded-lg hover:shadow-xl bg-white hover:shadow-gray-200/50">
                            <div className="flex flex-col items-center">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12 text-yellow-300">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                                </svg>

                                <div className="flex flex-col w-80 pb-10">
                                    <p className="text-xl text-indigo-900 m-8 font-semibold">Securisé</p>
                                    <p className="text-gray-500">Nous garantissons la sécurité de vos données en utilisant des protocoles de chiffrement SSL pour assurer la confidentialité des informations échangées. Des mises à jour fréquentes sont également réalisées pour maintenir la sécurité.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ContactSection></ContactSection>
            {/* <Footer></Footer> */}
        </>

    );
}