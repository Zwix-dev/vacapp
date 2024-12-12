import Footer from '@/components/footer'
import Nav from '@/components/nav'
import VerificationForm from '@/components/new-verification-form'
import ResetPasswordForm from '@/components/reset-password-form'
import React from 'react'


const NewReset = () => {
  return (
    <div className="flex flex-col h-screen">
      <Nav />
      <div className="flex-grow flex items-center justify-center px-4">
        <ResetPasswordForm></ResetPasswordForm>
      </div>
      <Footer />
    </div>
  )
}

export default NewReset