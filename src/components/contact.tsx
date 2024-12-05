import React from 'react';

export default function ContactSection() {
    return (
        <div className="bg-gray-50 min-h-screen flex items-center justify-center py-12">
            <div className="container mx-auto px-6 lg:px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div >
                        <h2 className="text-2xl font-bold text-indigo-900 mb-4">Prendre contact</h2>
                        <p className="text-gray-600 mb-6">
                            Nous apprécions chaque client et nous sommes fiers de leur fidélité pour le projet.
                        </p>
                        <div className='mt-9'>
                            <h3 className="text-xl font-semibold text-indigo-900 mb-9">Find Us on Map</h3>
                            
                            <div className="">
                                <iframe width="600" height="300" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=52.70967533219885, -8.020019531250002&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"></iframe><br />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-indigo-900 mb-4">Contact par e-mail</h2>
                        <p className="text-gray-600 mb-6">
                            Notre équipe de support se chargera de régler au mieux votre demande.
                        </p>
                        <form className="space-y-4 bg-gray-100 shadow-md rounded-lg p-10">
                            <label htmlFor="email" className="block text-sm text-indigo-900 font-bold mt-4">
                                E-MAIL
                            </label>
                            <div>

                                <input
                                    type="email"
                                    id="email"
                                    placeholder=" Votre e-mail"
                                    className="w-full mt-1 p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                            </div>
                            <label htmlFor="message" className="block text-sm mb-3 mt-4 text-indigo-900 font-bold">
                                MESSAGE
                            </label>
                            <div>

                                <textarea
                                    id="message"
                                    placeholder=" Donnez nous d'avantage de détails"
                                    className="w-full mt-1 p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                                ></textarea>
                            </div>
                            <label htmlFor="name" className="block text-sm text-indigo-900 font-bold ">
                                NOM
                            </label>
                            <div className='flex flex-row gap-8'>

                                <input
                                    type="text"
                                    id="name"
                                    placeholder=" Votre nom"
                                    className="w-full mt-1 p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                                <button
                                    type="submit"
                                    className=" bg-teal-500 text-white py-2 px-4 rounded-full hover:bg-green-600"
                                >
                                    Envoyer
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};


