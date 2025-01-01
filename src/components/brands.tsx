'use client'

import Image from 'next/image'
import { useRef, useEffect } from 'react'

export default function LogoScroll() {
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const scrollContainer = scrollRef.current
        if (!scrollContainer) return

        const handleScroll = () => {
            const isAtEnd = scrollContainer.scrollLeft >= (scrollContainer.scrollWidth - scrollContainer.clientWidth)
            if (isAtEnd) {
                scrollContainer.scrollLeft = 0
            }
        }

        let scrollInterval = setInterval(() => {
            if (scrollContainer) {
                scrollContainer.scrollLeft += 1
                handleScroll()
            }
        }, 30)

        return () => clearInterval(scrollInterval)
    }, [])

    const logos = [
        { name: 'Amazon', url: '/Amazon_logo.svg?height=40&width=120' },
        { name: 'Facebook', url: '/facebook.svg?height=40&width=120' },
        { name: 'Tinder', url: '/Logo-tinder.svg?height=40&width=120' },
        { name: 'Airbnb', url: '/Airbnb_Logo.svg?height=40&width=120' },
        { name: 'Cadbury', url: '/Cadbury.svg?height=40&width=120' },
        { name: 'Canon', url: '/Canon_logo.svg?height=40&width=120' },
        { name: 'Alpine', url: '/Alpine.svg?height=40&width=120' },
     
        { name: 'Amazon', url: '/Amazon_logo.svg?height=40&width=120' },
        { name: 'Facebook', url: '/facebook.svg?height=40&width=120' },
        { name: 'Tinder-2', url: '/Logo-tinder.svg?height=40&width=120' },
        { name: 'Airbnb-2', url: '/Airbnb_Logo.svg?height=40&width=120' },
        { name: 'Cadbury-2', url: '/Cadbury.svg?height=40&width=120' },
        { name: 'Canon-2', url: '/Canon_logo.svg?height=40&width=120' },
        { name: 'Alpine-2', url: '/Alpine.svg?height=40&width=120' },
    ]

    return (
        <div className="w-full relative ">

            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-900 to-transparent z-10" />
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-900 to-transparent z-10" />
            <div
                className="absolute inset-0 bg-teal-900/20 blur-3xl"
                style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(0, 76, 66, 0.5) 0%, rgba(0, 76, 66, 0) 70%)',
                }}
            ></div>
            <div
                ref={scrollRef}
                className="flex gap-16 overflow-hidden py-8 px-4"
            >
                {logos.map((logo, index) => (
                    <div
                        key={logo.name}
                        className="flex items-center justify-center min-w-[120px] opacity-70 hover:opacity-100 transition-opacity duration-300"
                    >
                        <Image
                            src={logo.url}
                            alt={logo.name}
                            width={120}
                            height={40}
                            className="w-auto h-8 object-contain brightness-0 invert"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

