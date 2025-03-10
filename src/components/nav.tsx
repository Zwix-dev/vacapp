"use client"

import React, { useState } from "react"
import Link from "next/link"
import { signOut, useSession } from "next-auth/react"
import { Sun, Menu, User, LogOut, Settings, AppWindow, Moon } from 'lucide-react'
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useTheme } from "next-themes"

export default function Nav() {
    const { data: session } = useSession()
    const [isPopoverOpen, setIsPopoverOpen] = useState(false)

    const { theme, setTheme } = useTheme()
    const navItems = [
        { href: "/", label: "Accueil" },
        { href: "#features", label: "Fonctionnalités" },
        { href: "#shop", label: "Prix" },
    ]

    const UserMenu = () => (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                        <AvatarImage className="dark:bg-slate-800" src={session?.user?.image ?? "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20class%3D%22lucide%20lucide-user%22%3E%3Cpath%20d%3D%22M19%2021v-2a4%204%200%200%200-4-4H9a4%204%200%200%200-4%204v2%22/%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%227%22%20r%3D%224%22/%3E%3C/svg%3E"} alt="" />
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">{session?.user?.name}</p>
                        <p className="text-xs leading-none text-muted-foreground">{session?.user?.email}</p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <AppWindow className="mr-2 h-4 w-4" />
                        <Link href="/dashboard">Dashboard</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Paramètres</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => signOut()}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )

    return (
        <nav className="w-full border-b">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between ml-4">
                    <Link href="/" className="flex items-center space-x-1 text-indigo-900 dark:text-white">
                        <h1 className="text-xl font-semibold text-indigo-900 dark:text-white">Vac&apos;Acti</h1>
                        <Sun className="h-6 w-6 text-yellow-400" />
                        <h1 className="text-xl font-semibold text-indigo-900 dark:text-white">n</h1>
                    </Link>
                    <div className="hidden md:flex md:items-center md:space-x-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary hover:bg-gray-200 hover:text-gray-800 dark:hover:bg-gray-900 p-2 rounded-sm"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                    <div className="hidden md:flex items-center space-x-4 pr-4">
                        {session ? (
                            <UserMenu />
                        ) : (
                            <Button asChild className="bg-teal-500 hover:bg-teal-700">
                                <Link href="/api/auth/signin">Log In</Link>
                            </Button>
                        )}
                        <div className="flex items-center gap-4">

                            <div className="flex w-[16px] items-center">
                                <button className="border-none bg-transparent" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                                    {theme === "dark" ? (
                                        <Moon className="h-[16px] w-[16px] rotate-90 transition-all dark:rotate-0" />
                                    ) : (
                                        <Sun className="h-[16px] w-[16px] rotate-0 transition-all dark:-rotate-90" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 pr-4 md:hidden">
                        <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="ghost"
                                    className="md:hidden"
                                    size="icon"
                                >
                                    <Menu className="h-5 w-5" />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-screen">
                                <nav className="flex flex-col items-center space-y-4">
                                    {navItems.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                                            onClick={() => setIsPopoverOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    ))}

                                    {session && (
                                        <div className="flex flex-col items-center space-y-4">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                                                        <Avatar className="h-8 w-8">
                                                            <AvatarImage src={session?.user?.image ?? "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20class%3D%22lucide%20lucide-user%22%3E%3Cpath%20d%3D%22M19%2021v-2a4%204%200%200%200-4-4H9a4%204%200%200%200-4%204v2%22/%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%227%22%20r%3D%224%22/%3E%3C/svg%3E"} alt="" />
                                                        </Avatar>
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent className="w-56" align="end" forceMount>
                                                    <DropdownMenuLabel className="font-normal">
                                                        <div className="flex flex-col space-y-1">
                                                            <p className="text-sm font-medium leading-none">{session?.user?.name}</p>
                                                            <p className="text-xs leading-none text-muted-foreground">{session?.user?.email}</p>
                                                        </div>
                                                    </DropdownMenuLabel>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuGroup>
                                                        <DropdownMenuItem>
                                                            <User className="mr-2 h-4 w-4" />
                                                            <span>Profile</span>
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem>
                                                            <AppWindow className="mr-2 h-4 w-4" />
                                                            <Link href="/dashboard">Dashboard</Link>
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem>
                                                            <Settings className="mr-2 h-4 w-4" />
                                                            <span>Paramètres</span>
                                                        </DropdownMenuItem>
                                                    </DropdownMenuGroup>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem onClick={() => signOut()}>
                                                        <LogOut className="mr-2 h-4 w-4" />
                                                        <span>Log out</span>
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </div>
                                    )}
                                    {!session && (
                                        <Button asChild className="w-fullbg-teal-500 bg-teal-500 hover:bg-teal-7000" onClick={() => setIsPopoverOpen(false)}>
                                            <Link href="/api/auth/signin">Log In</Link>
                                        </Button>
                                    )}
                                    <button className="border-none bg-transparent" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                                        {theme === "dark" ? (
                                            <Moon className="h-[16px] w-[16px] rotate-90 transition-all dark:rotate-0" />
                                        ) : (
                                            <Sun className="h-[16px] w-[16px] rotate-0 transition-all dark:-rotate-90" />
                                        )}
                                    </button>
                                </nav>
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
            </div>
        </nav>
    )
}
