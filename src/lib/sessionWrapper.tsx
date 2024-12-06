"use client"

import { SessionProvider } from "next-auth/react"

const SessionsWrapper = ({children} : {children : React.ReactNode}) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}

export default SessionsWrapper