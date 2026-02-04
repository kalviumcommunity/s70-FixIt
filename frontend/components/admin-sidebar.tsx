"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { LayoutDashboard, Users, BarChart3, Settings, LogOut, Wrench, User } from "lucide-react"

export function AdminSidebar() {
    const pathname = usePathname()

    const links = [
        {
            href: "/admin/dashboard",
            label: "Dashboard",
            icon: LayoutDashboard,
        },
        {
            href: "/admin/assignments",
            label: "Staff Assignment",
            icon: Users,
        },
        {
            href: "/admin/reports",
            label: "Reports & Analytics",
            icon: BarChart3,
        },
        {
            href: "/admin/profile",
            label: "Profile Settings",
            icon: User,
        },
        {
            href: "/admin/settings",
            label: "Settings",
            icon: Settings,
        },
    ]

    return (
        <div className="flex flex-col h-full bg-card/20 glass-dark">
            <div className="h-18 flex items-center px-6 border-b border-border/5">
                <div className="flex items-center gap-2.5 group transition-all">
                    <div className="p-2 bg-primary/10 rounded-xl border border-primary/20 shadow-glow transition-transform group-hover:scale-110">
                        <Wrench className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-black text-2xl tracking-tighter text-primary group-hover:tracking-tight transition-all">FixIt Admin</span>
                </div>
            </div>
            <div className="flex-1 py-10 px-4">
                <div className="mb-4 px-2">
                    <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-4">Operations Hub</p>
                </div>
                <nav className="grid gap-2">
                    {links.map((link, index) => {
                        const Icon = link.icon
                        const isActive = link.href === pathname
                        return (
                            <Link
                                key={index}
                                href={link.href}
                                className={cn(
                                    buttonVariants({ variant: isActive ? "secondary" : "ghost", size: "lg" }),
                                    "justify-start gap-4 transition-all duration-500 h-11 text-sm font-bold rounded-2xl group",
                                    isActive
                                        ? "bg-primary/10 text-primary border-r-4 border-primary shadow-lg shadow-primary/5 translate-x-1"
                                        : "text-muted-foreground hover:bg-primary/5 hover:text-primary hover:translate-x-1"
                                )}
                            >
                                <Icon className={cn("h-5 w-5 transition-transform group-hover:scale-110", isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary")} />
                                <span>{link.label}</span>
                            </Link>
                        )
                    })}
                </nav>
            </div>
            <div className="p-6 border-t border-border/5 bg-primary/5">
                <Button variant="ghost" className="w-full justify-start gap-4 text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-all rounded-2xl h-12 font-bold group" asChild>
                    <Link href="/login">
                        <LogOut className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                        <span>Sign Out</span>
                    </Link>
                </Button>
            </div>
        </div>
    )
}
