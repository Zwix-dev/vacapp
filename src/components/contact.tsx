"use client"
import React from 'react';
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast";
import { submitContactForm } from '@/actions/submit-contact-form'
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Le nom doit contenir au moins 2 caractères.",
  }),
  email: z.string().email({
    message: "Veuillez entrer une adresse email valide.",
  }),
  message: z.string().min(10, {
    message: "Le message doit contenir au moins 10 caractères.",
  }),
})
export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      // await submitContactForm(values)
      form.reset()
      toast({
        title: "Formulaire envoyé",
        description: "Nous vous contacterons bientôt.",
      })
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite. Veuillez réessayer.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <div className=" flex items-center justify-center py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className='p-3'>
            <h2 className="text-2xl font-bold text-indigo-900 dark:text-white mb-4 ">Prendre contact</h2>
            <p className="text-gray-600 mb-6">
              Nous apprécions chaque client et nous sommes fiers de leur fidélité pour le projet.
            </p>
            <div className='mt-12'>
              <h3 className="text-xl font-semibold text-indigo-900 dark:text-white mb-12">Ou nous trouver ?</h3>

              <div className="">
                <iframe className='h-[300px] sm:h-[450px] sm:w-[600px] md:h-[500px] md:w-[600px] lg:h-[450px] xl:h-[300px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158.13201063452576!2d3.0626942998344715!3d50.643607904544986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c32a79ee422073%3A0xff4fe498fd24fa0e!2s64%20Av.%20du%20Peuple%20Belge%2C%2059800%20Lille!5e0!3m2!1sfr!2sfr!4v1733414248272!5m2!1sfr!2sfr" ></iframe>
              </div>
            </div>
          </div>
          <div className='p-2 rounded-lg '>
            <h2 className="text-2xl font-bold text-indigo-900 mb-4 dark:text-white">Contact par e-mail</h2>
            <p className="text-gray-600 mb-6">
              Notre équipe de support se chargera de régler au mieux votre demande.
            </p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full ">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom</FormLabel>
                      <FormControl className='dark:bg-gray-200'>
                        <Input placeholder="Votre nom" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl className='dark:bg-gray-200'>
                        <Input type="email" placeholder="votre@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl className='dark:bg-gray-200'>
                        <Textarea placeholder="Votre message ici..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isSubmitting} className="w-full bg-teal-500 hover:bg-teal-700">
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};