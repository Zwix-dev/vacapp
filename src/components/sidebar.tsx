"use client"

import * as React from 'react'
import { Calendar, UserCheck, UserMinus, Users, FileText, Briefcase, List, User2, ChevronUp, ChevronDown, UserPlus, TrendingUp, BookOpen, Layers, Clock, Moon, Sun } from 'lucide-react'

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubItem,
    SidebarRail,
    SidebarTrigger,
    useSidebar,
} from '@/components/ui/sidebar'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { useState } from 'react'
import { useTheme } from 'next-themes'

const menuItems = [
    {
        title: 'Gestion RH',
        icon: Users,
        submenu: [
            { title: 'Planning', icon: Calendar, url: '/planning' },
            { title: 'Liste des employés', icon: Users, url: '/employes' },
            { title: 'Contrats', icon: Briefcase, url: '/contrats' },
        ]
    },
    {
        title: 'Absences',
        icon: UserMinus,
        submenu: [
            { title: 'Demande de congés', icon: UserCheck, url: '/conges' },
            { title: 'Demande d\'absence', icon: UserMinus, url: '/absences' },
            { title: 'Liste des absences', icon: List, url: '/liste-absences' },
            { title: 'Arrêts', icon: FileText, url: '/arrets' },
        ]
    },
    {
        title: 'Recrutement',
        icon: Briefcase,
        submenu: [
            { title: 'Offres d\'emploi', icon: FileText, url: '/offres' },
            { title: 'Candidatures', icon: UserPlus, url: '/candidatures' },
            { title: 'Suivi des recrutements', icon: TrendingUp, url: '/recrutements' },
        ]
    },
    {
        title: 'Formation',
        icon: BookOpen,
        submenu: [
            { title: 'Catalogue de formations', icon: Layers, url: '/formations' },
            { title: 'Sessions planifiées', icon: Calendar, url: '/sessions' },
            { title: 'Historique des formations', icon: Clock, url: '/historique-formations' },
        ]
    },
];


export function RHSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const {
        state,
        open,
        setOpen,
        openMobile,
        setOpenMobile,
        isMobile,
        toggleSidebar,
    } = useSidebar()
    const [isHovered, setIsHovered] = useState(false);
    const { theme, setTheme } = useTheme()

    return (
        <>
        { isMobile && <SidebarTrigger /> }
        <Sidebar {...props} collapsible="icon" className="dark:bg-inherit" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
            <SidebarHeader className="flex items-center justify-between p-4 w-full">
                {open && (
                    <div className="flex items-center justify-between w-full">
                        <h1 className="font-bold text-indigo-900 text-sm dark:text-white">
                            Vac'Acti
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 inline align-middle text-yellow-400"><path    strokeLinecap="round"    strokeLinejoin="round"    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"/></svg>n
                        </h1>
                        <button className="border-none bg-transparent mt-1" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                            {theme === "dark" ? (
                                <Moon className="h-[16px] w-[16px] rotate-90 transition-all dark:rotate-0" />
                            ) : (
                                <Sun className="h-[16px] w-[16px] rotate-0 transition-all dark:-rotate-90" />
                            )}
                        </button>
                    </div>
                )}
            </SidebarHeader>

            <SidebarContent className='flex mt-28'>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menuItems.map((item) => (
                                <Collapsible key={item.title} className="group/collapsible my-2">
                                    <SidebarMenuItem>
                                        <CollapsibleTrigger asChild>
                                            <SidebarMenuButton tooltip={item.title} className='hover:bg-black hover:text-white dark:hover:bg-gray-800'>
                                                <item.icon className="h-5 w-5" />
                                                <span className="ml-3">{item.title}</span>
                                                <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                                            </SidebarMenuButton>
                                        </CollapsibleTrigger>
                                        <CollapsibleContent>
                                            <SidebarMenuSub>
                                                {item.submenu.map((subItem) => (
                                                    <SidebarMenuSubItem key={subItem.title} >
                                                        <SidebarMenuButton asChild tooltip={subItem.title} className='hover:bg-black hover:text-white dark:hover:bg-gray-800'>
                                                            <a href={subItem.url} className="flex items-center gap-3">
                                                                <subItem.icon className="h-4 w-4" />
                                                                <span>{subItem.title}</span>
                                                            </a>
                                                        </SidebarMenuButton>
                                                    </SidebarMenuSubItem>
                                                ))}
                                            </SidebarMenuSub>
                                        </CollapsibleContent>
                                    </SidebarMenuItem>
                                </Collapsible>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu >
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton tooltip="User Menu">
                                    <User2 className="h-5 w-5" />
                                    <span className="ml-3">Username</span>
                                    <ChevronUp className="ml-auto h-4 w-4" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                side="top"
                                className="w-[--radix-popper-anchor-width]"
                            >
                                <DropdownMenuItem>
                                    <span>Account</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <span>Billing</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <span>Sign out</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
        </>
        
    )
}

