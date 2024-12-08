import React from 'react';

export default function ContactSection() {
    return (
        <div className=" flex items-center justify-center py-28">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className='p-3'>
                        <h2 className="text-2xl font-bold text-indigo-900 mb-4">Prendre contact</h2>
                        <p className="text-gray-600 mb-6">
                            Nous apprécions chaque client et nous sommes fiers de leur fidélité pour le projet.
                        </p>
                        <div className='mt-12'>
                            <h3 className="text-xl font-semibold text-indigo-900 mb-12">Ou nous trouver ?</h3>
                            
                            <div className="">
                                <iframe className='h-[300px] sm:h-[450px] sm:w-[600px] md:h-[500px] md:w-[600px] lg:h-[450px] xl:h-[300px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158.13201063452576!2d3.0626942998344715!3d50.643607904544986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c32a79ee422073%3A0xff4fe498fd24fa0e!2s64%20Av.%20du%20Peuple%20Belge%2C%2059800%20Lille!5e0!3m2!1sfr!2sfr!4v1733414248272!5m2!1sfr!2sfr" ></iframe>
                            </div>
                        </div>
                    </div>
                    <div className='p-2'>
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
                                    placeholder=' Votre nom'
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


