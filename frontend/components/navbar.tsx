"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Wrench, LayoutDashboard, PlusCircle, User, LogOut, Menu } from "lucide-react"
import { NotificationCenter } from "@/components/notification-center"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navLinks = [
    { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/create-complaint", label: "Raise Complaint", icon: PlusCircle },
    { href: "/profile", label: "Profile", icon: User },
]

export function Navbar() {
    const pathname = usePathname()

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/60 backdrop-blur-xl transition-all duration-300">
            <div className="container mx-auto px-4 h-18 flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center gap-2.5 group transition-transform hover:scale-105 active:scale-95">
                        <div className="p-2 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors border border-primary/10 shadow-sm shadow-primary/5">
                            <Wrench className="h-5 w-5 text-primary" />
                        </div>
                        <span className="font-extrabold text-2xl tracking-tighter text-primary">FixIt</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => {
                            const Icon = link.icon
                            const isActive = pathname === link.href
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 group",
                                        isActive
                                            ? "bg-primary text-white shadow-lg shadow-primary/20"
                                            : "text-muted-foreground hover:bg-primary/5 hover:text-primary"
                                    )}
                                >
                                    <Icon className={cn("h-4 w-4 transition-transform group-hover:scale-110", isActive ? "text-white" : "text-muted-foreground group-hover:text-primary")} />
                                    {link.label}
                                </Link>
                            )
                        })}
                    </nav>
                </div>

                <div className="flex items-center gap-3">
                    <div className="hidden md:flex items-center gap-3 pr-4 border-r border-border/40 mr-1">
                        <NotificationCenter />
                    </div>

                    <div className="flex items-center gap-3">
                        {/* Interactive Profile Dropdown */}
                        <div className="hidden md:block">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <div className="flex items-center gap-3 active:scale-95 transition-transform cursor-pointer group">
                                        <div className="flex flex-col items-end mr-1">
                                            <span className="text-sm font-bold text-slate-900 group-hover:text-primary transition-colors">John Doe</span>
                                            <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-widest">Resident</span>
                                        </div>
                                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/20 group-hover:border-primary/40 transition-all overflow-hidden shadow-inner">
                                            <span className="text-sm font-black text-primary">JD</span>
                                        </div>
                                    </div>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-64">
                                    <DropdownMenuLabel>Account Details</DropdownMenuLabel>
                                    <div className="px-3 py-4 border-b border-border/5 mb-1 bg-primary/5 rounded-lg mx-1">
                                        <p className="text-sm font-bold text-slate-900 leading-none mb-1">John Doe</p>
                                        <p className="text-xs text-muted-foreground mb-1.5 font-medium">john.doe@example.com</p>
                                        <div className="inline-flex items-center px-2 py-0.5 rounded-full bg-primary/10 text-[9px] font-black uppercase tracking-widest text-primary border border-primary/20">
                                            Resident Profile
                                        </div>
                                    </div>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem asChild>
                                        <Link href="/profile" className="flex items-center gap-2">
                                            <User className="h-4 w-4" />
                                            View Profile
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem asChild className="text-primary hover:bg-primary hover:text-white transition-all">
                                        <Link href="/login" className="flex items-center gap-2 w-full">
                                            <LogOut className="h-4 w-4" />
                                            Switch Account
                                        </Link>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>

                        {/* Mobile Navigation */}
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="md:hidden hover:bg-primary/5 rounded-xl">
                                    <Menu className="h-6 w-6 text-primary" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="glass border-l border-border/40 p-0">
                                <SheetHeader className="p-6 border-b border-border/5 text-left">
                                    <SheetTitle className="text-2xl font-black tracking-tighter text-primary flex items-center gap-2">
                                        <Wrench className="h-6 w-6" /> FixIt Navigation
                                    </SheetTitle>
                                </SheetHeader>
                                <div className="flex flex-col h-[calc(100vh-80px)] p-4">
                                    <div className="flex-1 space-y-2 pt-4">
                                        {navLinks.map((link) => {
                                            const Icon = link.icon
                                            const isActive = pathname === link.href
                                            return (
                                                <Link
                                                    key={link.href}
                                                    href={link.href}
                                                    className={cn(
                                                        "flex items-center gap-4 p-4 rounded-2xl text-lg font-bold transition-all",
                                                        isActive
                                                            ? "bg-primary text-white shadow-xl shadow-primary/20"
                                                            : "text-muted-foreground hover:bg-primary/5 hover:text-primary"
                                                    )}
                                                >
                                                    <Icon className="h-6 w-6" />
                                                    {link.label}
                                                </Link>
                                            )
                                        })}
                                    </div>
                                    <div className="pt-4 border-t border-border/5 pb-8 space-y-4">
                                        <div className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border/10">
                                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/20">
                                                <span className="font-black text-primary">JD</span>
                                            </div>
                                            <div>
                                                <p className="font-bold">John Doe</p>
                                                <p className="text-xs text-muted-foreground">Resident • Ward 12</p>
                                            </div>
                                        </div>
                                        <Button variant="ghost" className="w-full justify-start gap-4 p-4 h-auto text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-2xl" asChild>
                                            <Link href="/login">
                                                <LogOut className="h-6 w-6" />
                                                <span className="text-lg font-bold">Switch Account</span>
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    )
}
