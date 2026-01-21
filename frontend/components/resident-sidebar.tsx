"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { LayoutDashboard, PlusCircle, LogOut, Wrench, User } from "lucide-react"

export function ResidentSidebar() {
    const pathname = usePathname()

    const links = [
        {
            href: "/dashboard",
            label: "Dashboard",
            icon: LayoutDashboard,
        },
        {
            href: "/create-complaint",
            label: "Raise Complaint",
            icon: PlusCircle,
        },
        {
            href: "/profile",
            label: "Profile",
            icon: User,
        },
    ]

    return (
        <div className="flex flex-col border-r bg-card/40 glass h-full">
            <div className="h-16 flex items-center px-6 border-b border-border/5">
                <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-primary/10 rounded-lg border border-primary/20 shadow-[0_0_15px_rgba(37,99,235,0.1)]">
                        <Wrench className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-bold text-xl tracking-tight text-gradient">FixIt</span>
                </div>
            </div>
            <div className="flex-1 py-6">
                <nav className="grid gap-1 px-3 group-[[data-collapsed=true]]:justify-center">
                    {links.map((link, index) => {
                        const Icon = link.icon
                        const isActive = link.href === pathname
                        return (
                            <Link
                                key={index}
                                href={link.href}
                                className={cn(
                                    buttonVariants({ variant: isActive ? "secondary" : "ghost", size: "sm" }),
                                    "justify-start gap-3 transition-all duration-300 h-10",
                                    isActive && "bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary shadow-sm border-r-2 border-primary rounded-r-none"
                                )}
                            >
                                <Icon className={cn("h-4 w-4", isActive ? "text-primary" : "text-muted-foreground")} />
                                <span className="font-medium">{link.label}</span>
                            </Link>
                        )
                    })}
                </nav>
            </div>
            <div className="p-4 border-t border-border/5 bg-muted/5">
                <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors group" asChild>
                    <Link href="/login">
                        <LogOut className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-medium">Logout</span>
                    </Link>
                </Button>
            </div>
        </div>
    )
}
