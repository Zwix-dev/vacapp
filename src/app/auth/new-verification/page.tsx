import Footer from '@/components/footer'
import Nav from '@/components/nav'
import VerificationForm from '@/components/new-verification-form'
import React from 'react'


const NewVerificationPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Nav />
      <div className="flex-grow flex items-center justify-center px-4">
        <VerificationForm></VerificationForm>
      </div>
      <Footer />
    </div>
  )
}

export default NewVerificationPage