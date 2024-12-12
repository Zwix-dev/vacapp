import Footer from '@/components/footer'
import Nav from '@/components/nav'
import { NewPassForm } from '@/components/new-password-form'
import React, { Suspense } from 'react'


const NewVerificationPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Nav />
      <div className="flex-grow flex items-center justify-center px-4">
      <Suspense>
        <NewPassForm></NewPassForm>
      </Suspense>
      </div>
      <Footer />
    </div>
  )
}

export default NewVerificationPage