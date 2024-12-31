"use client"
import { Check, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { useState } from 'react'

export default function PricingTable() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      name: "Basic",
      description: "Pour les petit groupes",
      price: "29€",
      features: [
        { name: "Jusqu'a 10 employés", included: true },
        { name: "Suivi de base des congés", included: true },
        { name: "Notifications par e-mail", included: true },
        { name: "Rapports avancés", included: false },
      ],
      cta: "Souscrire",
      dotColor: "from-yellow-400 to-yellow-600",
    },
    {
      name: "Pro",
      description: "Pour les entreprises en croissance",
      price: "79€ ",
      features: [
        { name: "Jusqu'a 50 employés", included: true },
        { name: "Suivi avancé des congés", included: true },
        { name: "Notifications par e-mail & SMS", included: true },
        { name: "Rapports de base", included: true },
      ],
      cta: "Souscrire",
      dotColor: "from-yellow-400 to-yellow-600",
    },
    {
      name: "Entreprise",
      description: "Pour les grandes entreprises",
      price: "199€",
      features: [
        { name: "Employés illimités", included: true },
        { name: "Suivi de avancé des congés", included: true },
        { name: "Notifications par e-mail & SMS", included: true },
        { name: "Rapports et analyses de performances avancés", included: true },
        { name: "Support en ligne 24/24", included: true },
      ],
      cta: "Souscrire",
      dotColor: "from-yellow-400 to-yellow-600",
    },
  ];

  return (
    <section className="w-full py-20 bg-gray-50 dark:bg-inherit border-b">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 pb-8">Choisisez votre abonnement</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <Card 
            key={plan.name}
            className={`w-full transition-all duration-300 ${
              selectedPlan === plan.name ? 'border-white shadow-lg scale-105' : ''
            }`}
            onClick={() => setSelectedPlan(plan.name)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setSelectedPlan(plan.name);
              }
            }}
            tabIndex={0}
            role="button"
            aria-pressed={selectedPlan === plan.name}
            >
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="relative inline-flex items-center">
                  <div 
                    className={`absolute -left-6 w-4 h-4 rounded-full bg-gradient-to-r ${plan.dotColor} shadow-lg shadow-yellow-500/50`}
                    style={{
                      filter: 'blur(2px)',
                    }}
                  />
                  <div 
                    className={`absolute -left-6 w-4 h-4 rounded-full bg-gradient-to-r ${plan.dotColor}`}
                  />
                  <p className="text-4xl font-bold">{plan.price}<span className="text-xl font-normal">/mois</span></p>
                </div>
                <ul className="mt-4 space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature.name} className="flex items-center justify-center">
                      {feature.included ? (
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                      ) : (
                        <X className="mr-2 h-4 w-4 text-gray-500" />
                      )}
                      {feature.name}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-teal-600 hover:bg-teal-700" variant={"outline"}>
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

